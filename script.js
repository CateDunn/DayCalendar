var format = ('ll');
var moment = moment()
console.log(moment)
//curent date (automatically updates)
var dateResult = moment.format(format);

//setting Date at the top of the page to the current date
$("#currentDay").html(dateResult);


var timeFormat = ('LT');
//current time (automatically updates)
var currentTime= moment.format(timeFormat);


//functions that place the inputed calendar events into the time block for that hour. The event is stored
//in local storage
function myFunction9(){
    var str = document.getElementById('text9').value;
    $("#9AM").text(str);
    localStorage.setItem('9AM', str);
};
function myFunction10(){
    var str = document.getElementById('text10').value;
    $("#10AM").text(str);
    localStorage.setItem('10AM', str);
};
function myFunction11(){
    var str = document.getElementById('text11').value;
    $("#11AM").text(str);
    localStorage.setItem('11AM', str);
};
function myFunction12(){
    var str = document.getElementById('text12').value;
    $("#12PM").text(str);
    localStorage.setItem('12PM', str);
};
function myFunction1(){
    var str = document.getElementById('text1').value;
    $("#1PM").text(str);
    localStorage.setItem('1PM', str);
};
function myFunction2(){
    var str = document.getElementById('text2').value;
    $("#2PM").text(str);
    localStorage.setItem('2PM', str);
};
function myFunction3(){
    var str = document.getElementById('text3').value;
    $("#3PM").text(str);
    localStorage.setItem('3PM', str);
};
function myFunction4(){
    var str = document.getElementById('text4').value;
    $("#4PM").text(str);
    localStorage.setItem('4PM', str);
};
function myFunction5(){
    var str = document.getElementById('text5').value;
    $("#5PM").text(str);
    localStorage.setItem('5PM', str);
};


//functions that render the events that were previously entered in the calendar when the page is reloaded
function renderLast9(){
    var event = localStorage.getItem("9AM");
    if (event === null) {
    return;
    };
    $("#9AM").text(event);
};
renderLast9();

function renderLast10(){
    var event = localStorage.getItem("10AM");
    if (event === null) {
    return;
    };
    $("#10AM").text(event);
};
renderLast10();

function renderLast11(){
     var event = localStorage.getItem("11AM");
    if (event === null) {
    return;
    };
    $("#11AM").text(event);
};
renderLast11()
    
function renderLast12(){
    var event = localStorage.getItem("12PM");
    if (event === null) {
     return;
    };
    $("#12PM").text(event);
};
renderLast12()

function renderLast1(){
    var event = localStorage.getItem("1PM");
    if (event === null) {
    return;
    };
    $("#1PM").text(event);
 };
 renderLast1();

function renderLast2(){
    var event = localStorage.getItem("2PM");
    if (event === null) {
     return;
    };
    $("#2PM").text(event);
};
renderLast2();

function renderLast3(){
    var event = localStorage.getItem("3PM");
    if (event === null) {
    return;
    };
    $("#3PM").text(event);
};
renderLast3();

function renderLast4(){
    var event = localStorage.getItem("4PM");
    if (event === null) {
    return;
    };
    $("#4PM").text(event);
};
renderLast4();

function renderLast5(){
     var event = localStorage.getItem("5PM");
    if (event === null) {
    return;
    };
    $("#5PM").text(event);
};
renderLast5();









