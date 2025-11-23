

document.addEventListener('DOMContentLoaded', () => {
             
    // 1. MOBILE MENU TOGGLE
    // IDs CORRIGIDOS: mobileMenuButton, mobileMenu, menuIcon
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuButton && mobileMenu && menuIcon) {
        mobileMenuButton.addEventListener('click', () => {
            // Após o evento do clique, alterna a classe 'hidden' para mostrar/esconder o menu.
            mobileMenu.classList.toggle('hidden');

            // Alterna o ícone usando as classes Font Awesome
            if (mobileMenu.classList.contains('hidden')) {
                // Menu escondido (mostra o ícone de hambúrguer)
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars'); 
            } else {
                // Menu visível (mostra o ícone de fechar)
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        });
    }

    // 2. SCROLL SUAVE PARA LINKS INTERNOS
    // Esta lógica estava correta e não precisou de ajustes.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o salto instantâneo padrão
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rolagem suave
                targetElement.scrollIntoView({
                    behavior: 'smooth' 
                });
                
                // Fecha o menu mobile se estiver aberto (melhora a UX)
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
    });
});
