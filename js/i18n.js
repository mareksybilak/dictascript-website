// Dictascript Internationalization (i18n)
const translations = {
    en: {
        nav: {
            features: "Features",
            download: "Download",
            feedback: "Feedback"
        },
        banner: {
            badge: "Early Access",
            text: "This is a development release. Free to use! Your feedback helps us improve."
        },
        hero: {
            title: "Transform Audio into Text with AI Precision",
            subtitle: "Professional transcription app for macOS with speaker recognition, offline processing, and complete privacy.",
            badge: {
                free: "Free",
                macos: "macOS",
                offline: "Works Offline"
            },
            cta: {
                download: "Download Free",
                learn: "Learn More"
            }
        },
        features: {
            title: "Key Features",
            privacy: {
                title: "100% Local Processing",
                desc: "Your recordings never leave your device. Complete privacy guaranteed."
            },
            speakers: {
                title: "AI Speaker Recognition",
                desc: "Automatically identifies different speakers in your recordings."
            },
            offline: {
                title: "Works Offline",
                desc: "No internet required. Transcribe anywhere, anytime."
            },
            formats: {
                title: "Multi-Format Support",
                desc: "Import WAV, MP3, M4A, AAC, FLAC, AIFF, CAF files."
            },
            youtube: {
                title: "YouTube Import",
                desc: "Paste a YouTube link and transcribe directly."
            },
            export: {
                title: "Flexible Export",
                desc: "Export to TXT, SRT/VTT subtitles, JSON, or native TXP format."
            }
        },
        audience: {
            title: "Who Is It For?",
            journalists: {
                title: "Journalists",
                desc: "Quick interview transcription with speaker recognition"
            },
            podcasters: {
                title: "Podcasters",
                desc: "Episode descriptions and captions"
            },
            researchers: {
                title: "Researchers",
                desc: "Interview and focus group analysis"
            },
            students: {
                title: "Students",
                desc: "Lecture and seminar transcription"
            },
            legal: {
                title: "Legal Professionals",
                desc: "Meeting and deposition documentation"
            },
            assistants: {
                title: "Assistants",
                desc: "Business meeting protocols"
            }
        },
        howItWorks: {
            title: "How It Works",
            step1: {
                title: "Import",
                desc: "Drop your audio file or paste a YouTube link"
            },
            step2: {
                title: "Transcribe",
                desc: "AI processes locally with speaker detection"
            },
            step3: {
                title: "Edit & Export",
                desc: "Review, edit inline, export in your format"
            }
        },
        requirements: {
            title: "System Requirements",
            os: {
                label: "System",
                value: "macOS 14.0 (Sonoma) or later"
            },
            cpu: {
                label: "Processor",
                value: "Apple Silicon (M1/M2/M3/M4) or Intel"
            },
            ram: {
                label: "RAM",
                value: "8 GB (16 GB recommended)"
            },
            disk: {
                label: "Disk Space",
                value: "2 GB for app + AI models"
            }
        },
        download: {
            title: "Download Dictascript",
            subtitle: "Start transcribing your audio files today. Completely free during development.",
            badge: {
                free: "FREE"
            },
            button: "Download for macOS",
            size: "Download size: 18 MB",
            note: "No subscription. No hidden costs. Your data stays on your device.",
            install: {
                title: "Installation Note",
                text: "Since the app is not signed with an Apple Developer certificate, you'll need to approve it on first launch:",
                step1: "Open the DMG file and drag Dictascript to Applications",
                step2: "Open System Settings → Privacy & Security",
                step3: "Click \"Open Anyway\" next to the Dictascript message",
                step4: "Click \"Open\" in the confirmation dialog"
            },
            terminal: {
                title: "Quick Install (Terminal)",
                text: "For advanced users - one command installs everything:",
                note: "This script downloads, installs, and configures Dictascript automatically."
            }
        },
        feedback: {
            title: "Help Us Improve",
            subtitle: "Found a bug? Have a feature request? We'd love to hear from you!",
            form: {
                name: "Name",
                email: "Email",
                type: "Type",
                types: {
                    bug: "Bug Report",
                    feature: "Feature Request",
                    other: "Other"
                },
                message: "Message",
                submit: "Send Feedback"
            }
        },
        footer: {
            language: "Language:",
            rights: "All rights reserved."
        }
    },

    pl: {
        nav: {
            features: "Funkcje",
            download: "Pobierz",
            feedback: "Opinie"
        },
        banner: {
            badge: "Wczesny Dostep",
            text: "To jest wersja rozwojowa. Bezplatna! Twoja opinia pomaga nam ja ulepszac."
        },
        hero: {
            title: "Przeksztalc Audio w Tekst z Precyzja AI",
            subtitle: "Profesjonalna aplikacja do transkrypcji dla macOS z rozpoznawaniem mowcow, przetwarzaniem offline i pelna prywatnoscia.",
            badge: {
                free: "Za Darmo",
                macos: "macOS",
                offline: "Dziala Offline"
            },
            cta: {
                download: "Pobierz Za Darmo",
                learn: "Dowiedz Sie Wiecej"
            }
        },
        features: {
            title: "Kluczowe Funkcje",
            privacy: {
                title: "100% Lokalne Przetwarzanie",
                desc: "Twoje nagrania nigdy nie opuszczaja urzadzenia. Pelna prywatnosc gwarantowana."
            },
            speakers: {
                title: "Rozpoznawanie Mowcow AI",
                desc: "Automatycznie identyfikuje roznych mowcow w nagraniach."
            },
            offline: {
                title: "Dziala Offline",
                desc: "Nie wymaga internetu. Transkrybuj gdziekolwiek, kiedykolwiek."
            },
            formats: {
                title: "Wiele Formatow",
                desc: "Importuj pliki WAV, MP3, M4A, AAC, FLAC, AIFF, CAF."
            },
            youtube: {
                title: "Import z YouTube",
                desc: "Wklej link YouTube i transkrybuj bezposrednio."
            },
            export: {
                title: "Elastyczny Eksport",
                desc: "Eksportuj do TXT, napisow SRT/VTT, JSON lub natywnego formatu TXP."
            }
        },
        audience: {
            title: "Dla Kogo?",
            journalists: {
                title: "Dziennikarze",
                desc: "Szybka transkrypcja wywiadow z rozpoznawaniem mowcow"
            },
            podcasters: {
                title: "Podcasterzy",
                desc: "Opisy odcinkow i napisy"
            },
            researchers: {
                title: "Badacze",
                desc: "Analiza wywiadow i grup fokusowych"
            },
            students: {
                title: "Studenci",
                desc: "Transkrypcja wykladow i seminariow"
            },
            legal: {
                title: "Prawnicy",
                desc: "Dokumentacja spotkan i przesluchan"
            },
            assistants: {
                title: "Asystenci",
                desc: "Protokoly spotkan biznesowych"
            }
        },
        howItWorks: {
            title: "Jak To Dziala",
            step1: {
                title: "Importuj",
                desc: "Upusc plik audio lub wklej link YouTube"
            },
            step2: {
                title: "Transkrybuj",
                desc: "AI przetwarza lokalnie z wykrywaniem mowcow"
            },
            step3: {
                title: "Edytuj i Eksportuj",
                desc: "Przejrzyj, edytuj, eksportuj w wybranym formacie"
            }
        },
        requirements: {
            title: "Wymagania Systemowe",
            os: {
                label: "System",
                value: "macOS 14.0 (Sonoma) lub nowszy"
            },
            cpu: {
                label: "Procesor",
                value: "Apple Silicon (M1/M2/M3/M4) lub Intel"
            },
            ram: {
                label: "RAM",
                value: "8 GB (zalecane 16 GB)"
            },
            disk: {
                label: "Dysk",
                value: "2 GB na aplikacje + modele AI"
            }
        },
        download: {
            title: "Pobierz Dictascript",
            subtitle: "Zacznij transkrybowac pliki audio juz dzis. Calkowicie za darmo w fazie rozwoju.",
            badge: {
                free: "ZA DARMO"
            },
            button: "Pobierz dla macOS",
            size: "Rozmiar: 18 MB",
            note: "Bez subskrypcji. Bez ukrytych kosztow. Twoje dane zostaja na urzadzeniu.",
            install: {
                title: "Uwaga dotyczaca instalacji",
                text: "Poniewaz aplikacja nie jest podpisana certyfikatem Apple Developer, musisz ja zatwierdzic przy pierwszym uruchomieniu:",
                step1: "Otworz plik DMG i przeciagnij Dictascript do Aplikacji",
                step2: "Otworz Ustawienia systemowe → Prywatnosc i ochrona",
                step3: "Kliknij \"Otworz mimo to\" obok komunikatu o Dictascript",
                step4: "Kliknij \"Otworz\" w oknie potwierdzenia"
            },
            terminal: {
                title: "Szybka instalacja (Terminal)",
                text: "Dla zaawansowanych uzytkownikow - jedna komenda instaluje wszystko:",
                note: "Ten skrypt automatycznie pobiera, instaluje i konfiguruje Dictascript."
            }
        },
        feedback: {
            title: "Pomoz Nam Sie Rozwijac",
            subtitle: "Znalazles blad? Masz propozycje funkcji? Chetnie sie dowiemy!",
            form: {
                name: "Imie",
                email: "Email",
                type: "Typ",
                types: {
                    bug: "Zgloszenie Bledu",
                    feature: "Propozycja Funkcji",
                    other: "Inne"
                },
                message: "Wiadomosc",
                submit: "Wyslij Opinie"
            }
        },
        footer: {
            language: "Jezyk:",
            rights: "Wszelkie prawa zastrzezone."
        }
    },

    de: {
        nav: {
            features: "Funktionen",
            download: "Herunterladen",
            feedback: "Feedback"
        },
        banner: {
            badge: "Fruher Zugang",
            text: "Dies ist eine Entwicklungsversion. Kostenlos nutzbar! Ihr Feedback hilft uns zu verbessern."
        },
        hero: {
            title: "Audio in Text mit KI-Prazision umwandeln",
            subtitle: "Professionelle Transkriptions-App fur macOS mit Sprechererkennung, Offline-Verarbeitung und vollstandiger Privatsphare.",
            badge: {
                free: "Kostenlos",
                macos: "macOS",
                offline: "Funktioniert Offline"
            },
            cta: {
                download: "Kostenlos Herunterladen",
                learn: "Mehr Erfahren"
            }
        },
        features: {
            title: "Hauptfunktionen",
            privacy: {
                title: "100% Lokale Verarbeitung",
                desc: "Ihre Aufnahmen verlassen niemals Ihr Gerat. Vollstandige Privatsphare garantiert."
            },
            speakers: {
                title: "KI-Sprechererkennung",
                desc: "Identifiziert automatisch verschiedene Sprecher in Ihren Aufnahmen."
            },
            offline: {
                title: "Funktioniert Offline",
                desc: "Kein Internet erforderlich. Transkribieren Sie uberall und jederzeit."
            },
            formats: {
                title: "Multi-Format-Unterstutzung",
                desc: "Importieren Sie WAV, MP3, M4A, AAC, FLAC, AIFF, CAF-Dateien."
            },
            youtube: {
                title: "YouTube-Import",
                desc: "Fugen Sie einen YouTube-Link ein und transkribieren Sie direkt."
            },
            export: {
                title: "Flexibler Export",
                desc: "Export nach TXT, SRT/VTT-Untertitel, JSON oder natives TXP-Format."
            }
        },
        audience: {
            title: "Fur Wen?",
            journalists: {
                title: "Journalisten",
                desc: "Schnelle Interview-Transkription mit Sprechererkennung"
            },
            podcasters: {
                title: "Podcaster",
                desc: "Episodenbeschreibungen und Untertitel"
            },
            researchers: {
                title: "Forscher",
                desc: "Interview- und Fokusgruppen-Analyse"
            },
            students: {
                title: "Studenten",
                desc: "Vorlesungs- und Seminar-Transkription"
            },
            legal: {
                title: "Juristen",
                desc: "Besprechungs- und Vernehmungsdokumentation"
            },
            assistants: {
                title: "Assistenten",
                desc: "Geschaftsbesprechungsprotokolle"
            }
        },
        howItWorks: {
            title: "So Funktioniert Es",
            step1: {
                title: "Importieren",
                desc: "Audiodatei ablegen oder YouTube-Link einfugen"
            },
            step2: {
                title: "Transkribieren",
                desc: "KI verarbeitet lokal mit Sprechererkennung"
            },
            step3: {
                title: "Bearbeiten & Exportieren",
                desc: "Uberprufen, inline bearbeiten, in Ihrem Format exportieren"
            }
        },
        requirements: {
            title: "Systemanforderungen",
            os: {
                label: "System",
                value: "macOS 14.0 (Sonoma) oder neuer"
            },
            cpu: {
                label: "Prozessor",
                value: "Apple Silicon (M1/M2/M3/M4) oder Intel"
            },
            ram: {
                label: "RAM",
                value: "8 GB (16 GB empfohlen)"
            },
            disk: {
                label: "Speicherplatz",
                value: "2 GB fur App + KI-Modelle"
            }
        },
        download: {
            title: "Dictascript Herunterladen",
            subtitle: "Beginnen Sie noch heute mit der Transkription Ihrer Audiodateien. Wahrend der Entwicklung vollig kostenlos.",
            badge: {
                free: "KOSTENLOS"
            },
            button: "Fur macOS Herunterladen",
            size: "Downloadgrosse: 18 MB",
            note: "Kein Abonnement. Keine versteckten Kosten. Ihre Daten bleiben auf Ihrem Gerat.",
            install: {
                title: "Installationshinweis",
                text: "Da die App nicht mit einem Apple Developer-Zertifikat signiert ist, mussen Sie sie beim ersten Start genehmigen:",
                step1: "Offnen Sie die DMG-Datei und ziehen Sie Dictascript in Programme",
                step2: "Offnen Sie Systemeinstellungen → Datenschutz & Sicherheit",
                step3: "Klicken Sie auf \"Trotzdem offnen\" neben der Dictascript-Meldung",
                step4: "Klicken Sie im Bestatigungsdialog auf \"Offnen\""
            },
            terminal: {
                title: "Schnellinstallation (Terminal)",
                text: "Fur fortgeschrittene Benutzer - ein Befehl installiert alles:",
                note: "Dieses Skript ladt Dictascript automatisch herunter, installiert und konfiguriert es."
            }
        },
        feedback: {
            title: "Helfen Sie Uns zu Verbessern",
            subtitle: "Fehler gefunden? Feature-Wunsch? Wir wurden gerne von Ihnen horen!",
            form: {
                name: "Name",
                email: "E-Mail",
                type: "Typ",
                types: {
                    bug: "Fehlerbericht",
                    feature: "Feature-Anfrage",
                    other: "Sonstiges"
                },
                message: "Nachricht",
                submit: "Feedback Senden"
            }
        },
        footer: {
            language: "Sprache:",
            rights: "Alle Rechte vorbehalten."
        }
    },

    es: {
        nav: {
            features: "Funciones",
            download: "Descargar",
            feedback: "Comentarios"
        },
        banner: {
            badge: "Acceso Anticipado",
            text: "Esta es una version de desarrollo. Gratis! Tus comentarios nos ayudan a mejorar."
        },
        hero: {
            title: "Transforma Audio en Texto con Precision de IA",
            subtitle: "Aplicacion profesional de transcripcion para macOS con reconocimiento de hablantes, procesamiento offline y privacidad completa.",
            badge: {
                free: "Gratis",
                macos: "macOS",
                offline: "Funciona Offline"
            },
            cta: {
                download: "Descargar Gratis",
                learn: "Saber Mas"
            }
        },
        features: {
            title: "Funciones Principales",
            privacy: {
                title: "100% Procesamiento Local",
                desc: "Tus grabaciones nunca salen de tu dispositivo. Privacidad completa garantizada."
            },
            speakers: {
                title: "Reconocimiento de Hablantes IA",
                desc: "Identifica automaticamente diferentes hablantes en tus grabaciones."
            },
            offline: {
                title: "Funciona Offline",
                desc: "No requiere internet. Transcribe en cualquier lugar y momento."
            },
            formats: {
                title: "Soporte Multi-Formato",
                desc: "Importa archivos WAV, MP3, M4A, AAC, FLAC, AIFF, CAF."
            },
            youtube: {
                title: "Importar de YouTube",
                desc: "Pega un enlace de YouTube y transcribe directamente."
            },
            export: {
                title: "Exportacion Flexible",
                desc: "Exporta a TXT, subtitulos SRT/VTT, JSON o formato nativo TXP."
            }
        },
        audience: {
            title: "Para Quien?",
            journalists: {
                title: "Periodistas",
                desc: "Transcripcion rapida de entrevistas con reconocimiento de hablantes"
            },
            podcasters: {
                title: "Podcasters",
                desc: "Descripciones de episodios y subtitulos"
            },
            researchers: {
                title: "Investigadores",
                desc: "Analisis de entrevistas y grupos focales"
            },
            students: {
                title: "Estudiantes",
                desc: "Transcripcion de conferencias y seminarios"
            },
            legal: {
                title: "Profesionales Legales",
                desc: "Documentacion de reuniones y deposiciones"
            },
            assistants: {
                title: "Asistentes",
                desc: "Protocolos de reuniones de negocios"
            }
        },
        howItWorks: {
            title: "Como Funciona",
            step1: {
                title: "Importar",
                desc: "Arrastra tu archivo de audio o pega un enlace de YouTube"
            },
            step2: {
                title: "Transcribir",
                desc: "La IA procesa localmente con deteccion de hablantes"
            },
            step3: {
                title: "Editar y Exportar",
                desc: "Revisa, edita en linea, exporta en tu formato"
            }
        },
        requirements: {
            title: "Requisitos del Sistema",
            os: {
                label: "Sistema",
                value: "macOS 14.0 (Sonoma) o posterior"
            },
            cpu: {
                label: "Procesador",
                value: "Apple Silicon (M1/M2/M3/M4) o Intel"
            },
            ram: {
                label: "RAM",
                value: "8 GB (16 GB recomendado)"
            },
            disk: {
                label: "Espacio en Disco",
                value: "2 GB para app + modelos de IA"
            }
        },
        download: {
            title: "Descargar Dictascript",
            subtitle: "Empieza a transcribir tus archivos de audio hoy. Completamente gratis durante el desarrollo.",
            badge: {
                free: "GRATIS"
            },
            button: "Descargar para macOS",
            size: "Tamano de descarga: 18 MB",
            note: "Sin suscripcion. Sin costos ocultos. Tus datos permanecen en tu dispositivo.",
            install: {
                title: "Nota de instalacion",
                text: "Como la app no esta firmada con un certificado de Apple Developer, deberas aprobarla en el primer inicio:",
                step1: "Abre el archivo DMG y arrastra Dictascript a Aplicaciones",
                step2: "Abre Configuracion del Sistema → Privacidad y Seguridad",
                step3: "Haz clic en \"Abrir de todos modos\" junto al mensaje de Dictascript",
                step4: "Haz clic en \"Abrir\" en el dialogo de confirmacion"
            },
            terminal: {
                title: "Instalacion rapida (Terminal)",
                text: "Para usuarios avanzados - un comando instala todo:",
                note: "Este script descarga, instala y configura Dictascript automaticamente."
            }
        },
        feedback: {
            title: "Ayudanos a Mejorar",
            subtitle: "Encontraste un error? Tienes una solicitud de funcion? Nos encantaria saber de ti!",
            form: {
                name: "Nombre",
                email: "Correo",
                type: "Tipo",
                types: {
                    bug: "Reporte de Error",
                    feature: "Solicitud de Funcion",
                    other: "Otro"
                },
                message: "Mensaje",
                submit: "Enviar Comentarios"
            }
        },
        footer: {
            language: "Idioma:",
            rights: "Todos los derechos reservados."
        }
    },

    fr: {
        nav: {
            features: "Fonctionnalites",
            download: "Telecharger",
            feedback: "Commentaires"
        },
        banner: {
            badge: "Acces Anticipe",
            text: "Ceci est une version de developpement. Gratuite! Vos retours nous aident a nous ameliorer."
        },
        hero: {
            title: "Transformez l'Audio en Texte avec Precision IA",
            subtitle: "Application professionnelle de transcription pour macOS avec reconnaissance des intervenants, traitement hors ligne et confidentialite complete.",
            badge: {
                free: "Gratuit",
                macos: "macOS",
                offline: "Fonctionne Hors Ligne"
            },
            cta: {
                download: "Telecharger Gratuitement",
                learn: "En Savoir Plus"
            }
        },
        features: {
            title: "Fonctionnalites Cles",
            privacy: {
                title: "100% Traitement Local",
                desc: "Vos enregistrements ne quittent jamais votre appareil. Confidentialite complete garantie."
            },
            speakers: {
                title: "Reconnaissance des Intervenants IA",
                desc: "Identifie automatiquement les differents intervenants dans vos enregistrements."
            },
            offline: {
                title: "Fonctionne Hors Ligne",
                desc: "Pas d'internet requis. Transcrivez n'importe ou, n'importe quand."
            },
            formats: {
                title: "Support Multi-Formats",
                desc: "Importez des fichiers WAV, MP3, M4A, AAC, FLAC, AIFF, CAF."
            },
            youtube: {
                title: "Import YouTube",
                desc: "Collez un lien YouTube et transcrivez directement."
            },
            export: {
                title: "Export Flexible",
                desc: "Exportez en TXT, sous-titres SRT/VTT, JSON ou format natif TXP."
            }
        },
        audience: {
            title: "Pour Qui?",
            journalists: {
                title: "Journalistes",
                desc: "Transcription rapide d'interviews avec reconnaissance des intervenants"
            },
            podcasters: {
                title: "Podcasteurs",
                desc: "Descriptions d'episodes et sous-titres"
            },
            researchers: {
                title: "Chercheurs",
                desc: "Analyse d'entretiens et groupes de discussion"
            },
            students: {
                title: "Etudiants",
                desc: "Transcription de cours et seminaires"
            },
            legal: {
                title: "Professionnels Juridiques",
                desc: "Documentation de reunions et depositions"
            },
            assistants: {
                title: "Assistants",
                desc: "Protocoles de reunions d'affaires"
            }
        },
        howItWorks: {
            title: "Comment Ca Marche",
            step1: {
                title: "Importer",
                desc: "Deposez votre fichier audio ou collez un lien YouTube"
            },
            step2: {
                title: "Transcrire",
                desc: "L'IA traite localement avec detection des intervenants"
            },
            step3: {
                title: "Editer et Exporter",
                desc: "Revoir, editer en ligne, exporter dans votre format"
            }
        },
        requirements: {
            title: "Configuration Requise",
            os: {
                label: "Systeme",
                value: "macOS 14.0 (Sonoma) ou ulterieur"
            },
            cpu: {
                label: "Processeur",
                value: "Apple Silicon (M1/M2/M3/M4) ou Intel"
            },
            ram: {
                label: "RAM",
                value: "8 Go (16 Go recommandes)"
            },
            disk: {
                label: "Espace Disque",
                value: "2 Go pour l'app + modeles IA"
            }
        },
        download: {
            title: "Telecharger Dictascript",
            subtitle: "Commencez a transcrire vos fichiers audio aujourd'hui. Entierement gratuit pendant le developpement.",
            badge: {
                free: "GRATUIT"
            },
            button: "Telecharger pour macOS",
            size: "Taille du telechargement: 18 Mo",
            note: "Sans abonnement. Sans couts caches. Vos donnees restent sur votre appareil.",
            install: {
                title: "Note d'installation",
                text: "Comme l'application n'est pas signee avec un certificat Apple Developer, vous devrez l'approuver au premier lancement:",
                step1: "Ouvrez le fichier DMG et faites glisser Dictascript dans Applications",
                step2: "Ouvrez Reglages Systeme → Confidentialite et securite",
                step3: "Cliquez sur \"Ouvrir quand meme\" a cote du message Dictascript",
                step4: "Cliquez sur \"Ouvrir\" dans la boite de dialogue de confirmation"
            },
            terminal: {
                title: "Installation rapide (Terminal)",
                text: "Pour les utilisateurs avances - une commande installe tout:",
                note: "Ce script telecharge, installe et configure Dictascript automatiquement."
            }
        },
        feedback: {
            title: "Aidez-Nous a Nous Ameliorer",
            subtitle: "Trouve un bug? Une demande de fonctionnalite? Nous aimerions avoir de vos nouvelles!",
            form: {
                name: "Nom",
                email: "Email",
                type: "Type",
                types: {
                    bug: "Rapport de Bug",
                    feature: "Demande de Fonctionnalite",
                    other: "Autre"
                },
                message: "Message",
                submit: "Envoyer Commentaires"
            }
        },
        footer: {
            language: "Langue:",
            rights: "Tous droits reserves."
        }
    }
};

// Helper function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}

// Export for use in main.js
window.i18n = {
    translations,
    getNestedTranslation
};
