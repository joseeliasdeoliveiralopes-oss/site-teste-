const conteudo = document.getElementById('conteudo');
const links = document.querySelectorAll('nav a');

// Função para trocar o conteúdo (SPA)
function navegar(pagina) {
  conteudo.innerHTML = templates[pagina];
  if (pagina === 'contato') {
    validarFormulario(); // ativa a validação se estiver na página de contato
  }
}

// Eventos de navegação
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = e.target.getAttribute('data-page');
    navegar(page);
  });
});

// Página inicial padrão
navegar('home');
