// watch function & time control

let hr = 0;
let min = 0;
let sec = 0;

// second
const intervalSecond = setInterval(() => {
    // console.log(sec);
    document.getElementById('sec').innerHTML = sec;
    if (sec === 59) {
        sec = 0;
        min++;
    } else {
        sec++;
    }
}, 1000);

// minute
const intervalMinute = setInterval(() => {
    // console.log(min);
    document.getElementById('min').innerHTML = min;
    if (min === 59) {
        min = 0;
        hr++;
    } else {
        min++;
    }
}, 60000);


// hour
const intervalHour = setInterval(() => {
    // console.log(hr);
    document.getElementById('hr').innerHTML = hr + ' :';
    if (hr === 12) {
        hr = 0;
    } else {
        hr++;
    }
}, 3600000)