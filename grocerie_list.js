groceryListStorage = JSON.parse(localStorage.getItem("grocerieList"));
document.getElementById("homemade_list").innerHTML =
  groceryListStorage.homemade;
document.getElementById("fruit_list").innerHTML = groceryListStorage.fruit;
document.getElementById("list_Veggie").innerHTML = groceryListStorage.veggie;
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
document.getElementById("list_drinks").innerHTML = groceryListStorage.beverage;
