let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstname = id("first"),
  lastname = id("last"),
  email = id("email"),
  password = id("password"),
  errorMsg = classes("error"),
  form = id("form")
failureIcon = classes("failureIcon");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(firstname, 0, "First Name cannot be empty");
  engine(lastname, 1, "Last Name cannot be empty");
  checkemail(email, 2, "Looks like this is not an email");
  engine(password, 3, "Password cannot be empty");


})

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {

    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid #FF7978";

    failureIcon[serial].style.opacity = "1";


  };
}
let checkemail = (input, serial, message) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(re.test(input.value.trim()))) {
    document.getElementById('email').className += 'required';
    errorMsg[serial].textContent = message;
    failureIcon[serial].style.opacity = "1";
  }
}