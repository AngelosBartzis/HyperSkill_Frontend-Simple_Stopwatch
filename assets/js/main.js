const timer = document.getElementById('timer');
let stopwatch = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        stopwatch = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(stopwatch);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(stopwatch);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timer.textContent = '00:00:00';
    const listContainer = document.getElementById('laps');
    listContainer.innerHTML = '';
}

function lap() {
    isRunning = true;
    const listContainer = document.getElementById('laps');
    const listLaps = document.createElement('li');
    listLaps.innerHTML = this.timer.textContent; //Or document.getElementById('timer').textContent;
    listContainer.appendChild(listLaps);
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    timer.textContent = `${minutes}:${seconds}:${milliseconds}`;
}


/*
const addLap = document.getElementById('lap');
    addLap.addEventListener('click', (e) => {
        const listContainer = document.getElementById('laps');
        listContainer.innerHTML = '';
        const listLaps = document.createElement('li');
        listLaps.textContent = `${minutes}:${seconds}:${milliseconds}`;
        listContainer.appendChild(listLaps);
    })
 */