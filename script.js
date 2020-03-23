console.log("testing");

var format = ('ll');
var moment = moment()
console.log(moment)
var dateResult = moment.format(format);
console.log(dateResult);

$("#currentDay").html(dateResult);

console.log(moment.format(format))



var btn = document.getElementsByClassName('btn');
console.log(btn);

function myFunction9(){
    var str = document.getElementById('text9').value;
    console.log(str)
    $("#9AM").text(str);
    localStorage.setItem('9AM', str);
};

function myFunction10(){
    var str = document.getElementById('text10').value;
    $("#10AM").text(str);
};

function myFunction11(){
    var str = document.getElementById('text11').value;
    $("#11AM").text(str);
};
function myFunction12(){
    var str = document.getElementById('text12').value;
    $("#12PM").text(str);
};
function myFunction1(){
    var str = document.getElementById('text1').value;
    $("#1PM").text(str);
};
function myFunction2(){
    var str = document.getElementById('text2').value;
    $("#2PM").text(str);
};
function myFunction3(){
    var str = document.getElementById('text3').value;
    $("#3PM").text(str);
};
function myFunction4(){
    var str = document.getElementById('text4').value;
    $("#4PM").text(str);
};
function myFunction5(){
    var str = document.getElementById('text5').value;
    $("#5PM").text(str);
};

function renderLast(){
    var event = localStorage.getItem("9AM");
    if (event === null) {
    return;
  };
  $("#9AM").text(event);
}

renderLast()
