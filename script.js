function abrirImagem(src) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('imagem-expandida');
  img.src = src;
  modal.style.display = 'flex';
}

function fecharImagem() {
  document.getElementById('modal').style.display = 'none';
}
