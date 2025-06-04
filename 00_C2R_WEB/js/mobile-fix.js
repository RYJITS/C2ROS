/**
 * Correction du bug du menu hamburger mobile
 * Ce script corrige le problème de fermeture immédiate de la sidebar
 */

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Application du correctif mobile...');
    
    // Correction du menu hamburger
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    
    if (hamburger) {
        // Supprimer les anciens événements et en ajouter de nouveaux
        hamburger.replaceWith(hamburger.cloneNode(true));
        const newHamburger = document.getElementById('hamburger');
        
        newHamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🍔 Clic hamburger détecté');
            
            if (window.C2R_SYSTEM?.uiCore) {
                window.C2R_SYSTEM.uiCore.toggleSidebar();
            } else {
                // Fallback si le système n'est pas encore chargé
                toggleSidebarFallback();
            }
        });
    }
    
    // Empêcher la fermeture lors des clics dans la sidebar
    if (sidebar) {
        sidebar.addEventListener('click', function(e) {
            // Vérifier si c'est un élément qui doit fermer la sidebar
            const isNavLink = e.target.closest('.nav-link');
            const isAppItem = e.target.closest('.sidebar-app-item');
            const isLogoutBtn = e.target.closest('.btn-logout');
            const isCloseBtn = e.target.closest('.sidebar-toggle');
            
            // Si ce n'est pas un élément de navigation, empêcher la propagation
            if (!isNavLink && !isAppItem && !isLogoutBtn && !isCloseBtn) {
                e.stopPropagation();
                console.log('🛡️ Propagation stoppée dans la sidebar');
            }
        });
    }
    
    // Correction du bouton de fermeture
    if (sidebarToggle) {
        sidebarToggle.replaceWith(sidebarToggle.cloneNode(true));
        const newSidebarToggle = document.getElementById('sidebar-toggle');
        
        newSidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('❌ Clic fermeture sidebar détecté');
            
            if (window.C2R_SYSTEM?.uiCore) {
                window.C2R_SYSTEM.uiCore.closeSidebar();
            } else {
                closeSidebarFallback();
            }
        });
    }
    
    // Fermeture sur overlay
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            console.log('🌫️ Clic overlay détecté');
            
            if (window.C2R_SYSTEM?.uiCore) {
                window.C2R_SYSTEM.uiCore.closeSidebar();
            } else {
                closeSidebarFallback();
            }
        });
    }
    
    // Gestion des liens de navigation pour fermeture automatique
    document.addEventListener('click', function(e) {
        const navLink = e.target.closest('.nav-link');
        
        if (navLink && window.innerWidth <= 768) {
            console.log('🔗 Navigation mobile détectée, fermeture dans 150ms');
            
            setTimeout(() => {
                if (window.C2R_SYSTEM?.uiCore) {
                    window.C2R_SYSTEM.uiCore.closeSidebar();
                } else {
                    closeSidebarFallback();
                }
            }, 150);
        }
    });
    
    console.log('✅ Correctif mobile appliqué');
});

// Fonctions de fallback si le système principal n'est pas disponible
function toggleSidebarFallback() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && hamburger && overlay) {
        const isOpen = sidebar.classList.contains('open');
        
        if (isOpen) {
            closeSidebarFallback();
        } else {
            openSidebarFallback();
        }
    }
}

function openSidebarFallback() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    
    if (sidebar) sidebar.classList.add('open');
    if (hamburger) hamburger.classList.add('active');
    if (overlay) overlay.classList.add('show');
    
    console.log('📱 Sidebar ouverte (fallback)');
}

function closeSidebarFallback() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    
    if (sidebar) sidebar.classList.remove('open');
    if (hamburger) hamburger.classList.remove('active');
    if (overlay) overlay.classList.remove('show');
    
    console.log('📱 Sidebar fermée (fallback)');
}

// Gestion du redimensionnement
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeSidebarFallback();
    }
});

// Export global pour debug
window.MOBILE_FIX = {
    toggleSidebar: toggleSidebarFallback,
    openSidebar: openSidebarFallback,
    closeSidebar: closeSidebarFallback
};
