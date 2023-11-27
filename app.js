//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));

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



        // When Data looked in html formate
            // var today = new Date();
            // var currentDate = today.getDay();

            // if(currentDate === 6 || currentDate === 0) {
            //     res.send("<h1>Yeh Today is Weekend!</h1>");
            // } else {
            //     res.send("<h1>Boo I Have Work Today!</h1>");
            // }


        // When Multiple Data lookend in html formate
            // var today = new Date();
            // var currentDate = today.getDay();

            // if(currentDate === 6 || currentDate === 0) {
            //     res.write("<h1>Yeh Today is Weekend!</h1>");
            // } else {
            //     res.write("<h1>Boo I Have Work Today!</h1>");
            //     res.write("<p>Not Weekend!</p>");
            //     res.send();
            // }


        // When Multiple Boiler Plate Data lookend in html Pages.
            // var today = new Date();
            // var currentDate = today.getDay();

            // if(currentDate === 6 || currentDate === 0   ) {
            //     res.sendFile(__dirname + "/weekend.html");
            // } else {
            //     res.sendFile(__dirname + "/weekday.html");
            // }


        // use to boiler plate
            // var today = new Date();
            // var currentDate = today.getDay();
            // var day = "";

                
            // if(currentDate === 6 || currentDate === 0) {
            //     day = "Weekend";
            // } else {
            //     day = "Weekday";
            // }


        // Switch mathod use to show day name
            // var today = new Date();
            // var currentDay = today.getDay();
            // var day = "";

            // switch (currentDay) {
            //     case 0:
            //         day = "Sunday";
            //          break;
            //     case 1:
            //         day = "Monday";
            //         break;
            //     case 2:
            //         day = "Tuesday";
            //         break;
            //     case 3:
            //         day = "Wednesday";
            //         break;
            //     case 4:
            //         day = "Thursday";
            //         break;
            //     case 5:
            //         day = "Friday";
            //         break;
            //     case 6:
            //         day = "Saturday";
            //         break;
                    
            //     default:
            //         console.log("Error: current day is equal to: " + currentDay);
            // }

        // use javescript mathod to show day
                var today = new Date();
                var options = {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                };
                var day = today.toLocaleDateString("en-US", options);


            res.render('list', {kindOfDay: day, newListItems: items});
            
    });


                app.post("/", function(req, res) {
                    var item = req.body.newItem;

                    items.push(item);

                    res.redirect("/");
                    
                })



    

app.listen(3000, function(){
    console.log("Server started on port 3000");
});