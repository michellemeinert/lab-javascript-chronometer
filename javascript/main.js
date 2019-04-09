var chronometer = new Chronometer();
//var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
//var milDec      = document.getElementById('milDec');
//var milUni      = document.getElementById('milUni');
 

function printTime(timeArr) {
  printMinutes(timeArr)
  printSeconds(timeArr)
}

function printMinutes(timeArr) {
  console.log(timeArr);
  minDec.innerHTML = timeArr[0][1];
  minUni.inerHTML = timeArr[0][0];
}

function printSeconds(timeArr) {
 secDec.innerHTML = timeArr[1][0];
 secUni.innerHTML = timeArr[1][1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
 btnLeft.innerHTML = 'START';
}

function setSplitBtn() {
   btnRight.innerHTML = 'RESET';
  
}

function setStartBtn() {
 btnLeft.innerHTML = 'STOP';
  
}

function setResetBtn() {
btnRight.innerHTML = 'SPLIT';
}

function startStop () {
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick();
    btnLeft.setAttribute('class', 'btn stop');
    setStartBtn();
  } else if (btnLeft.innerHTML === 'STOP') {
    chronometer.stopClick();
    btnLeft.setAttribute('class', 'btn start')
    setStopBtn();
  }
}


function splitReset () {
  if (btnLeft.innerHTML === 'RESET') {
    chronometer.resetClick();
    btnRight.setAttribute('class', 'btn split')
    resetClick();
    setResetBtn();
  } else if (btnRight.innerHTML === 'SPLIT') {
    chronometer.splitClick();
    btnRight.setAttribute('class', 'btn split');
    setSplitBtn();
    splitClick();
  }
}
// Start/Stop Button
btnLeft.addEventListener('click', startStop);

// Reset/Split Button
btnRight.addEventListener('click', splitReset());
