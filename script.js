function logAction(actionDescription) {
        console.log("[Empresas Futuras]: " + actionDescription);
    }

    function setupCadastroPage() {
        const form = document.querySelector('form');

        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const nome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;
                const senha = document.getElementById('senha').value;

                if (nome && email && senha) {

                    logAction("Dados do formulário coletados:");
                    logAction("Nome: " + nome);
                    logAction("E-mail: " + email);

                    alert("Cadastro realizado com sucesso! (Dados enviados via JS)");
                    form.reset();
                } else {
                    alert("Por favor, preencha todos os campos obrigatórios."); 
                }
            });
        }
    }

    function setupMobileNav() {
        const pageTitle = document.title;
        logAction("página '" + pageTitle + "' carregada com sucesso.");
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        logAction("DOM completamente carregado e analisado.");

        if (document.title.includes("Cadastro")) {
            setupCadastroPage();
        } else {
            setupMobileNav();
        }
   });
        
    

