// alert("");
{
  fetch("https://api.covid19api.com/summary")
    .then(responce => responce.json())
    .then(res => localStorage.setItem("summary", JSON.stringify(res)))
    .catch(err => alert(err));
}

export const getData = val => {
  let summary = JSON.parse(localStorage.getItem("summary"));
  let input = formatInput(val);
  Array.from(summary.Countries).forEach(element => {
    let country = formatInput(element.Country);
    console.log(country);
    if (country === input) {
      dispData(element);
    }
  });
};

const formatInput = input => {
  input = input.trim().split(" ");
  input = input.join("");
  input = input.split("");
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].toLowerCase();
  }
  return input.join("");
};

const dispData = data => {
  let search = document.getElementsByClassName("search");
  search[0].textContent = data.Country;
  search[1].textContent = data.TotalConfirmed;
  search[2].textContent = data.NewConfirmed;
  search[3].textContent = data.TotalDeaths;
  search[4].textContent = data.NewDeaths;
  search[5].textContent = data.TotalRecovered;
  search[6].textContent = data.NewRecovered;
};

export default {};
