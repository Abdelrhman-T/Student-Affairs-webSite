const editButtons = document.querySelectorAll('.btn-edit');

editButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const formGroup = button.parentNode;
    const inputElement = formGroup.querySelector('input, select');
    inputElement.disabled = false;
  });
});
