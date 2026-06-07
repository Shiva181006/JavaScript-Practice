let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;



function start(){

    if(timer !== null){
        return;
    }


    timer = setInterval(() => {

        seconds++;


        if(seconds === 60){
            seconds = 0;
            minutes++;
        }


        if(minutes === 60){
            minutes = 0;
            hours++;
        }


        document.getElementById("display").innerHTML =
        hours + ":" + minutes + ":" + seconds;


    },1000);

}




function stop(){

    clearInterval(timer);

    timer = null;

}




function reset(){

    clearInterval(timer);

    timer = null;


    seconds = 0;
    minutes = 0;
    hours = 0;


    document.getElementById("display").innerHTML =
    "0:0:0";

}
