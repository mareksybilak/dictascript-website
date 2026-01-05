#!/bin/bash
#
# Dictascript Installer
# https://dictascript.app
#
# Usage: curl -fsSL https://dictascript.app/install.sh | bash
#

set -e

# Configuration
APP_NAME="Dictascript"
VERSION="1.0.3"
DMG_URL="https://dictascript.app/downloads/Dictascript-${VERSION}.dmg"
INSTALL_DIR="/Applications"
TMP_DIR="/tmp/dictascript-install"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
info() {
    echo -e "${BLUE}==>${NC} $1"
}

success() {
    echo -e "${GREEN}==>${NC} $1"
}

warn() {
    echo -e "${YELLOW}==>${NC} $1"
}

error() {
    echo -e "${RED}==>${NC} $1" >&2
}

cleanup() {
    if [ -d "$TMP_DIR" ]; then
        rm -rf "$TMP_DIR"
    fi
    # Detach DMG if still mounted
    if [ -d "/Volumes/$APP_NAME" ]; then
        hdiutil detach "/Volumes/$APP_NAME" -quiet 2>/dev/null || true
    fi
}

# Set up cleanup trap
trap cleanup EXIT

# Header
echo ""
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║${NC}     ${GREEN}Dictascript Installer v${VERSION}${NC}        ${BLUE}║${NC}"
echo -e "${BLUE}║${NC}     AI Audio Transcription App        ${BLUE}║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Check macOS
if [[ "$(uname)" != "Darwin" ]]; then
    error "This installer is for macOS only."
    exit 1
fi

# Check macOS version (require 14.0+)
MACOS_VERSION=$(sw_vers -productVersion)
MACOS_MAJOR=$(echo "$MACOS_VERSION" | cut -d. -f1)
if [ "$MACOS_MAJOR" -lt 14 ]; then
    error "Dictascript requires macOS 14.0 (Sonoma) or later."
    error "Your version: $MACOS_VERSION"
    exit 1
fi

info "Detected macOS $MACOS_VERSION"

# Check if already installed
if [ -d "$INSTALL_DIR/$APP_NAME.app" ]; then
    warn "$APP_NAME is already installed."
    read -p "Do you want to reinstall/update? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Installation cancelled."
        exit 0
    fi
    info "Removing existing installation..."
    rm -rf "$INSTALL_DIR/$APP_NAME.app"
fi

# Create temp directory
mkdir -p "$TMP_DIR"

# Download
info "Downloading $APP_NAME v$VERSION..."
if ! curl -fSL --progress-bar -o "$TMP_DIR/$APP_NAME.dmg" "$DMG_URL"; then
    error "Download failed. Please check your internet connection."
    exit 1
fi

# Verify download
if [ ! -f "$TMP_DIR/$APP_NAME.dmg" ]; then
    error "Downloaded file not found."
    exit 1
fi

DMG_SIZE=$(du -h "$TMP_DIR/$APP_NAME.dmg" | cut -f1)
success "Downloaded $DMG_SIZE"

# Mount DMG
info "Mounting disk image..."
if ! hdiutil attach "$TMP_DIR/$APP_NAME.dmg" -quiet -nobrowse; then
    error "Failed to mount disk image."
    exit 1
fi

# Check if app exists in DMG
if [ ! -d "/Volumes/$APP_NAME/$APP_NAME.app" ]; then
    error "Application not found in disk image."
    exit 1
fi

# Copy to Applications
info "Installing to $INSTALL_DIR..."
if ! cp -R "/Volumes/$APP_NAME/$APP_NAME.app" "$INSTALL_DIR/"; then
    error "Failed to copy application. Do you have write permissions to $INSTALL_DIR?"
    exit 1
fi

# Unmount DMG
info "Cleaning up..."
hdiutil detach "/Volumes/$APP_NAME" -quiet 2>/dev/null || true

# Remove quarantine attribute (this is the key step!)
info "Removing quarantine attribute..."
if ! xattr -cr "$INSTALL_DIR/$APP_NAME.app" 2>/dev/null; then
    warn "Could not remove quarantine attribute. You may need to approve the app manually."
fi

# Verify installation
if [ -d "$INSTALL_DIR/$APP_NAME.app" ]; then
    success "Installation complete!"
    echo ""
    echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║${NC}  $APP_NAME has been installed!         ${GREEN}║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
    echo ""
    echo "You can now:"
    echo "  1. Open $APP_NAME from Applications folder"
    echo "  2. Or run: open -a $APP_NAME"
    echo ""

    # Ask to open
    read -p "Open $APP_NAME now? [Y/n] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Nn]$ ]]; then
        open -a "$APP_NAME"
    fi
else
    error "Installation verification failed."
    exit 1
fi
