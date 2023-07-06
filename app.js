let todaysDate = document.querySelector(".date");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second")
let ampm = document.querySelector(".ampm");
let loader = document.querySelector (".loader");
let today = document.querySelector (".today");
let days = ['Sunday', 'Monday', "Tuesday", 'Wednesday', "Thursday", 'Friday', "Saturday"];

setInterval(() => {
   let date = new Date();


   //time 
   let currentHour = date.getHours();
   let currentMinute = date.getMinutes();
   let currentSecond = date.getSeconds();
   today.innerText = days[date.getDay()];
   todaysDate.innerText = date.toLocaleDateString();


   //hour 

   if(currentHour >= 22) {
       hour.innerText = `${currentHour -12}`;
   }else if (currentHour >12 && currentHour <22){
       hour.innerText = `0${currentHour - 12}`
   }else if (currentHour >=10 && currentHour <=22){
       hour.innerText = `${currentHour}`
   }else if (currentHour < 10){
       hour.innerText = `0${currentHour}`
   }

   if (currentMinute < 10) {
       minute.innerText = `0${currentMinute}`;
   } else {
       minute.innerText = `${currentMinute}`;
   }

   //second 

   if (currentSecond < 10) {
       loader.style.width = `${(100/60)* currentSecond}%`
       second.innerText = `0${currentSecond}`
       
   }else {
       loader.style.width = `${(100/60)* currentSecond}%`
       second.innerText = `${currentSecond}`;
   }

   //ampm 
   if(currentHour >= 0 && currentHour <12) {
       ampm.innerText = "AM";
   } else if (currentHour >11 && currentHour <24){
       ampm.innerText = "PM";
   } else{
       ampm.innerText = "AM"
   }

}, 1000);