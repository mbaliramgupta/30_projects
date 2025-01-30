let [seconds,minutes,hours]=[0,0,0];
let displayTime=document.getElementById("displaytime");
let timer=null;

function stopwatchuodate(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    displayTime.innerHTML=h+":"+m+":"+s;
}

function startwatch(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatchuodate,1000);
}

function stopwatch(){
      clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
    
}