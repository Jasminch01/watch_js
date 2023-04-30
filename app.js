var watch = document.querySelector(".watch");
setInterval(function(){

    var date = new Date ();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = hours % 12;
    minutes = check(minutes);
    seconds = check (seconds);
    var time = hours + ": " + minutes + ":" + seconds;
    watch.textContent = time;

},1000)

function check(e){
    if(e<10){
        e = "0" +e;
    }return e;
};