import { getData } from "./search.js";
const getUserData = () => {
  let data = JSON.parse(localStorage.getItem("loggedUser"));
  return data;
};

window.onload = () => {
  event.preventDefault();
  let data = getUserData();
  getData(data.country);
};
