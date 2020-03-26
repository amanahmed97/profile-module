var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testapp"
});

user = {
  address: "Noth Bridge",
  age: 23,
  father_name: "Rama Krishna",
  gender: "male",
  name: "Rohith",
  phone_number: "8639392370",
  user_ID: "123"
};

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "INSERT INTO user VALUES ?";
  var values = [
    [
      user.address,
      user.age,
      user.father_name,
      user.gender,
      user.name,
      user.phone_number,
      user.user_ID
    ]
  ];
  con.query(sql, [values], function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
