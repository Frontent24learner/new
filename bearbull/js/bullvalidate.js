let bearInp = document.querySelector('input');
let btn = document.querySelector('.addBtn');

btn.addEventListener('click', () => {
  if (bearInp.value.length > 3) {
    bearInp.value = '';
    window.location.href = 'bull.html'; // Use location.href to change the page
    console.log('success');
  } else {
    bearInp.style.borderColor = 'red';
  }
});