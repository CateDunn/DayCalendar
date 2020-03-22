console.log("testing");

var format = ('ll');
var moment = moment()
console.log(moment)
var dateResult = moment.format(format);
console.log(dateResult);

$("#currentDay").html(dateResult);

console.log(moment.format(format))
