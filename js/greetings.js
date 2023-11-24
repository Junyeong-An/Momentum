const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onNameSubmit(event) {
  event.preventDefault();

  nameForm.classList.add(HIDDEN_CLASSNAME);

  const username = nameInput.value;

  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요, ${username}님!`;

  nameForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  nameForm.classList.remove(HIDDEN_CLASSNAME);

  nameForm.addEventListener("submit", onNameSubmit);
} else {
  paintGreetings(savedUsername);
}
