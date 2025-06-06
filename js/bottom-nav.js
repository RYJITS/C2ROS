// Gestion de la barre de navigation basse et du menu des applications
class BottomNav {
    constructor() {
        this.dropdown = document.getElementById('mobile-apps-dropdown');
        this.appsBtn = document.getElementById('mobile-apps-btn');
        this.closeBtn = document.getElementById('close-mobile-apps');
        this.navLinks = document.querySelectorAll('.bottom-nav .nav-link[data-section]');
        this.init();
    }

    init() {
        if (this.appsBtn) {
            this.appsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMenu();
            });
        }

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeMenu());
        }

        if (this.dropdown) {
            this.dropdown.addEventListener('click', (e) => {
                if (e.target === this.dropdown) {
                    this.closeMenu();
                }
            });

            this.dropdown.addEventListener('click', (e) => {
                const item = e.target.closest('.mobile-app-item');
                if (item && item.dataset.app) {
                    this.launchApp(item.dataset.app);
                }
            });
        }

        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.activateLink(link);
                this.showSection(link.dataset.section);
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            });
        });
    }

    toggleMenu() {
        if (!this.dropdown) return;
        if (this.dropdown.classList.contains('show')) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        if (!this.dropdown) return;
        this.updateAppsList();
        this.dropdown.classList.add('show');
    }

    closeMenu() {
        if (!this.dropdown) return;
        this.dropdown.classList.remove('show');
    }

    updateAppsList() {
        const appsList = document.getElementById('mobile-apps-list');
        const appCore = window.C2R_SYSTEM?.appCore;
        if (!appsList || !appCore) return;

        const installed = appCore.getInstalledApps();
        if (installed.length === 0) {
            appsList.innerHTML = '<p class="no-apps">Aucune application installée</p>';
            return;
        }

        appsList.innerHTML = installed.map(app => `
            <div class="mobile-app-item" data-app="${app.id}">
                <span class="app-icon">${app.icon}</span>
                <span class="app-name">${app.name}</span>
            </div>
        `).join('');
    }

    launchApp(appId) {
        if (window.C2R_SYSTEM?.uiCore) {
            window.C2R_SYSTEM.uiCore.launchApp(appId);
        }
        this.closeMenu();
    }

    activateLink(link) {
        this.navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    showSection(name) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(`page-${name}`);
        if (target) target.classList.add('active');

        const logo = document.querySelector('.logo');
        if (logo) {
            logo.classList.add('logo-bounce');
            setTimeout(() => logo.classList.remove('logo-bounce'), 300);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.bottomNav = new BottomNav();
});
