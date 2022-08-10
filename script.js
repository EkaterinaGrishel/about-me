const buttonToggle = document.getElementById('button');

alert ('Добро пожаловать на мою страничку!');

buttonToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  buttonToggle.classList.toggle('button--black');
  buttonToggle.classList.toggle('button--white');
});


