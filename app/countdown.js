const TIMES = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'];

// Function to create container
function createContainer(times) {
  const counterContainer = document.getElementById('counter-container');

  for (let i = 0; i < times.length; i++) {
    const counterSubcontainer = document.createElement('div');
    counterSubcontainer.classList.add('counter-subcontainer');

    const counterTime = document.createElement('div');
    counterTime.classList.add('counter-time');
    counterTime.innerText = times[i];
    counterTime.addEventListener('click', () => console.log('hole'));

    const counterNumber = document.createElement('div');
    counterNumber.classList.add('counter-number');
    counterNumber.innerText = 0;
    counterNumber.setAttribute('id', `time${i}`);
    counterSubcontainer.appendChild(counterTime);
    counterSubcontainer.appendChild(counterNumber);

    counterContainer.appendChild(counterSubcontainer);
  }
}

// Function to update counter
function updateCounter(days, hours, minutes, seconds) {
  const counterDays = document.getElementById('time0');
  counterDays.innerText = days;
  const counterHours = document.getElementById('time1');
  counterHours.innerText = hours;
  const counterMinutes = document.getElementById('time2');
  counterMinutes.innerText = minutes;
  const counterSeconds = document.getElementById('time3');
  counterSeconds.innerText = seconds;
}

// Countdown function
function countDown(interval) {
  const now = new Date().getTime();
  const event = new Date('Nov 24, 2023 00:00:00').getTime();

  let subtraction = event - now;

  if (subtraction < 0) {
    clearInterval(interval); 
    updateCounter(0, 0, 0, 0);
    return;
  }

  const days = Math.floor(subtraction / (1000 * 60 * 60 * 24));
  const hours = Math.trunc(
    Math.floor(subtraction % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.trunc(
    Math.floor(subtraction % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = String(Math.trunc(Math.floor(subtraction % (1000 * 60)) / 1000)).padStart(2, '0');
  
  updateCounter(days, hours, minutes, seconds);
}

// Create container when loading the app
document.addEventListener('DOMContentLoaded', () => {
  createContainer(TIMES);
  const interval = setInterval(countDown, 1000);
  countDown(interval);
});
