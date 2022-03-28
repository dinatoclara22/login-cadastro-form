const form = document.querySelector(".form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#senha");
const passwordConfirmation = document.querySelector("#senha_confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (fullNameValue === "") {
    setErrorFor(fullName, "Nome completo está vazio!");
  }

  if (emailValue === "") {
    setErrorFor(email, "O email está vazio!");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  }

  if(passwordValue === '') {
      setErrorFor(password, 'A senha está vazia!')
  } else if (passwordValue.length < 7) {
      setErrorFor(password, 'A senha precisar ter no mínimo 7 caracteres.')
  }

  if(passwordConfirmationValue === '') {
      setErrorFor(passwordConfirmation, 'Confirme a senha está vazio!')
  } else if (passwordConfirmationValue !== passwordValue) {
      setErrorFor(passwordConfirmation, 'As senhas nao conferem!')
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");

  //Adicionando mensagem de erro.
  span.innerText = message;
  form.className = "form__control error";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
