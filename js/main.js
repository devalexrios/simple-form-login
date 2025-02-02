const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

function handlerInput(node, valid) {
  const value = node.value;

  if (value.length === 0 && value.type != 'submit') {
    node.classList = ['void'];
    return false;
  } else {
    node.classList.remove('void');

    if (value.length >= 8) {
      node.classList = ['valid'];
      return true;
    } else {
      node.classList = ['invalid'];
      return false;
    };
  };
};

function handlerForm() {
  const condition = [
    handlerInput(username),
    handlerInput(password)
  ].every(item => item === true);
  
  if (condition) submit.classList.add('active');
  else submit.classList.remove('active');
};

function handlerSubmit(event) {
  event.preventDefault();

  if (submit.className.includes('active')) {
    const dataForm = Object.fromEntries(new FormData(event.target));
    const data = JSON.stringify(dataForm);

    alert(data);

    submit.classList.remove('active');

    document.querySelectorAll('#form input')
      .forEach(node => {
        if (node.type != 'submit') {
          node.value = null;
        };
      });
  };
};

form.addEventListener('keyup', handlerForm);
form.addEventListener('submit', handlerSubmit);

handlerForm();
