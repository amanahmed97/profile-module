console.log("Status of the user is", IN.User.isAuthorized());

if (IN.User.isAuthorized()) {
  IN.User.authorize(Loggedin, callbackScope);
} else {
  IN.API.Raw("https://api.linkedin.com/v1/people/~?format=json")
    .method("GET")
    .body("bodyContent")
    .result(Loggedin);
}

function Loggedin() {
  console.log("user is logged in ");
}

function callbackScope() {
  console.log("default ");
}
