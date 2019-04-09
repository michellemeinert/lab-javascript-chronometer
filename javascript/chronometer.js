// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    let timeArr = this.setTime();
    printTime(timeArr);
  }, 1000); 
}

Chronometer.prototype.setMinutes = function () {
  return (Math.floor(this.currentTime / 60));  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  value = String(value);
  if(value < 10) {
    return 0 + value; 
  } else {
    return value;
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  return [minutes, seconds];
 
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  return;
};

Chronometer.prototype.splitClick = function () {
  let li = document.createElement('li');
  ol.appendChild('li');
  li.innerHTML = setTime();
  console.log('split');
  return li.innerHTML;
  
 };