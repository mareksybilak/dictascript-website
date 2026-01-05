// Dictascript Website Main JavaScript

(function() {
    'use strict';

    // Current language
    let currentLang = localStorage.getItem('dictascript-lang') || 'en';

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
        initLanguageSwitcher();
        initSmoothScroll();
        initFeedbackForm();
        initHeaderScroll();
        applyTranslations(currentLang);
    });

    // Language Switcher
    function initLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-footer');

        langButtons.forEach(btn => {
            // Set active state on load
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }

            btn.addEventListener('click', function() {
                const lang = this.dataset.lang;
                if (lang !== currentLang) {
                    currentLang = lang;
                    localStorage.setItem('dictascript-lang', lang);
                    applyTranslations(lang);
                    updateActiveButtons(lang);
                }
            });
        });
    }

    function updateActiveButtons(lang) {
        const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-footer');
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function applyTranslations(lang) {
        const { translations, getNestedTranslation } = window.i18n;
        const langData = translations[lang];

        if (!langData) {
            console.error('Translation not found for language:', lang);
            return;
        }

        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            const translation = getNestedTranslation(langData, key);

            if (translation) {
                // Handle different element types
                if (el.tagName === 'INPUT' && el.type === 'text') {
                    el.placeholder = translation;
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update page title based on language
        const titles = {
            en: 'Dictascript - AI Audio Transcription for macOS',
            pl: 'Dictascript - Transkrypcja Audio AI dla macOS',
            de: 'Dictascript - KI-Audio-Transkription fur macOS',
            es: 'Dictascript - Transcripcion de Audio IA para macOS',
            fr: 'Dictascript - Transcription Audio IA pour macOS'
        };
        document.title = titles[lang] || titles.en;
    }

    // Smooth Scroll for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Feedback Form
    function initFeedbackForm() {
        const form = document.getElementById('feedbackForm');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            // Show loading state
            btn.textContent = getLoadingMessage();
            btn.disabled = true;

            try {
                const formData = new FormData(form);

                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });

                if (response.ok) {
                    showFormSuccess(form, btn, originalText);
                } else {
                    showFormError(form, btn, originalText);
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormError(form, btn, originalText);
            }
        });
    }

    function getLoadingMessage() {
        const messages = {
            en: 'Sending...',
            pl: 'Wysylanie...',
            de: 'Senden...',
            es: 'Enviando...',
            fr: 'Envoi...'
        };
        return messages[currentLang] || messages.en;
    }

    function showFormSuccess(form, btn, originalText) {
        const successMessages = {
            en: 'Thank you for your feedback! We will get back to you soon.',
            pl: 'Dziekujemy za opinie! Wkrotce sie odezwiemy.',
            de: 'Vielen Dank fur Ihr Feedback! Wir werden uns bald bei Ihnen melden.',
            es: 'Gracias por tus comentarios! Nos pondremos en contacto pronto.',
            fr: 'Merci pour vos commentaires! Nous vous recontacterons bientot.'
        };

        btn.textContent = successMessages[currentLang] || successMessages.en;
        btn.style.background = '#10b981';

        // Reset form
        form.reset();

        // Restore button after 4 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
        }, 4000);
    }

    function showFormError(form, btn, originalText) {
        const errorMessages = {
            en: 'Something went wrong. Please try again.',
            pl: 'Cos poszlo nie tak. Sprobuj ponownie.',
            de: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
            es: 'Algo salio mal. Por favor, intentalo de nuevo.',
            fr: 'Une erreur est survenue. Veuillez reessayer.'
        };

        btn.textContent = errorMessages[currentLang] || errorMessages.en;
        btn.style.background = '#ef4444';

        // Restore button after 3 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
        }, 3000);
    }

    // Header scroll effect
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        });
    }

    // Animate elements on scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe feature cards, steps, etc.
        const animatedElements = document.querySelectorAll('.feature-card, .step, .audience-card');
        animatedElements.forEach(el => observer.observe(el));
    }

})();

// Copy to clipboard function (global)
function copyToClipboard(button) {
    const textToCopy = button.dataset.copy;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show success state
        const originalHTML = button.innerHTML;
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
        button.classList.add('copied');

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}
