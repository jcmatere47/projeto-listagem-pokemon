// Obtém uma referência para o botão "Alterar Tema"
const botaoAlterarTema = document.getElementById('botao-alterar-tema');

// Adiciona um ouvinte de eventos para o evento de clique no botão
botaoAlterarTema.addEventListener('click', function() {
  // Obtém a referência para o elemento <body>
  const body = document.body;

  // Alterna a classe "modo-escuro" no <body> para alternar o tema
  body.classList.toggle('dark-theme');
});
