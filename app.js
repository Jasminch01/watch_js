// var watch = document.querySelector(".watch");
// setInterval(function(){

//     var date = new Date ();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     hours = hours % 12;
//     minutes = check(minutes);
//     seconds = check (seconds);
//     var time = hours + ": " + minutes + ":" + seconds;
//     watch.textContent = time;

// },1000)

// function check(e){
//     if(e<10){
//         e = "0" +e;
//     }return e;
// };
var watch = document.querySelector(".watch");
var Day = ["sunday", "satarday", "monday", "tuesday", "wednessday", "thusday", "friday"]
var ampm = document.querySelector(".ampm");


setInterval(() => {
   var date = new Date();

var today = Day[date.getDay()];
var hour= date.getHours();
var minutes = date.getMinutes();
var second = date.getSeconds();
hour = hour %12;
minutes = count(minutes);
second = count (second);

var time = hour + ":" + minutes + ":" + second+ " " + today;

watch.textContent = time;

if (hour >= 0 && hour < 12) {
   ampm.innerText = 'AM'
} else if (hour > 11 && hour < 24) {
   ampm.innerText = 'PM'
} else {
   ampm.innerText = 'AM'
}
   
}, 1000);

function count (e){
   if(e<10){
      e = "0"+ e;
   }return e;
}

count();