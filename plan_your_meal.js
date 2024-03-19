const date = document.getElementById("date");
const client = document.getElementById("name");
const btnBreakfast = document.querySelector(".btn_add_plan");
const homemadeBreakfast = document.getElementById("homemade");
const breakfastProtein = document.getElementById("protein");
const breakfastGrain = document.getElementById("grain");
const breakfastFruit = document.getElementById("fruit");
const breakfastVeggie = document.getElementById("veggie");
const breakfastBeverage = document.getElementById("beverage");
const breakfastCondiments = document.getElementById("condiment");

const breakfastDairy = document.getElementById("dairy");
const list = document.querySelector(".list");
let groceryListStorage;
const btnOpenModal = document.getElementById("open_modal");
const btncloseModal = document.querySelector(".close_modal");
const model = document.querySelector(".modal");
const btnAddMore = document.querySelectorAll(".add_more");
// const modalQuestion = document.querySelector(".modal_question");
const modalDoneBtn = document.querySelector(".done");

const dayOfWeek = document.createElement("h4");
const clientMealPlan = document.querySelector(".display_day");
const userNameInput = document.createElement("p");
const breakfast = document.createElement("p");

const lunch = document.createElement("p");
const supper = document.createElement("p");
const btnLunch = document.querySelector(".lunch");
const btnSupper = document.querySelector(".supper");
let isName = false;
let newSelect;
let newtable;
//
//
//SECTION - DISABLE INPUT FIELD AND NO NAME WARNING
const disableNameAndDate = function (isDisabled) {
  document.getElementById("name1").disabled = isDisabled;
  document.getElementById("date").disabled = isDisabled;
};
const warning = function () {
  const noName = document.querySelector(".name_warning ");
  if (name1.value === "") {
    noName.classList.remove("hidden");
  } else {
    noName.classList.add("hidden");
    isName = true;
    disableNameAndDate(true);
  }
};

//SECTION - GROCERYLIST RELATED CODE

//Adding item to the grocery list page

//grocerieListObject
let grocerieList = {
  homemade: [],
  fruit: [],
  veggie: [],
  protein: [],
  grain: [],
  dairy: [],
  extra: [],
  condiments: [],
  herbs: [],
  spices: [],
  beverage: [],
};
//grocerieList element arr
let grocerieListArr = [
  grocerieList.homemade,
  grocerieList.protein,
  grocerieList.grain,
  grocerieList.dairy,
  grocerieList.fruit,
  grocerieList.veggie,
  grocerieList.beverage,
  grocerieList.condiments,
  grocerieList.spices,
  grocerieList.herbs,
];

//!SECTION PUSHING ALL SELECT AND CHECKBOX TO GROCERYLIST
const PushAllElement = function () {
  addNewSelectToGroList("homemade", grocerieList.homemade);
  addNewSelectToGroList("protein", grocerieList.protein);
  addNewSelectToGroList("grain", grocerieList.grain);
  addNewSelectToGroList("dairy", grocerieList.dairy);
  addNewSelectToGroList("fruit", grocerieList.fruit);
  addNewSelectToGroList("veggie", grocerieList.veggie);
  addNewSelectToGroList("beverage", grocerieList.beverage);
  addCheckboxItems();
};
const addNewSelectToGroList = function (elemntClassName, categorie) {
  const addedSelects = document.getElementsByName(elemntClassName);
  for (let i = 0; i < addedSelects.length; i++) {
    categorie.push(addedSelects[i].value);
  }
};
const addCheckboxItems = function () {
  const condiments = document.getElementsByName("condiments");

  if (condiments)
    for (let i = 0; i < condiments.length; i++) {
      if (condiments[i].checked === true) {
        grocerieList.condiments.push(condiments[i].value);
      }
    }
};

//SECTION -REUSABLE FUNCTION

//Scroll up the page function
function topFunction(number) {
  document.documentElement.scrollTop = number; //
}
//Reset meal option
const resetMealOption = function () {
  topFunction(220);
  //set the select option back to 'none'
  homemade.selectedIndex = 0;
  protein.selectedIndex = 0;
  fruit.selectedIndex = 0;
  veggie.selectedIndex = 0;
  grain.selectedIndex = 0;
  dairy.selectedIndex = 0;
  beverage.selectedIndex = 0;
  //Remove client created select
  const selectToDelete = document.querySelectorAll(".newSelect");
  const table = document.querySelectorAll(".createTable");
  table.forEach((el) => el.remove());
  selectToDelete.forEach((el) => el.remove());
  //uncheck the condiment
  const condiment = document.getElementsByName("condiments");
  for (let i = 0; i < condiment.length; i++) {
    if (condiment[i].checked === true) {
      condiment[i].checked = false;
    }
  }

  grocerieListArr.map((el) => (el.length = 0));
};

//function after client is done with a meal selection
const functionForEachMeal = function () {
  topFunction(200);
  PushAllElement();
  storingItemInGroceryListObj();
  // resetMealOption();
};

//SECTION - FUNCTIONS RELATED TO THE DISPLAY OF THE PAGE
//Change the meal  heading  to Lunch or supper
const changeMealHeading = function (meal) {
  const heading = document.querySelector(".meal_header");
  heading.textContent = meal;
};

//Take groceryList array and filter none to return appropriate string to display
const transformFoodItemsToStr = function (...items) {
  const itemArr = items.flat(2);
  const justItems = itemArr.filter((el) => el !== "None");
  const uniqueItem = new Set(justItems);

  const itemStr = [...uniqueItem] + "";
  const finishedItemStr = itemStr.replaceAll(",", " / ");

  return finishedItemStr;
};
//Create Dom element for meals
const createDomElementBreakfast = function () {
  let food = transformFoodItemsToStr(grocerieListArr);

  dayOfWeek.classList.add("day_of_week");

  dayOfWeek.innerText = date.value;
  clientMealPlan.appendChild(dayOfWeek);
  userNameInput.classList.add("font_username");

  userNameInput.innerText = `${name1.value} `;
  dayOfWeek.appendChild(userNameInput);
  breakfast.classList.add("font_food");

  breakfast.innerText = `Breakfast:  ${food}`;

  userNameInput.appendChild(breakfast);
};
const createDomElementLunch = function () {
  let food = transformFoodItemsToStr(grocerieListArr);

  lunch.classList.add("font_food");

  lunch.innerText = `Lunch: ${food}`;

  breakfast.appendChild(lunch);
};
const createDomElementSupper = function () {
  let food = transformFoodItemsToStr(grocerieListArr);
  console.log(food);

  supper.classList.add("font_food");

  supper.innerText = `Supper: ${food}`;

  lunch.appendChild(supper);
};
//Adding New Select When Clicking on Addmore BTN
const createSelectOnClick = function (selectName, nameOfClass, nameOfDiv) {
  {
    for (let i = 0; i < btnAddMore.length; i++) {
      btnAddMore[i].addEventListener("click", function () {
        if (btnAddMore[i].className.includes(selectName)) {
          createDomElementSelect(selectName, nameOfClass, nameOfDiv);
        }
      });
    }
  }
};
createSelectOnClick("homemade", ".homemade", homemadeBreakfast);
createSelectOnClick("protein", ".protein", breakfastProtein);
createSelectOnClick("grain", ".grain", breakfastGrain);
createSelectOnClick("dairy", ".dairy", breakfastDairy);
createSelectOnClick("fruit", ".fruit", breakfastFruit);
createSelectOnClick("veggie", ".veggie", breakfastVeggie);
createSelectOnClick("beverage", ".beverage", breakfastBeverage);
// creating a new Select
const createDomElementSelect = function (name, nameOfClass, nameOfDiv) {
  newSelect = document.createElement("select");
  newSelect.name = name;

  newtable = document.createElement("table");
  newtable.classList.add("createTable");
  newSelect.innerHTML = nameOfDiv.innerHTML;
  newSelect.classList.add("newSelect");
  const newDiv = document.querySelector(nameOfClass);

  newtable.appendChild(newSelect);
  newDiv.appendChild(newtable);
};
//
//!SECTION MEAL BTN

//btn add breakfast
btnBreakfast.addEventListener("click", function () {
  topFunction();
  warning();

  if (isName) {
    functionForEachMeal();
    createDomElementBreakfast();
    resetMealOption();
    //changing the button to lunch
    document.querySelector(".lunch").classList.remove("hidden");
    btnBreakfast.classList.add("hidden");

    document.querySelector(".meal_header").style.backgroundColor =
      " rgb(5, 245, 165)";
    changeMealHeading("Lunch");
    btnLunch.style.backgroundColor = " rgb(5, 245, 165)";
  }
});

// btn add lunch
btnLunch.addEventListener("click", function () {
  functionForEachMeal();
  createDomElementLunch();
  resetMealOption();
  document.querySelector(".supper").classList.remove("hidden");
  btnLunch.classList.add("hidden");
  changeMealHeading("Supper");
  document.querySelector(".meal_header").style.backgroundColor =
    " rgb(242, 66, 66)";
  btnSupper.style.backgroundColor = " rgb(242, 66, 66)";
});

//btn add supper
btnSupper.addEventListener("click", function () {
  functionForEachMeal();
  createDomElementSupper();
  resetMealOption();

  btnSupper.classList.add("hidden");
});

//SECTION - LOCAL STORAGE
// Storing groceryList object to Local Storage
const storingItemInGroceryListObj = function () {
  const groceryListstorageStr = JSON.stringify(grocerieList);
  localStorage.setItem("grocerieList", groceryListstorageStr);
};

//Adding new Ing to storage and displaying new ingredient into their appropriate area

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
    const pickone = document.getElementById("condiment");
    newIngCondiment.push(nameOfNewIngredient.value);
    localStorage.setItem("newIngCondiment", JSON.stringify(newIngCondiment));
    displayNewItemsAfterDoneBtn("input", newIngCondiment, pickone);
  }
});

//Local storage of all client created new Ingredient

const localStorageContentProtein = localStorage.getItem("newIngProtein");
let newIngProtein = [];
if (localStorageContentProtein !== null) {
  newIngProtein = JSON.parse(localStorageContentProtein);
}
const localStorageContentGrain = localStorage.getItem("newIngGrain");
let newIngGrain = [];
if (localStorageContentGrain !== null) {
  newIngGrain = JSON.parse(localStorageContentGrain);
}
const localStorageContentDairy = localStorage.getItem("newIngDairy");
let newIngDairy = [];
if (localStorageContentDairy !== null) {
  newIngDairy = JSON.parse(localStorageContentDairy);
}
const localStorageContentFruit = localStorage.getItem("newIngFruit");
let newIngFruit = [];
if (localStorageContentFruit !== null) {
  newIngFruit = JSON.parse(localStorageContentFruit);
}
const localStorageContentVeggie = localStorage.getItem("newIngVeggie");
let newIngVeggie = [];
if (localStorageContentVeggie !== null) {
  newIngVeggie = JSON.parse(localStorageContentVeggie);
}
const localStorageContentBev = localStorage.getItem("newIngBev");
let newIngBev = [];
if (localStorageContentBev !== null) {
  newIngBev = JSON.parse(localStorageContentBev);
}

const localStorageContentCondiment = localStorage.getItem("newIngCondiment");
let newIngCondiment = [];
if (localStorageContentCondiment !== null) {
  newIngCondiment = JSON.parse(localStorageContentCondiment);
}

///ANCHOR - /MODAL

//SECTION - MODAL BUTTONS
//Btn to open Modal to add new ingredients
btnOpenModal.addEventListener("click", function () {
  model.classList.remove("hidden");
  topFunction(320);
});

// Btn X to close Modal
btncloseModal.addEventListener("click", function () {
  model.classList.add("hidden");
});

//SECTION - DISPLAY NEW CLIENT CREATED ITEM TO PAGE

//display new Item after adding a new Item
const displayNewItemsAfterDoneBtn = function (element, ing, categorie) {
  if (element === "input") {
    let checkbox = document.createElement(element);

    // Assigning the attributes to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "condiments";
    checkbox.value = ing[ing.length - 1];
    checkbox.id = ing[ing.length - 1];

    // creating list to append the  checkbox to
    let list = document.createElement("li");

    list.htmlFor = ing[ing.length - 1];

    // appending the created text to
    // the created label tag
    list.appendChild(document.createTextNode(ing[ing.length - 1]));
    list.classList.add("list");
    categorie.appendChild(list);
    list.appendChild(checkbox);
  } else {
    let option = document.createElement(element);
    option.text = ing[ing.length - 1];

    categorie.add(option);
  }
};
//function to create and display new item in select or checkbox
const createAndDisplayNewItemInElement = function (
  element,
  storedIngredient,
  categorie
) {
  if (element === "input") {
    for (let i = 0; i < storedIngredient.length; i++) {
      let checkbox = document.createElement(element);

      // Assigning the attributes to created checkbox
      checkbox.type = "checkbox";
      checkbox.name = "condiments";
      checkbox.value = storedIngredient[i];
      checkbox.id = storedIngredient[i];

      // creating list
      let list = document.createElement("li");

      // assigning ingredient name to the list
      list.htmlFor = storedIngredient[i];

      // adding the right style to list
      list.classList.add("list");

      // appending the created text to
      // createTextNode???

      list.appendChild(document.createTextNode(storedIngredient[i]));

      // appending the list and checkbox  to div

      categorie.appendChild(list);
      list.appendChild(checkbox);
    }
  } else {
    for (let i = 0; i < storedIngredient.length; i++) {
      let option = document.createElement(element);
      option.text = storedIngredient[i];

      categorie.add(option);
    }
  }
};
//New item  to appear in select or checkbox on load
window.onload = function () {
  if (window.location.href.indexOf("plan_your_meal.html") > -1) {
    createAndDisplayNewItemInElement("option", newIngProtein, breakfastProtein);
    createAndDisplayNewItemInElement("option", newIngGrain, breakfastGrain);
    createAndDisplayNewItemInElement("option", newIngDairy, breakfastDairy);
    createAndDisplayNewItemInElement("option", newIngFruit, breakfastFruit);
    createAndDisplayNewItemInElement("option", newIngVeggie, breakfastVeggie);
    createAndDisplayNewItemInElement("option", newIngBev, breakfastBeverage);
    createAndDisplayNewItemInElement(
      "input",
      newIngCondiment,
      breakfastCondiments
    );
  }
};
