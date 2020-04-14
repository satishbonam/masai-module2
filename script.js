//create landing page for Fight back COVID
//have search bar to take country as input and show the details of that country
//take login with details name,email,location,safe/affected,if affected upi id,
//show the map of his location with all safe green,affected red
//have a column for live count of country
//on click of mark on map show details/redirect for affected to send moral support and economic support

import { appendData, validateUser } from "./authenciation.js";
import { getData } from "./search.js";

let registerForm = document.getElementById("register");
registerForm.addEventListener("submit", event => {
  event.preventDefault();
  appendData();
});

let loginForm = document.getElementById("login");
loginForm.addEventListener("submit", event => {
  event.preventDefault();
  if (validateUser()) {
    document.location.href = "login.html";
  }
});

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  let searchValue = document.getElementById("search");
  getData(searchValue.value);
  searchValue.value = "";
});
