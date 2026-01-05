#!/bin/bash
#
# Dictascript Uninstaller
# https://dictascript.app
#
# Usage: curl -fsSL https://dictascript.app/uninstall.sh | bash
#

set -e

APP_NAME="Dictascript"
INSTALL_DIR="/Applications"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo -e "${YELLOW}╔════════════════════════════════════════╗${NC}"
echo -e "${YELLOW}║${NC}     ${RED}Dictascript Uninstaller${NC}            ${YELLOW}║${NC}"
echo -e "${YELLOW}╚════════════════════════════════════════╝${NC}"
echo ""

# Check if installed
if [ ! -d "$INSTALL_DIR/$APP_NAME.app" ]; then
    echo -e "${YELLOW}==>${NC} $APP_NAME is not installed."
    exit 0
fi

# Confirm
read -p "Are you sure you want to uninstall $APP_NAME? [y/N] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Uninstallation cancelled."
    exit 0
fi

# Close app if running
if pgrep -x "$APP_NAME" > /dev/null; then
    echo -e "${BLUE}==>${NC} Closing $APP_NAME..."
    pkill -x "$APP_NAME" 2>/dev/null || true
    sleep 1
fi

# Remove application
echo -e "${BLUE}==>${NC} Removing $APP_NAME..."
rm -rf "$INSTALL_DIR/$APP_NAME.app"

# Remove app data (optional)
read -p "Remove application data and settings? [y/N] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}==>${NC} Removing application data..."
    rm -rf ~/Library/Application\ Support/$APP_NAME 2>/dev/null || true
    rm -rf ~/Library/Preferences/com.dictascript.* 2>/dev/null || true
    rm -rf ~/Library/Caches/com.dictascript.* 2>/dev/null || true
fi

echo ""
echo -e "${GREEN}==>${NC} $APP_NAME has been uninstalled."
echo ""
