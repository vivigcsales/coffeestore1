

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

    // 3. FORM SUBMISSION HANDLER (Agendamento)
    // IDs CORRIGIDOS: appointmentForm, formMessage
    const appointmentForm = document.getElementById('appointment-form');
    const formMessage = document.getElementById('form-message');
    
    if (appointmentForm && formMessage) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault(); // IMPEDE O RECARREGAMENTO DA PÁGINA

            // 1. Constrói a mensagem de sucesso com o estilo mágico
            formMessage.innerHTML = `
                <div class="p-4 rounded-xl bg-magico-dourado text-fundo-escuro font-bold text-center border-2 border-magico-roxo shadow-lg transition duration-500">
                    ✨ Agendamento enviado com sucesso! A MoonBrew&Co. entrará em contato em breve para confirmar. 🌙
                </div>
            `;
            formMessage.classList.remove('hidden'); // Exibe a mensagem

            // 2. Limpa o formulário e esconde a mensagem após 5 segundos
            setTimeout(() => {
                appointmentForm.reset(); // Limpa todos os campos
                formMessage.classList.add('hidden');
            }, 5000);
            
            // 3. Rola a tela para a mensagem de sucesso
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});