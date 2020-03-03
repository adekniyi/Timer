var hour = document.querySelector("#hr");
var minute = document.querySelector("#min");
var seconds = document.querySelector("#sec");
var start = document.querySelector(".btn1");
var reset = document.querySelector(".btn2");
var stop = document.querySelector(".btn3");

var intervalID;


start.addEventListener("click", function() {
    intervalID = setInterval(sec, 1000);
});
stop.addEventListener("click", function() {
    clearInterval(intervalID);
});
reset.addEventListener("click", function() {
    seconds.innerHTML = 0;
    minute.innerHTML = 0;
    hour.innerHTML = 0;
});


function sec() {
    seconds.innerHTML++
        if (seconds.innerHTML % 60 == 0) {
            minute.innerHTML++;
            seconds.innerHTML = 0;
            if (minute.innerHTML % 60 == 0) {
                hour.innerHTML++;
                minute.innerHTML = 0;
            }
        }
}