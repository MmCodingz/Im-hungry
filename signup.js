//ANCHOR LOG IN  AND CREATE ACCOUNT
//- USER OBJECT
const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const createAccountBtn = document.getElementById("account_create_button");
const createUserName = document.getElementById("createUsername");
const createEmail = document.getElementById("createEmail");
const createPassword = document.getElementById("createPassword");
const errorCreateUsername = document.querySelector(".errorCreateUsername ");
const errorCreateEmail = document.querySelector(".errorCreateEmail ");
const errorCreatePassword = document.querySelector(".errorCreatePassword ");
const btnAccountCreate = document.getElementById("account_create_button");
const btnLogin = document.getElementById("loginbtn");
const user = {
  userName: [],
  email: [],
  password: [],
};
let useDeserialezed;

//ADDING THE USER OBJECT TO THE LOCAL STORAGE

//NEW USER ACCOUNT DATA
const createAccount = () => {
  user.userName.push(createUserName.value);
  user.email.push(createEmail.value);
  user.password.push(createPassword.value);
  const userSerialized = JSON.stringify(user);
  localStorage.setItem("user", userSerialized);
  useDeserialezed = JSON.parse(localStorage.getItem("user"));

  console.log(
    "This is useDeserialezed in the create account function  ",
    useDeserialezed
  );
};

//CREATE NEW ACCOUNT INFO,MAKING SURE ALL FIELD ARE FILED- FOR NOW JUST EMPTY STRING
const verificationCreate = function () {
  let autorizationNewAccount = [];
  if (createUserName.value !== "") {
    autorizationNewAccount.push(true);
  } else {
    autorizationNewAccount.push(false);
    errorCreateUsername.classList.remove("hidden");
  }
  if (createEmail.value !== "") {
    autorizationNewAccount.push(true);
  } else {
    autorizationNewAccount.push(false);
    errorCreateEmail.classList.remove("hidden");
  }
  if (createPassword.value !== "") {
    autorizationNewAccount.push(true);
  } else {
    autorizationNewAccount.push(false);
    errorCreatePassword.classList.remove("hidden");
  }

  // console.log(autorizationNewAccount);
  const confirmationofAccount = autorizationNewAccount.every(
    (el) => el === true
  );
  if (confirmationofAccount) {
    createAccount();
    document.getElementById("account_create").href = "/home.html";
  }
  console.log(
    "This is useDeserialezed in the verication create Account function  ",
    useDeserialezed
  );
};

// // CHECKING LOGIN INFO

const verificationLogin = function () {
  let autorization = [false];
  useDeserialezed = JSON.parse(localStorage.getItem("user"));

  if (userName.value === useDeserialezed.userName[0]) {
    autorization.push(true);
  } else {
    const userError = document.querySelector(".errorUsername");

    userError.classList.remove("hidden");
    autorization.push(false);
  }
  if (email.value === useDeserialezed.email[0]) {
    autorization.push(true);
  } else {
    const emailError = document.querySelector(".errorEmail");
    emailError.classList.remove("hidden");
    autorization.push(false);
  }
  if (password.value === useDeserialezed.password[0]) {
    autorization.push(true);
  } else {
    const passwordError = document.querySelector(".errorPassword");
    passwordError.classList.remove("hidden");
    autorization.push(false);
  }
  autorization.shift();

  const confirmation = autorization.every((el) => el === true);
  console.log(confirmation);
  if (confirmation) {
    document.getElementById("login_successful").href = "/index.html";
  }
};

// CREATE ACCOUNT BUTTON
if (btnAccountCreate) {
  btnAccountCreate.addEventListener("click", function (e) {
    // e.preventDefault();
    verificationCreate();
  });
}

// LOGIN BUTTON
if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    // e.preventDefault();
    // verificationCreate();
    verificationLogin();
  });
}
