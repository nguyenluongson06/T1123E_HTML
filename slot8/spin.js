var spinbar = document.getElementById("spinbar");
var rotated = false;
var current_deg = 0;
var spin_start;

function spin(){
    spin_start = setInterval(() => {
        current_deg += 360/144;

        spinbar.style.transform = `rotate(${current_deg}deg)`; 
        rotated = !rotated;
    }, 1000/144);
}

function stopSpin(){
    clearInterval(spin_start);
}