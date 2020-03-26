const path = require("path");
const https = require("https");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", (req, res, next) => {
  Authorization_code = req.url.split("=")[1];
  //Generating access Token
  clientId = "81kl6kfm1icjxh";
  clientSecrrt = "VwI8pUQXtkFMCpJq";
  url =
    "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=" +
    Authorization_code +
    "&redirect_uri=http://localhost:3000/admin&client_id=" +
    clientId +
    "&client_secret=" +
    clientSecrrt;

  const profileRequest = https.request(url, function(res) {
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    });
    res.on("end", () => {
      const profileData = JSON.parse(data);
      accessKey = profileData.access_token;
      GetProfileData(accessKey);
    });
  });
  profileRequest.end();

  res.redirect("http://localhost:3000/");
});

app.use("/login", (req, res, next) => {
  // Step --2 authorization
  res.redirect(
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81kl6kfm1icjxh&redirect_uri=http://localhost:3000/admin&scope=r_liteprofile%20r_emailaddress%20w_member_social"
  );
});

app.use("/", (req, res, next) => {
  res.write("<body>Hello</body>");
  res.end();
});
app.listen(3000);

function GetProfileData(key) {
  const options = {
    host: "api.linkedin.com",
    path: "/v2/me",
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "cache-control": "no-cache",
      "X-Restli-Protocol-Version": "2.0.0"
    }
  };

  const profileRequest = https.request(options, function(res) {
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      const profileData = JSON.parse(data);
      console.log(JSON.stringify(profileData, 0, 2));
    });
  });
  profileRequest.end();
}
