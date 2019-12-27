setInterval(setClock, 1000);

const hourHand = document.getElementById("hourhand");
const minuteHand = document.getElementById("minutehand");
const secondHand = document.getElementById("secondhand");

function setClock() {
  const currentDate = new Date();

  const secondsRatio = (currentDate.getSeconds()) / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  console.log(
        'currentDate.getHours() =', currentDate.getHours(), 
        'currentDate.getMinutes() =', currentDate.getMinutes(), 
        'currentDate.getSeconds() =', currentDate.getSeconds(),
        'hoursRatio =', hoursRatio, 
        'minutesRatio =', minutesRatio, 
        'secondsRatio =', secondsRatio
        );

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', (rotationRatio - 0.25) * 360);
}

setClock();
