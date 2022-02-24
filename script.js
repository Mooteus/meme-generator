const memeTextInput = document.getElementById('text-input');
memeTextInput.addEventListener('input', () => {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = memeTextInput.value;
});

// artigos usados como base
// https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

function previewImg(e) {
  const file = e.target.files;
  const fileImg = file[0];
  const setImg = document.getElementById('meme-image');
  setImg.src = URL.createObjectURL(fileImg);
}

const memeImageInput = document.getElementById('meme-insert');
memeImageInput.addEventListener('change', (e) => {
  previewImg(e);
});

const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const imageContainer = document.getElementById('meme-image-container');

fireButton.addEventListener('click', () => {
  imageContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  imageContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  imageContainer.style.border = '6px groove green';
});
