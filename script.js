const ps = document.getElementById("ps");
const pm = document.getElementById("pm");
const ph = document.getElementById("ph");

function clock()
{
    const now = new Date();
    const sec = ((now.getSeconds() / 60) * 360);
    const min = ((now.getMinutes() / 60) * 360);
    const hour = ((now.getHours() / 60) * 360);
    ps.style.transform = `rotate(${sec}deg)`;
    pm.style.transform = `rotate(${min}deg)`;
    ph.style.transform = `rotate(${hour}deg)`;
}

setInterval(clock, 1000);
