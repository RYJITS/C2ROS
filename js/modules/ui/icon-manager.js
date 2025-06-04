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
        edit: '<i class="ph ph-pencil"></i>'
    };
    global.IconManager = {
        getIcon(name) {
            return ICONS[name] || '';
        }
    };
})(window);
