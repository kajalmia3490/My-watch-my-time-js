// button function group
// reset button
function resetButtonClick() {
    clearInterval(intervalHour);
    clearInterval(intervalMinute);
    clearInterval(intervalSecond);
    document.getElementById('sec').innerHTML = '--';
    document.getElementById('min').innerHTML = '--';
    document.getElementById('hr').innerHTML = '-- :';
}

// start button
function startButtonClick() {
    location.reload();
}

// stop button
function stopButtonClick() {
    // alert('Continue');
    clearTimeout(intervalSecond);
    clearTimeout(intervalMinute);
    clearTimeout(intervalHour);
}