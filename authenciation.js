localStorage.clear();
let register = document.getElementsByClassName("register");
function Register() {
  this.email = register[0].value;
  this.password = register[1].value;
  this.address = register[2].value;
  this.country = register[3].value;
  this.city = register[4].value;
  this.isAffected = register[5].value;
}
let login = document.getElementsByClassName("login");
function Login() {
  this.email = login[0].value;
  this.password = login[1].value;
}

export const appendData = () => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  let user = new Register();
  let status = document.getElementById("registerStatus");
  let flag;

  if (userData == null) {
    userData = [];
  }

  userData.forEach(element => {
    if (element.email === user.email) {
      flag = true;
    }
  });

  if (flag) {
    status.textContent = "User Already registered,please Login";
    status.setAttribute("class", "h5 text-danger");
  } else {
    userData.push(user);
    status.textContent = "User Successfully Registered";
    status.setAttribute("class", "h5 text-success");
  }

  localStorage.setItem("userData", JSON.stringify(userData));
};

export const validateUser = () => {
  let user = new Login();
  let userData = JSON.parse(localStorage.getItem("userData"));
  let status = document.getElementById("loginStatus");
  let flag;

  userData.forEach(element => {
    if (user.email === element.email && user.password === element.password) {
      let loggedUser = element;
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      flag = true;
    } else if (
      user.email === element.email &&
      user.password !== element.password
    ) {
      flag = false;
    }
  });

  if (flag == true) {
    return true;
  } else if (flag == false) {
    status.textContent = "Incorrect Password";
    status.setAttribute("class", "h5 text-danger");
  } else {
    status.textContent = "User not Registered";
    status.setAttribute("class", "h5 text-danger");
  }
};

export default {};
