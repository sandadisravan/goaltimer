const sec = document.querySelector("#seconds");
const hr = document.querySelector("#hours");
const day = document.querySelector("#days");
const mint = document.querySelector("#minutes");
const goalDate = "1 june 2022";
function plan(){
  const goalDate1 = new Date(goalDate);
  const date = new Date();
  const totalSeconds = (goalDate1-date)/ 1000;
  const hours = Math.floor(totalSeconds/3600)%24;
  const days = Math.floor(totalSeconds/3600/24);
  const min = Math.floor(totalSeconds/60)%60;
  const secn = Math.floor(totalSeconds)%60;
  sec.innerHTML = secn;
  mint.innerHTML = min;
  hr.innerHTML = hours;
  day.innerHTML = days;
  console.log(seconds,hours,days);
}
plan();
setInterval(plan,1000);
