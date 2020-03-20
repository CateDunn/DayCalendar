console.log("testing");

var format = ('ll');
var moment = moment()
var dateResult = moment.format(format);
console.log(dateResult);

$("#currentDay").html(dateResult);

console.log(moment.format(format))
