const date = document.getElementById("date");
const client = document.getElementById("name");
const btnBreakfast = document.querySelector(".breakfast");
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
const modal = document.querySelector(".modal");
const btnAddMore = document.querySelectorAll(".add_more");
// const modalQuestion = document.querySelector(".modal_question");
const modalDoneBtn = document.querySelector(".done");
const saveMealBtn = document.querySelector(".save_meal_btn");

const dayOfWeek = document.createElement("h4");
const weekNumber = document.createElement("h4");

const clientMealPlanContainer = document.querySelector(".display_day");
const userNameInput = document.createElement("p");
const breakfast = document.createElement("p");

const lunch = document.createElement("p");
const supper = document.createElement("p");
const btnLunch = document.querySelector(".lunch");
const btnSupper = document.querySelector(".supper");
const btnBreakfastStart = document.querySelector(".start");
const btnplanforSomeoneElse = document.querySelector(
  ".btn_plan_for_someon_else"
);
const btn_start_new_week = document.querySelector(".btn_start_new_week");
const heading = document.querySelector(".meal_header");
//Starting week
let weekNum = 1;
const weekArr = [];
//Starting user
let userNum = 1;

let isName = false;
let newSelect;
let newtable;
//
//
//storage try out

//SECTION - DISABLE INPUT FIELD AND NO NAME WARNING
const disableNameAndDate = function (isDisabled) {
  document.getElementById("name1").disabled = isDisabled;
  document.getElementById("date").disabled = isDisabled;
};
//ADD WARNING SIGN IF USER DIDNT INPUT A NAME
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

//SECTION - USERS,GROCERYLIST AND DAY OBJECT RELATED CODE

// USERS OBJECT
const users = {
  user1: { name: "", week: [], breakfast: [], lunch: [], supper: [] },
};

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
//ADDIND NEW CREATED SELECT TO GROCERYLIST OBJ
const addNewSelectToGroList = function (elemntClassName, categorie) {
  const addedSelects = document.getElementsByName(elemntClassName);
  for (let i = 0; i < addedSelects.length; i++) {
    categorie.push(addedSelects[i].value);
  }
};
//ADD CHECKBOX ITEM TO GROCERY LIST
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

//Day changing function
function dayChange(day) {
  const dayArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let nextDay;
  for (let i = 0; i < dayArray.length; i++) {
    if (day === dayArray[i] && day !== "Sunday") {
      nextDay = dayArray[i + 1];
      date.value = nextDay;
    } else if (day === "Sunday") {
      date.value = "Monday";
    }
  }
}

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
const pushAndStoreItems = function () {
  topFunction(200);
  PushAllElement();

  // storingItemInGroceryListObj();
};

//SECTION - FUNCTIONS RELATED TO THE DISPLAY OF THE PAGE

//Change the meal  heading  to Lunch or supper
const changeMealHeading = function (meal, color) {
  heading.textContent = meal;
  heading.style.backgroundColor = color;
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

//Create and Display week 1 on client meal board
const createDomElementForWeekNum = function () {
  weekNumber.classList.add("weeknumb");
  weekNumber.innerText = `Week ${weekNum}`;
  clientMealPlanContainer.appendChild(weekNumber);
};
//create Dom element for day of week and name on client meal board
const createDomElementForDayAndName = function () {
  dayOfWeek.classList.add("day_of_week");

  dayOfWeek.innerText = `${date.value}`;
  clientMealPlanContainer.appendChild(dayOfWeek);
  userNameInput.classList.add("font_username");

  userNameInput.innerText = `${name1.value} `;
  dayOfWeek.appendChild(userNameInput);
};
//Create Dom element for meals on client meal board
const createDomElementforMeals = function (elementName, nameOfMeal) {
  let food = transformFoodItemsToStr(...grocerieListArr);

  elementName.classList.add("font_food");

  elementName.innerText = `${nameOfMeal} : ${food}`;

  userNameInput.appendChild(elementName);
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

//Adding beggining day of meal plan to weekArr
weekArr.push(date.value);

// starting with week one
createDomElementForWeekNum();

//Create a new user
const changingUsers = function () {
  let user = `user${userNum}`;
  console.log(user);
  return user;
};
// Storing name and week number in users obj
const storeNameAndWeekInObject = function (propertie) {
  users[propertie].name = name1.value;
  // console.log(users[propertie].name);

  users[propertie].week.push(weekNum);
};
//storing each meal to object
const storeMealInObject = function (propertie, meal) {
  users[propertie][meal].push(transformFoodItemsToStr(...grocerieListArr));
};

//!SECTION MEAL BTN
//btn add BREAKFAST START OF EVERY NEW WEEK

btnBreakfastStart.addEventListener("click", function () {
  topFunction();
  warning();

  if (isName) {
    createDomElementForDayAndName();
    pushAndStoreItems();
    storeNameAndWeekInObject(changingUsers());
    storeMealInObject(changingUsers(), "breakfast");

    createDomElementforMeals(breakfast, "Breakfast");
    resetMealOption();

    //changing the button to lunch
    btnLunch.classList.remove("hidden");
    btnBreakfastStart.classList.add("hidden");

    document.querySelector(".meal_header").style.backgroundColor =
      " rgb(5, 245, 165)";
    changeMealHeading("Lunch", " rgb(5, 245, 165)");
  }
});
//btn BREAKFAST
btnBreakfast.addEventListener("click", function () {
  // fullWeek(weekArr);
  console.log("break");

  pushAndStoreItems();
  storeMealInObject(changingUsers(), "breakfast");

  createDomElementforMeals(breakfast, "Breakfast");

  resetMealOption();

  //changing the button to lunch
  btnLunch.classList.remove("hidden");
  btnBreakfast.classList.add("hidden");

  document.querySelector(".meal_header").style.backgroundColor =
    " rgb(5, 245, 165)";
  changeMealHeading("Lunch", " rgb(5, 245, 165)");
});

// btn LUNCH
btnLunch.addEventListener("click", function () {
  console.log("lunch");

  pushAndStoreItems();
  storeMealInObject(changingUsers(), "lunch");

  createDomElementforMeals(lunch, "Lunch");

  resetMealOption();
  //changing the button to supper
  document.querySelector(".supper").classList.remove("hidden");
  btnLunch.classList.add("hidden");
  changeMealHeading("Supper", " rgb(242, 66, 66)");
});

//btn SUPPER
btnSupper.addEventListener("click", function () {
  pushAndStoreItems();
  storeMealInObject(changingUsers(), "supper");

  createDomElementforMeals(supper, "Supper");
  // storingItemInGroceryListObj(date.value);

  resetMealOption();

  // changeMealHeading("BreakFast", "rgb(249, 215, 107)");
  btnSupper.classList.add("hidden");
  heading.classList.add("hidden");

  saveMealBtn.classList.remove("hidden");
});
//btn SAVE YOUR MEAL
saveMealBtn.addEventListener("click", function () {
  dayChange(date.value);
  createDomElementForDayAndName();
  weekArr.push(date.value);
  // console.log(grocerieList.fruit);
  heading.classList.remove("hidden");

  changeMealHeading("Breakfast", " rgb(249, 215, 107)");
  saveMealBtn.classList.add("hidden");
  btnBreakfast.classList.remove("hidden");

  for (let j = 1; j < weekArr.length; j++) {
    if (weekArr[j] === "Wednesday") {
      console.log("yes");
      const weekIsFullModal = document.querySelector(".week_is_full");

      weekIsFullModal.classList.remove("hidden");
    }
  }
});
//button PLAN FOR SOMEONE ELSE
btnplanforSomeoneElse.addEventListener("click", function () {});
//button START A NEW WEEK
btn_start_new_week.addEventListener("click", function () {
  userNum++;
  weekIsFullModal.classList.add("hidden");
  btnBreakfastStart.classList.remove("hidden");
});
//REVIEW - Working on adding users object to local storage
//SECTION - LOCAL STORAGE
// Storing groceryList object to Local Storage
//FIXME - NEED TO BE ADJUSTED AFTER WORKING OUT USERS OBJECTS
// const storingItemInGroceryListObj = function (day) {
//   switch (day) {
//     case "Monday":
//       localStorage.setItem("mondayMeal", JSON.stringify(monday));
//       const localStorageContentMonday = localStorage.getItem("mondayMeal");
//       if (localStorageContentMonday !== null) {
//         mondayMeal = JSON.parse(localStorageContentMonday);
//       }
//       console.log(localStorageContentMonday, "localStorageContentMonday ");

//       break;
//     case "Tuesday":
//       localStorage.setItem("tuesdayMeal", JSON.stringify(tuesday));
//       const localStorageContentTuesday = localStorage.getItem("tuesdayMeal");
//       if (localStorageContentTuesday !== null) {
//         tuesdayMeal = JSON.parse(localStorageContentTuesday);
//       }
//       console.log(localStorageContentTuesday, "localStorageContenttuesday ");
//   }
// };

//Adding new Ing to storage and displaying new ingredient into their appropriate area

modalDoneBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  const newIngredientElement = document.getElementById("new_ingredient");
  const catOfNewIngredient = document.getElementById("categorie");
  let catOfNewIng = catOfNewIngredient.value;
  switch (catOfNewIng) {
    case "protein":
      newIngProtein.push(newIngredientElement.value);
      localStorage.setItem("newIngProtein", JSON.stringify(newIngProtein));
      displayNewItemsAfterDoneBtn("option", newIngProtein, breakfastProtein);
      break;
    case "grain":
      newIngGrain.push(newIngredientElement.value);
      localStorage.setItem("newIngGrain", JSON.stringify(newIngGrain));
      displayNewItemsAfterDoneBtn("option", newIngGrain, breakfastGrain);
      break;
    case "dairy":
      newIngDairy.push(newIngredientElement.value);
      localStorage.setItem("newIngDairy", JSON.stringify(newIngDairy));
      displayNewItemsAfterDoneBtn("option", newIngDairy, breakfastDairy);
      break;
    case "fruit":
      newIngFruit.push(newIngredientElement.value);
      localStorage.setItem("newIngFruit", JSON.stringify(newIngFruit));
      displayNewItemsAfterDoneBtn("option", newIngFruit, breakfastFruit);
      break;
    case "veggie":
      newIngVeggie.push(newIngredientElement.value);
      localStorage.setItem("newIngVeggie", JSON.stringify(newIngVeggie));
      displayNewItemsAfterDoneBtn("option", newIngVeggie, breakfastVeggie);
      break;
    case "beverage":
      newIngBev.push(newIngredientElement.value);
      localStorage.setItem("newIngBev", JSON.stringify(newIngBev));
      displayNewItemsAfterDoneBtn("option", newIngBev, breakfastBeverage);
      break;
    case "condiment":
      const pickone = document.getElementById("condiment");
      newIngCondiment.push(newIngredientElement.value);
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
  modal.classList.remove("hidden");
  topFunction(320);
});

// Btn X to close Modal
btncloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
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
