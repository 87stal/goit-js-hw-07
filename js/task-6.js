const inputRef = document.querySelector('#validation-input');
const inputLengthRef = inputRef.getAttribute('data-length');

inputRef.addEventListener('focus', handleInputBlur);

function handleInputBlur(event) {
  if (event.target.value.length === Number(inputLengthRef)) {
    inputRef.id = 'validation-input.valid';
  } else {
    inputRef.id = 'validation-input.invalid';
  }
}
