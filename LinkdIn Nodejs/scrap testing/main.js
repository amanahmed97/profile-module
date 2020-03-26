// This sample code will make a request to LinkedIn's API to retrieve and print out some
// basic profile information for the user whose access token you provide.

const https = require("https");
var express = require("express");
var router = express.Router();
router.post("/", function(req, res, next) {
  //var pass = req.body("password");
  //var loginx = req.body("login");
  //res.render('index.html', { title: 'Express' });
  res.redirect(
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81kl6kfm1icjxh&redirect_uri=http://127.0.0.1:5500/node/linkedIn/main.html&scope=r_liteprofile%20r_emailaddress%20w_member_social"
  );
});
// const accessToken =
//   "AQU0UOc2yJzKsHON2uAWCHtDkPKJ-FU3HeMOSLZrEy8AEvD2H9CM2Lm78b3lued1wrF4hJqp_XXm5dcoqcEHhrPvRuD1WVqkIE5d6tTNzU6SjsXmpzmTJxx51unok2cDv89J5utwSiUvGJbCtVy2O4a14QzfUd-qGv8EgGIUUrJxz9ZI4-r6AlxdopGWk-Ighk-1dVIZl9qapj9DwFiZcg7Yt4SqsLVCCp29ZlrvrNVxW2_ywahVhMxCxJTlBi8ES5-h8g_6KK3TrZDFFObxVEZ506iqR5XqWl9rFRcKFVBLG4-Q2WWqkO91_3FlZn8Q4Ay9tm7ZntaLIawzUcsq5e-w84HarQ";

// const options = {
//   host: "api.linkedin.com",
//   path: "/v2/me",
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     "cache-control": "no-cache",
//     "X-Restli-Protocol-Version": "2.0.0"
//   }
// };

// const profileRequest = https.request(options, function(res) {
//   let data = "";
//   res.on("data", chunk => {
//     data += chunk;
//   });

//   res.on("end", () => {
//     const profileData = JSON.parse(data);
//     console.log(JSON.stringify(profileData, 0, 2));
//   });
// });
// profileRequest.end();
