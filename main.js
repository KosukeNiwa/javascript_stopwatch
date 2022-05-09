const timer = document.getElementById("timer");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

//経過時間
let elapsedTime = 0;

//タイマー
let intervalID = null;

//スタートボタン
start.addEventListener("click", function(){
  if (intervalID !== null) {
    return;
  }
  
  //押した時の時刻
  let startTime = new Date();
  
  intervalID = setInterval(function(){
    const nowDate = new Date();
    elapsedTime += nowDate - startTime;
    startTime = nowDate;
    updateTimeText();
  }, 100);
  
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = false;
  
});

//ストップボタン
stop.addEventListener("click", function(){
  clearInterval(intervalID);
  intervalID = null;
  
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  
});

//リセットボタン
reset.addEventListener("click", function(){
  elapsedTime = 0;
  updateTimeText();
  
//  if ("stop" === true) {
//    document.getElementById("reset").disabled = true;
//  }
  
});

function updateTimeText () {
  let h = Math.floor(elapsedTime / 1000 / 60 / 60);
  let m = Math.floor(elapsedTime / 1000 / 60 % 60);
  let s = Math.floor(elapsedTime / 1000 % 60);
  let ms = elapsedTime % 1000;
  
  h = h.toString().slice(0, 2);
  m = m.toString().slice(0, 2); 
  s = s.toString().slice(0, 2); 
  ms = ms.toString().slice(0, 1); 

  timer.textContent = h + ":" + m + ":" + s + ":" + ms;
}
