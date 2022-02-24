const memeTextInput = document.getElementById('text-input');
memeTextInput.addEventListener('input', () => {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = memeTextInput.value;
});
