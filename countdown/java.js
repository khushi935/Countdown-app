let daysE1=document.getElementById('Days');
let MinutesE1=document.getElementById('Minutes');
let HoursE1=document.getElementById('Hours');
let SecondE1=document.getElementById('Second');

const newyear= "1 Jan 2021";
function countdown(){
    const neyyeardate= new Date(newyear);
    const currentdate= new Date();
    let seconds=(neyyeardate-currentdate)/1000;
    let Days=Math.floor(seconds/3600/24);
    let Hours=Math.floor(seconds/3600)%24;
    let Minutes=Math.floor(seconds/60)%60
    let Second=Math.floor(seconds)%60
    daysE1.innerHTML =Days;
    MinutesE1.innerHTML=formatetime(Minutes);
    HoursE1.innerHTML=Hours;
    SecondE1.innerHTML=formatetime(Second);
}
function formatetime(time){
    return time<10? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);