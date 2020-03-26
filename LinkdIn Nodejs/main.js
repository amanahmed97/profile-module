const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login", (req, res, next) => {
  // res.status(404).render('404', { pageTitle: 'Page Not Found' });
  res.redirect(
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81kl6kfm1icjxh&redirect_uri=http://localhost:3000/admin/add-product&scope=r_liteprofile%20r_emailaddress%20w_member_social"
  );
});
app.use("/admin", adminData.routes);
app.listen(3000);
