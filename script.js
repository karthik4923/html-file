// Function to show the popup
function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Event listener for the submit button
document.querySelector('.submit').addEventListener('click', showPopup);
document.querySelector('.submit1').addEventListener('click', showPopup);
function moveToNext(input, nextInputId) {
  const inputValue = input.value;
  const maxLength = input.getAttribute('maxlength');

  if (inputValue.length === maxLength) {
    const nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
}