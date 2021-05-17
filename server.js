const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(request, response){
  response.sendFile(__dirname + "/index.html");
});


app.post("/" , function(request, response){

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = (weight/(height * height));

  response.send("Your BMI is " + result);
});


app.listen(3000, function(){
  console.log("The server is running on Port 3000");
});
