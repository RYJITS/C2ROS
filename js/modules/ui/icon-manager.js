// IconManager centralises icon rendering
(function(global) {
    const ICONS = {
        home: '<i class="ph ph-house"></i>',
        store: '<i class="ph ph-shopping-bag"></i>',
        profile: '<i class="ph ph-user"></i>',
        admin: '<i class="ph ph-gear"></i>',
        install: '<i class="ph ph-plus"></i>',
        uninstall: '<i class="ph ph-trash"></i>',
        check: '<i class="ph ph-check"></i>',
        signout: '<i class="ph ph-sign-out"></i>',
        search: '<i class="ph ph-magnifying-glass"></i>',
        idea: '<i class="ph ph-lightbulb"></i>',
        refresh: '<i class="ph ph-arrow-clockwise"></i>',
        note: '<i class="ph ph-note"></i>',
        checkbox: '<i class="ph ph-check-square"></i>',
        robot: '<i class="ph ph-robot"></i>',
        file: '<i class="ph ph-file-text"></i>',
        globe: '<i class="ph ph-globe"></i>',
        calculator: '<i class="ph ph-calculator"></i>',
        weather: '<i class="ph ph-cloud-sun"></i>',
        timer: '<i class="ph ph-timer"></i>',
        edit: '<i class="ph ph-pencil"></i>',
        'file-new': '<i class="ph ph-file-plus"></i>',
        save: '<i class="ph ph-floppy-disk"></i>',
        open: '<i class="ph ph-folder-open"></i>',
        stats: '<i class="ph ph-chart-bar"></i>',
        preview: '<i class="ph ph-eye"></i>',
        format: '<i class="ph ph-magic-wand"></i>',
        broom: '<i class="ph ph-broom"></i>',
        clipboard: '<i class="ph ph-clipboard"></i>',
        add: '<i class="ph ph-plus"></i>',
        mail: '<i class="ph ph-envelope"></i>',
        phone: '<i class="ph ph-phone"></i>',
        cart: '<i class="ph ph-shopping-cart"></i>',
        play: '<i class="ph ph-play"></i>',
        pause: '<i class="ph ph-pause"></i>',
        checkcircle: '<i class="ph ph-check-circle"></i>',
        sun: '<i class="ph ph-sun"></i>',
        cloud: '<i class="ph ph-cloud"></i>',
        rain: '<i class="ph ph-cloud-rain"></i>',
        lightning: '<i class="ph ph-cloud-lightning"></i>',
        droplet: '<i class="ph ph-drop"></i>',
        wind: '<i class="ph ph-wind"></i>',
        thermometer: '<i class="ph ph-thermometer-simple"></i>',
        circle: '<i class="ph ph-circle"></i>',
        'map-pin': '<i class="ph ph-map-pin"></i>'
    };
    global.IconManager = {
        getIcon(name) {
            return ICONS[name] || '';
        },

        /**
         * Injecter les icônes dans le conteneur fourni
         * @param {ParentNode} container - élément à parcourir
         */
        inject(container = document) {
            container.querySelectorAll('[data-icon]').forEach(el => {
                el.innerHTML = this.getIcon(el.dataset.icon);
            });
        }
    };
})(window);
