//days
const days = document.querySelectorAll(".day");
const mondays = document.querySelectorAll(".mon");
const tuesdays = document.querySelectorAll(".tue");
const wednesdays = document.querySelectorAll(".wed");
const thursdays = document.querySelectorAll(".thu");
const fridays = document.querySelectorAll(".fri");
const saturdays = document.querySelectorAll(".sat");
const sundays = document.querySelectorAll(".sun");

//days list
const days_list = ["sundays","mondays","tuesdays","wednesdays","thursday","fridays","saturdays"];

//weeks
const week1 = document.querySelectorAll("#week1");
const week2 = document.querySelectorAll("#week2");
const week3 = document.querySelectorAll("#week3");
const week4 = document.querySelectorAll("#week4");
const week5 = document.querySelectorAll("#week5");

//configs
const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const monthNames = ["Janruary","February","March","April","May","June","July","August","September","October","November","December"];
const month_day = [31,28,31,30,31,30,31,31,30,31,30,31];

//now date object
const now = new Date();
const now_month = now.getMonth();
const now_month_name = monthNames[now_month];
const now_day = now.getDay();
const now_day_name = dayNames[now.getDay()];
const now_day_number = now.getDate();
const now_year = now.getFullYear(); 
const now_hour = now.getHours();
const now_min = now.getMinutes();

//week lists
const weeks_default = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let weeks = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//up down buttons
const up = document.querySelector("#month_up");
const down = document.querySelector("#month_down");

// date object
let nm = now_month+1;
let ny = now_year;
function showDates(a){
if(((nm+a)/12) > 1){
    nm -= 12;
    ny += 1;
}
if(((nm+a)/12) <= 0){
    nm += 12;
    ny -= 1;
}
var x = `${nm+a}/1/${ny}`;
const date = new Date(x);
let value = date.getDay();
if(value != 0){
    value -= 1;    
}else{
    if((value+7) != 7){
        value += 7;
    }
}
weeks = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let day;
for (let i = 0; i < days.length; i++) {
    day = days[i]
    if (weeks[i] != 0) {
        day.textContent = weeks[i];
    } 
}

for (let i = 1; i < month_day[date.getMonth()]+1; i++) {
    weeks[value] = i;
    value++;
} 

for (let i = 0; i < days.length; i++) {
    day = days[i]
    if (weeks[i] != 0) {
        day.textContent = weeks[i];
        if(weeks[i] == now_day_number){
            if(a==0){
            day.className = day.className + " attendence"; }
        }else{
            day.className = "day";
        }
    }else{
        day.textContent = "";
    }
}
//month_name config
document.querySelector("#month_name").textContent = monthNames[nm+a-1] + " " + ny;
}

//up-down event listener
up.addEventListener("click",monthUp);
down.addEventListener("click",monthDown);
window.addEventListener("load",showDates(0));

let number_month = 0;

// monthUp
function monthUp(e){
    number_month--;
    showDates(number_month);
    e.preventDefault();
}

//monthDown
function monthDown(e){
    number_month++;
    showDates(number_month);
    e.preventDefault();
}

//getDate
function getDate(a){
    switch (a) {
        case 1:
            return `${now_month_name} ${now_day_number}, ${now_year}`;
            break;
        case 2:
            return `${now_day_number}/${now_month+1}/${now_year}`;
            break;
        case 3:
            return `${now_month}/${now_day_number}/${now_year}`;
            break;
        default:
            return `${now_day_number} ${now_month_name} ${now_year}`;
            break;
    }
}

//getHour
function getHour(){
    return `${now_hour}:${now_min}`;
}

