document.getElementById('scheduling-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const message = `Olá! Gostaria de agendar um horário:\n\nNome: ${name}\nServiço: ${service}\nData: ${date}\nHorário: ${time}`;
  const phone = '********'; // <-- colocar número do telefone.

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});


