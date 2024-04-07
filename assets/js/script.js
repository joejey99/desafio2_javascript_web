/* Ejercicio 1 */

const imagen = document.getElementById('clickImage');

imagen.addEventListener('click', () => {
  if (imagen.style.border === '5px solid red') {
    imagen.style.border = '';
  } else {
    imagen.style.border = '5px solid red';
  }
});

/* Ejercicio 2 */

document.getElementById('verificarButton').addEventListener('click', function() {
  const stickerCat = parseInt(document.getElementById('sticker1').value, 10);
  const stickerSlack = parseInt(document.getElementById('sticker2').value, 10);
  const stickerGit = parseInt(document.getElementById('sticker3').value, 10);
  const totalStickers = stickerCat + stickerSlack + stickerGit;
  const message = document.getElementById('mensaje');

  if (totalStickers <= 10) {
    message.textContent = 'Llevas ' + totalStickers + ' stickers';
  } else {
    message.textContent = 'Llevas demasiados stickers';
  }
});


/* Ejercicio 3 */
function verificarPassword() {
  const digit1 = document.getElementById('digit1').value;
  const digit2 = document.getElementById('digit2').value;
  const digit3 = document.getElementById('digit3').value;
  const password = digit1 + digit2 + digit3;
  const resultado = document.getElementById('resultado');

  if (password === "911") {
    resultado.textContent = 'Password 1 correcto';
  } else if (password === "714") {
    resultado.textContent = 'Password 2 correcto';
  } else {
    resultado.textContent = 'Password incorrecto';
  }
}