// This is for the log in
// to do:
//,make a function to push the value into the user, the function will have to make sure that the user email is unique
// add a welcome sign on the home page

//ANCHOR - MEAL PLAN
// GLOBAL VARIABLE
const date = document.getElementById("date");
const client = document.getElementById("name");
const btnBreakfast = document.querySelector(".btn_add_plan");
const homemadeBreakfast = document.getElementById("homemade");
const breakfastProtein = document.getElementById("protein");
const breakfastGrain = document.getElementById("grain");
const breakfastFruit = document.getElementById("fruits");
const breakfastVeggie = document.getElementById("veggies");
const breakfastBeverage = document.getElementById("beverage");
const breakfastCondiments = document.getElementById("condiment");
const breakfastHerb = document.getElementById("herbs");

const breakfastSpice = document.getElementById("spices");
const breakfastDairy = document.getElementById("dairy");
const list = document.querySelector(".list");
let groceryListStorage;
const btnOpenModal = document.getElementById("open_modal");
const btncloseModal = document.querySelector(".close_modal");
const model = document.querySelector(".modal");
const btnAddMore = document.querySelectorAll(".add_more");
const modalQuestion = document.querySelector(".modal_question");
const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const dayOfWeek = document.createElement("h4");
const clientMealPlan = document.querySelector(".display_plan");
const userNameInput = document.createElement("p");
const breakfast = document.createElement("p");
const lunch = document.createElement("p");
const supper = document.createElement("p");

//
//
//
// FOOD OPTIONS VALUE ARRAY

// BUTTON TO SCROLL UP TO THE TOP OF THE PAGE
function topFunction(number) {
  document.documentElement.scrollTop = number; //
}
//GROCERIE OBJECT
let grocerieList = {
  homemade: [],
  fruit: [],
  veggies: [],
  protein: [],
  grain: [],
  dairy: [],
  extra: [],
  condiments: [],
  herbs: [],
  spices: [],
  beverage: [],
};

//THIS IS AN ARRAY OF ALL THE DIFFRENT BREAKFAST CATEGORIE
let grocerieListArr = [
  grocerieList.homemade,
  grocerieList.protein,
  grocerieList.grain,
  grocerieList.dairy,
  grocerieList.fruit,
  grocerieList.veggies,
  grocerieList.beverage,
  grocerieList.condiments,
  grocerieList.spices,
  grocerieList.herbs,
];

//THIS IS TO GET THE VALUE OF THE CHECKBOXES
const addCheckboxItems = function () {
  const condiments = document.getElementsByName("condiments");
  const spices = document.getElementsByName("spices");
  const herbs = document.getElementsByName("herbs");
  if (condiments)
    for (let i = 0; i < condiments.length; i++) {
      if (condiments[i].checked === true) {
        grocerieList.condiments.push(condiments[i].value);
      }
    }
  if (spices)
    for (let i = 0; i < spices.length; i++) {
      if (spices[i].checked === true) {
        grocerieList.spices.push(spices[i].value);
        console.log(spices[i]);
      }
    }
  if (herbs) {
    for (let i = 0; i < herbs.length; i++) {
      if (herbs[i].checked === true) {
        grocerieList.herbs.push(herbs[i].value);
      }
    }
  }
};
//DISPLAY DAILY MENUE
const displayMeal = function (...items) {
  const itemArr = items.flat(2);
  const justItems = itemArr.filter((el) => el !== "none");
  const itemStr = justItems + "";
  const finishedItemStr = itemStr.replaceAll(",", " / ");

  return finishedItemStr;
};
//FUNCTION TO CREATE DOM ELEMENT FOR USERS,DATE,AND MEAL PLAN

const createDomElementBreakfast = function () {
  let food = displayMeal(grocerieListArr);
  console.log(grocerieListArr);

  dayOfWeek.classList.add("day_of_week");

  dayOfWeek.innerText = date.value;
  clientMealPlan.appendChild(dayOfWeek);
  userNameInput.classList.add("font_username");

  userNameInput.innerText = `${name1.value}:`;
  dayOfWeek.appendChild(userNameInput);
  breakfast.classList.add("font_food");

  breakfast.innerText = `Breakfast: ${food}`;

  userNameInput.appendChild(breakfast);
};

const createDomElementLunch = function () {
  let food = displayMeal(grocerieListArr);
  console.log(food);

  lunch.classList.add("font_food");

  lunch.innerText = `Lunch: ${food}`;

  breakfast.appendChild(lunch);
};
const createDomElementSupper = function () {
  let food = displayMeal(grocerieListArr);
  console.log(food);

  supper.classList.add("font_food");

  supper.innerText = `Supper: ${food}`;

  lunch.appendChild(supper);
};
// BUTTON TO ADD ANOTHER ITEM for Select menue

const addMoreItems = function () {
  if (btnAddMore) {
    for (let i = 0; i < btnAddMore.length; i++) {
      btnAddMore[i].addEventListener("click", function () {
        if (btnAddMore[i].className.includes("homemade")) {
          grocerieList.homemade.push(homemadeBreakfast.value);
          homemade.selectedIndex = 0;

          // displayMealPlan();
        }
        if (btnAddMore[i].className.includes("protein")) {
          grocerieList.protein.push(breakfastProtein.value);
          protein.selectedIndex = 0;
        }
        if (btnAddMore[i].className.includes("grain")) {
          grocerieList.grain.push(breakfastGrain.value);
          grain.selectedIndex = 0;
        }
        if (btnAddMore[i].className.includes("dairy")) {
          grocerieList.dairy.push(breakfastDairy.value);
          dairy.selectedIndex = 0;
        }
        if (btnAddMore[i].className.includes("fruit")) {
          grocerieList.fruit.push(breakfastFruit.value);
          fruits.selectedIndex = 0;
        }
        if (btnAddMore[i].className.includes("veggies")) {
          grocerieList.veggies.push(breakfastVeggie.value);
          veggies.selectedIndex = 0;
        }
        if (btnAddMore[i].className.includes("beverage")) {
          grocerieList.beverage.push(breakfastBeverage.value);
        }
      });
    }
  }
};

addMoreItems();
//FUNCTION TO ADD SELECTED ITEM TO GROCERIE LIST OBJECT
const addPlanToGrocery = function () {
  grocerieList.homemade.push(homemadeBreakfast.value);
  console.log(grocerieList.homemade);
  console.log(grocerieList);
  grocerieList.protein.push(breakfastProtein.value);
  grocerieList.grain.push(breakfastGrain.value);
  grocerieList.fruit.push(breakfastFruit.value);
  grocerieList.veggies.push(breakfastVeggie.value);
  grocerieList.dairy.push(breakfastDairy.value);

  grocerieList.beverage.push(breakfastBeverage.value);
  addCheckboxItems();
};

//STORING THE GROCERYLIST OBJECT TO LOCAL STORAGE
const storingItemInGroceryListObj = function () {
  const groceryListstorageStr = JSON.stringify(grocerieList);
  localStorage.setItem("grocerieList", groceryListstorageStr);
};
// ADDING ITEMS TO THE GROCERIE LIST
if (list) {
  groceryListStorage = JSON.parse(localStorage.getItem("grocerieList"));
  document.getElementById("homemade_list").innerHTML =
    groceryListStorage.homemade;
  document.getElementById("fruit_list").innerHTML = groceryListStorage.fruit;
  document.getElementById("list_Veggies").innerHTML =
    groceryListStorage.veggies;
  // adding eggs instead on 'scrambled eggs

  let proteinArr = groceryListStorage.protein;
  let proteinstr = proteinArr.toString();
  let isItEgg = proteinstr.includes("Eggs");
  if (groceryListStorage.protein && isItEgg) {
    document.getElementById("list_protein").innerHTML = "Eggs";
  } else {
    document.getElementById("list_protein").innerHTML =
      groceryListStorage.protein;
  }
  //adding bread instead of toast
  let grainArr = groceryListStorage.grain;
  let grainstr = grainArr.toString();
  let isItbread = grainstr.includes("Toast");
  if (groceryListStorage.grain && isItbread) {
    document.getElementById("list_grains").innerHTML = "Bread";
  } else {
    document.getElementById("list_grains").innerHTML = groceryListStorage.grain;
  }
  document.getElementById("list_dairy").innerHTML = groceryListStorage.dairy;
  document.getElementById("list_condiments").innerHTML =
    groceryListStorage.condiments;
  document.getElementById("list_spices").innerHTML = groceryListStorage.spices;
  document.getElementById("list_herbs").innerHTML = groceryListStorage.herbs;
  document.getElementById("list_drinks").innerHTML =
    groceryListStorage.beverage;
}
//RESEST MEAL OPTION
const resetMealOption = function () {
  topFunction(220);
  homemade.selectedIndex = 0;
  protein.selectedIndex = 0;
  fruits.selectedIndex = 0;
  veggies.selectedIndex = 0;
  grain.selectedIndex = 0;
  dairy.selectedIndex = 0;
  beverage.selectedIndex = 0;
  const condiment = document.getElementsByName("condiments");
  for (let i = 0; i < condiment.length; i++) {
    if (condiment[i].checked === true) {
      condiment[i].checked = false;
    }
  }

  grocerieListArr.map((el) => (el.length = 0));
  console.log(grocerieList.condiments);
};
//NO NAME AND NO DATE
const warning = function () {
  const noName = document.querySelector(".name_warning ");
  const noDate = document.querySelector(".date_warning");
  let nameAndDate = true;
  if (name1.value === "") {
    noName.classList.remove("hidden");
    nameAndDate = false;
  } else {
    noName.classList.add("hidden");
  }
  if (date.value === "") {
    noDate.classList.remove("hidden");
    nameAndDate = false;
  } else {
    noDate.classList.add(".hidden");
  }
  if (nameAndDate === true) {
    disable(true);
    addPlanToGrocery();
    // addCheckboxItems();
    createDomElementBreakfast();
    resetMealOption();
  }
};
const btnLunch = document.querySelector(".lunch");
const btnSupper = document.querySelector(".supper");
//BTN ADD BREAKFAST
if (btnBreakfast) {
  btnBreakfast.addEventListener("click", function () {
    storingItemInGroceryListObj();
    topFunction(200);
    warning();
    document.querySelector(".lunch").classList.remove("hidden");
    btnBreakfast.classList.add("hidden");
  });
}
//BTN ADD LUNCH
btnLunch.addEventListener("click", function () {
  addPlanToGrocery();
  createDomElementLunch();
  storingItemInGroceryListObj();
  topFunction(200);
  resetMealOption();
  document.querySelector(".supper").classList.remove("hidden");
  btnLunch.classList.add("hidden");
});
//BTN ADD SUPPER
btnSupper.addEventListener("click", function () {
  addPlanToGrocery();
  createDomElementSupper();
  storingItemInGroceryListObj();
  topFunction(200);

  btnSupper.classList.add("hidden");
  // resetMealOption();
});
// Desable name and date input field
const disable = function (on_off) {
  if (on_off === true) {
    document.getElementById("name1").disabled = true;
    document.getElementById("date").disabled = true;
  } else {
    document.getElementById("name1").disabled = false;
    document.getElementById("date").disabled = false;
  }
};

// SUBMIT BUTTON FOR MEAL PLAN

///ANCHOR - /MODAL
//FUNCTION TO REMOVE HIDDEN CLASS
if (btncloseModal) {
  const closeModal = function () {
    btncloseModal.addEventListener("click", function () {
      model.classList.add("hidden");
    });
  };
}
if (modalQuestion) {
  btnYes.addEventListener("click", function () {
    modalQuestion.classList.add("hidden");
    createDomElement();
    resetMealOption();
  });

  btnNo.addEventListener("click", function () {
    modalQuestion.classList.add("hidden");
    topFunction(220);
    resetMealOption();
  });
}

// THIS IS TO CLOSE THE MODAL CLICKING ON THE X
if (btncloseModal) {
  btncloseModal.addEventListener("click", function () {
    model.classList.add("hidden");
  });
}

// THIS IS FOR THE MODAL DONE BTN
const modalDoneBtn = document.querySelector(".done");

//AFTER CLICKING DONE ON MODAL, ADDING NEW ING TO storage and display

if (modalDoneBtn) {
  modalDoneBtn.addEventListener("click", function () {
    model.classList.add("hidden");
    const nameOfNewIngredient = document.getElementById("new_ingredient");
    const catOfNewIngredient = document.getElementById("categorie");

    if (catOfNewIngredient.value === "protein") {
      newIngProtein.push(nameOfNewIngredient.value);
      localStorage.setItem("newIngProtein", JSON.stringify(newIngProtein));
      displayNewItemsAfterDoneBtn("option", newIngProtein, breakfastProtein);
    }
    if (catOfNewIngredient.value === "grain") {
      newIngGrain.push(nameOfNewIngredient.value);
      localStorage.setItem("newIngGrain", JSON.stringify(newIngGrain));
      displayNewItemsAfterDoneBtn("option", newIngGrain, breakfastGrain);
    }
    if (catOfNewIngredient.value === "dairy") {
      newIngDairy.push(nameOfNewIngredient.value);
      localStorage.setItem("newIngDairy", JSON.stringify(newIngDairy));
      displayNewItemsAfterDoneBtn("option", newIngDairy, breakfastDairy);
    }
    if (catOfNewIngredient.value === "fruit") {
      newIngFruit.push(nameOfNewIngredient.value);
      localStorage.setItem("newIngFruit", JSON.stringify(newIngFruit));
      displayNewItemsAfterDoneBtn("option", newIngFruit, breakfastFruit);
    }
    if (catOfNewIngredient.value === "veggie") {
      newIngVeggie.push(nameOfNewIngredient.value);
      localStorage.setItem("newIngVeggie", JSON.stringify(newIngVeggie));
      displayNewItemsAfterDoneBtn("option", newIngVeggie, breakfastVeggie);
    }
    if (catOfNewIngredient.value === "beverage") {
      newIngBev.push(nameOfNewIngredient.value);
      localStorage.setItem("newIngBev", JSON.stringify(newIngBev));
      displayNewItemsAfterDoneBtn("option", newIngBev, breakfastBeverage);
    }
    if (catOfNewIngredient.value === "condiment") {
      newIngCondiment.push(nameOfNewIngredient.value);
      localStorage.setItem("newIngCondiment", JSON.stringify(newIngCondiment));
      displayNewItemsAfterDoneBtn(
        "input",
        newIngCondiment,
        breakfastCondiments
      );
    }
    // if (catOfNewIngredient.value === "spices") {
    //   newIngSpice.push(nameOfNewIngredient.value);
    //   localStorage.setItem("newIngSpice", JSON.stringify(newIngSpice));
    //   displayNewItemsAfterDoneBtn("input", newIngSpice, breakfastSpice);
    // }
    // if (catOfNewIngredient.value === "herbs") {
    //   newIngHerb.push(nameOfNewIngredient.value);
    //   localStorage.setItem("newIngHerb", JSON.stringify(newIngHerb));
    //   displayNewItemsAfterDoneBtn("input", newIngHerb, breakfastHerb);
    // }
  });
}

//THIS IS THE LOCAL STORAGE OF ALL THE INGREDIENTS IN THE DIFFRENT CATEGORIES

const localStorageContentProtein = localStorage.getItem("newIngProtein");
let newIngProtein;
if (localStorageContentProtein === null) {
  newIngProtein = [];
} else {
  newIngProtein = JSON.parse(localStorageContentProtein);
}
const localStorageContentGrain = localStorage.getItem("newIngGrain");
let newIngGrain;
if (localStorageContentGrain === null) {
  newIngGrain = [];
} else {
  newIngGrain = JSON.parse(localStorageContentGrain);
}
const localStorageContentDairy = localStorage.getItem("newIngDairy");
let newIngDairy;
if (localStorageContentDairy === null) {
  newIngDairy = [];
} else {
  newIngDairy = JSON.parse(localStorageContentDairy);
}
const localStorageContentFruit = localStorage.getItem("newIngFruit");
let newIngFruit;
if (localStorageContentFruit === null) {
  newIngFruit = [];
} else {
  newIngFruit = JSON.parse(localStorageContentFruit);
}
const localStorageContentVeggie = localStorage.getItem("newIngVeggie");
let newIngVeggie;
if (localStorageContentVeggie === null) {
  newIngVeggie = [];
} else {
  newIngVeggie = JSON.parse(localStorageContentVeggie);
}
const localStorageContentBev = localStorage.getItem("newIngBev");
let newIngBev;
if (localStorageContentBev === null) {
  newIngBev = [];
} else {
  newIngBev = JSON.parse(localStorageContentBev);
}
const localStorageContentCondiment = localStorage.getItem("newIngCondiment");
let newIngCondiment;
if (localStorageContentCondiment === null) {
  newIngCondiment = [];
} else {
  newIngCondiment = JSON.parse(localStorageContentCondiment);
  grocerieList.condiments.push(newIngCondiment);
}
// const localStorageContentSpice = localStorage.getItem("newIngSpice");
// let newIngSpice;
// if (localStorageContentSpice === null) {
//   newIngSpice = [];
// } else {
//   newIngSpice = JSON.parse(localStorageContentSpice);
//   grocerieList.spices.push(newIngSpice);
// }
// const localStorageContentHerb = localStorage.getItem("newIngHerb");
// let newIngHerb;
// if (localStorageContentHerb === null) {
//   newIngHerb = [];
// } else {
//   newIngHerb = JSON.parse(localStorageContentHerb);
//   grocerieList.herbs.push(newIngHerb);
// }

// FUNCTION TO DISPLAY THE  NEW ITEM TO OPTION MENU ON LOAD

const displayNewItems = function (element, ing, categorie) {
  if (element === "input") {
    for (let i = 0; i < ing.length; i++) {
      let checkbox = document.createElement(element);

      // Assigning the attributes to created checkbox
      checkbox.type = "checkbox";
      checkbox.name = ing[i];
      checkbox.value = ing[i];
      checkbox.id = ing[i];

      // creating label for checkbox
      let label = document.createElement("label");

      // assigning attributes for the created label tag
      label.htmlFor = ing[i];

      // appending the created text to
      // the created label tag
      label.appendChild(document.createTextNode(ing[i]));

      // appending the checkbox and label to div
      categorie.appendChild(label);
      categorie.appendChild(checkbox);
    }
  } else {
    for (let i = 0; i < ing.length; i++) {
      let option = document.createElement(element);
      option.text = ing[i];

      categorie.add(option);
    }
  }
};
// FUNCTION TO DISPLAY THE LAST ITEM OF THE ARRAY TO OPTION MENU AFTER THE DONE BUTTON IS PUSHED
const displayNewItemsAfterDoneBtn = function (element, ing, categorie) {
  if (element === "input") {
    let checkbox = document.createElement(element);

    // Assigning the attributes to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = ing[ing.length - 1];
    checkbox.value = ing[ing.length - 1];
    checkbox.id = ing[ing.length - 1];

    // creating label for checkbox
    let label = document.createElement("label");

    // assigning attributes for the created label tag
    label.htmlFor = ing[ing.length - 1];

    // appending the created text to
    // the created label tag
    label.appendChild(document.createTextNode(ing[ing.length - 1]));

    // appending the checkbox and label to div
    categorie.appendChild(label);
    categorie.appendChild(checkbox);
  } else {
    let option = document.createElement(element);
    option.text = ing[ing.length - 1];

    categorie.add(option);
  }
};

//THIS IS FOR THE OPTION MENUE THAT HAVE BEEN STORED TO APPEAR ON LOAD
window.onload = function () {
  if (window.location.href.indexOf("plan_your_meal.html") > -1) {
    displayNewItems("option", newIngProtein, breakfastProtein);
    displayNewItems("option", newIngGrain, breakfastGrain);
    displayNewItems("option", newIngDairy, breakfastDairy);
    displayNewItems("option", newIngFruit, breakfastFruit);
    displayNewItems("option", newIngVeggie, breakfastVeggie);
    displayNewItems("option", newIngBev, breakfastBeverage);
    displayNewItems("input", newIngCondiment, breakfastCondiments);
    // displayNewItems("input", newIngSpice, breakfastSpice);
    // displayNewItems("input", newIngHerb, breakfastHerb);
  }
};

//THIS IS FOR THE BUTTON TO OPEN THE MODAL TO ADD NEW INGREDIENTS
if (btnOpenModal) {
  btnOpenModal.addEventListener("click", function () {
    model.classList.remove("hidden");
    topFunction(320);
  });
}

//THIS IS TO CLOSE THE MODAL

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

// console.log("local Storage", localStorage);
// console.log("userSterialized", userSerialized);

// press enter instead of clicking
//FIXME - Start
// not working
// document.querySelector("body").addEventListener("keydown", function (e) {
//   if (e.code === "Enter") {
//     verificationLogin();
//   }
// });
//FIXME - end

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

// this is the login verification

////ANCHOR -  Grocery List
const fruits = document.getElementById("fruits");

// const grocerieList = {
//   fruit: [],
//   veggies: [],
// };

// addEventListener("submit", (event) => {
//   event.preventDefault();
//   grocerieList.fruit.push(fruits.value);
//   document.querySelector(".items").innerHTML = grocerieList.fruit;
//   console.log(grocerieList.fruit);
//   grocerieListSterialized = JSON.stringify(grocerieList);
//   localStorage.setItem("groceryList", grocerieListSterialized);
//   console.log(localStorage);
// });
