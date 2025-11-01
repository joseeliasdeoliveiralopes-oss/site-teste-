function validarFormulario() {
  const form = document.getElementById('formContato');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nome || !email.includes('@')) {
      mensagem.textContent = "Por favor, preencha todos os campos corretamente!";
      mensagem.style.color = "red";
    } else {
      mensagem.textContent = "Mensagem enviada com sucesso!";
      mensagem.style.color = "green";
    }
  });
}
