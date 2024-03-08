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
const btnLunch = document.querySelector(".lunch");
const btnSupper = document.querySelector(".supper");
//
//
//SECTION - NAME AND DATE RELATED CODE:

//Desable name and date inputfield
const disable = function (on_off) {
  if (on_off === true) {
    document.getElementById("name1").disabled = true;
    document.getElementById("date").disabled = true;
  } else {
    document.getElementById("name1").disabled = false;
    document.getElementById("date").disabled = false;
  }
};

//No name and no date
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

//SECTION - GROCERYLIST REALATED CODE

//Adding item to the grocery list page
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
//grocery Object
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
//Breakfast category array
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
//Function to push selected item to GL object
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

//SECTION -FUNCTION OF THE PAGE

//Scroll up the page function
function topFunction(number) {
  document.documentElement.scrollTop = number; //
}
//Reset meal option
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

//SECTION - FUNCTIONS RELATED TO THE DISPLAY OF THE PAGE

//Value of checkbox
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
//Display menue
const displayMeal = function (...items) {
  const itemArr = items.flat(2);
  const justItems = itemArr.filter((el) => el !== "none");
  const itemStr = justItems + "";
  const finishedItemStr = itemStr.replaceAll(",", " / ");

  return finishedItemStr;
};
//Create Dom element for meal
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

//SECTION - BUTTONS
//Add more item
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
//btn add breakfast
if (btnBreakfast) {
  btnBreakfast.addEventListener("click", function () {
    storingItemInGroceryListObj();
    topFunction(200);
    warning();
    document.querySelector(".lunch").classList.remove("hidden");
    btnBreakfast.classList.add("hidden");
  });
}
//btn add lunch
if (btnLunch) {
  btnLunch.addEventListener("click", function () {
    addPlanToGrocery();
    createDomElementLunch();
    storingItemInGroceryListObj();
    topFunction(200);
    resetMealOption();
    document.querySelector(".supper").classList.remove("hidden");
    btnLunch.classList.add("hidden");
  });
}
//btn add supper
if (btnSupper) {
  btnSupper.addEventListener("click", function () {
    addPlanToGrocery();
    createDomElementSupper();
    storingItemInGroceryListObj();
    topFunction(200);

    btnSupper.classList.add("hidden");
    // resetMealOption();
  });
}

//SECTION - LOCAL STORAGE
// Storing groceryList object to Local Storage
const storingItemInGroceryListObj = function () {
  const groceryListstorageStr = JSON.stringify(grocerieList);
  localStorage.setItem("grocerieList", groceryListstorageStr);
};

///ANCHOR - /MODAL
const modalDoneBtn = document.querySelector(".done");

//SECTION - MODAL BUTTONS
//Btn to open Modal to add new ingredients
if (btnOpenModal) {
  btnOpenModal.addEventListener("click", function () {
    model.classList.remove("hidden");
    topFunction(320);
  });
}
// Btn X to close Modal
if (btncloseModal) {
  btncloseModal.addEventListener("click", function () {
    model.classList.add("hidden");
  });
}

//SECTION - MODAL STORAGE CODE

//Adding new Ing to storage and displaying new ingredient on the option menue

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
  });
}

//Local storage of all new Ing
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

//SECTION - FUNCTION FOR DISPLAY NEW ITEM

//Display new Item to page
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
//display new Item after adding a new Item
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

//New item appear on load
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
