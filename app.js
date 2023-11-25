//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
    // var today = new Date();

    // if(today.getDay() === 6 || today.getDay() === 0) {
    //     res.send("Yay It is Weekend");
    // } else {
    //     res.send("Boo! I have work");
    // }



    // var today = new Date();
    // var currentDate = today.getDay();

    // if(currentDate === 6 || currentDate === 0) {
    //     res.send("Yeh Today is Weekend");
    // } else {
    //     res.send("Boo I Have Work Today");
    // }



    // // When Data looked in html formate
    // var today = new Date();
    // var currentDate = today.getDay();

    // if(currentDate === 6 || currentDate === 0) {
    //     res.send("<h1>Yeh Today is Weekend!</h1>");
    // } else {
    //     res.send("<h1>Boo I Have Work Today!</h1>");
    // }


    // // When Multiple Data lookend in html formate
    // var today = new Date();
    // var currentDate = today.getDay();

    // if(currentDate === 6 || currentDate === 0) {
    //     res.write("<h1>Yeh Today is Weekend!</h1>");
    // } else {
    //     res.write("<h1>Boo I Have Work Today!</h1>");
    //     res.write("<p>Not Weekend!</p>");
    //     res.send();
    // }



    // // When Multiple Boiler Plate Data lookend in html Pages.
    // var today = new Date();
    // var currentDate = today.getDay();

    // if(currentDate === 6 || currentDate === 0   ) {
    //     res.sendFile(__dirname + "/weekend.html");
    // } else {
    //     res.sendFile(__dirname + "/weekday.html");
    // }


    var today = new Date();
    var currentDate = today.getDay();
    var day = "";

        
    if(currentDate === 6 || currentDate === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    res.render('list', {kindOfDay: day});
    
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});