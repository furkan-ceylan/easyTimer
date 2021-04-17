let timer;
const secondsTimerDisplay = document.querySelector('.seconds');
const minutesTimerDisplay = document.querySelector('.minutes');
const hoursTimerDisplay = document.querySelector('.hours');
const daysTimerDisplay = document.querySelector('.days');

function setTimer(seconds) {
    //when entering a new parameter, overwrite the old one with the new parameter
    clearInterval(timer);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    timer = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(setTimer);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const remainderSeconds = seconds % 60;
    const remainderMinutes = minutes % 60;
    const remainderHours = hours % 24;
    const remainderDays = days;
    const secondsDisplay = `${remainderSeconds}`;
    const minutesDisplay = `${remainderMinutes}`;
    const hoursDisplay = `${remainderHours}`;
    const daysDisplay = `${remainderDays}`;
    //console.log({ remainderDays, remainderHours, remainderMinutes, remainderSeconds });
    secondsTimerDisplay.textContent = secondsDisplay;
    minutesTimerDisplay.textContent = minutesDisplay;
    hoursTimerDisplay.textContent = hoursDisplay;
    daysTimerDisplay.textContent = daysDisplay;
}

document.valForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var secs = this.Sec.value;
    var mins = this.Min.value;
    var hours = this.Hour.value;
    var days = this.Day.value;

    var total = Number(secs) + Number(mins * 60) + Number(hours * 3600) + Number(days * 86400);
    // console.log(secs);
    // console.log(mins*60);
    // console.log(hours*3600);
    // console.log(days*86400);
    // console.log(total);
    setTimer(total);

    this.reset();
});