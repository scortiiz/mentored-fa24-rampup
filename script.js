function next(current, nextone) {
    document.getElementById(current).style.display = "none";
    document.getElementById(nextone).style.display = "block";
}
let tracker = 0;

function scorecount(change) {
   tracker += change
}

function whichend() {
    document.getElementById('sixth_q').style.display = "none";
    if (tracker <= 0) {
        document.getElementById('ending1').style.display = "block";
        const scoreText = document.getElementById('scoreText1');
        scoreText.textContent += tracker;
    } else if (tracker <= 50) {
        document.getElementById('ending2').style.display = "block";
        const scoreText = document.getElementById('scoreText2');
        scoreText.textContent += tracker;
    } else if (tracker < 100) {
        document.getElementById('ending3').style.display = "block";
        const scoreText = document.getElementById('scoreText3');
        scoreText.textContent += tracker;
    }else {
        document.getElementById('ending4').style.display = "block";
        const scoreText = document.getElementById('scoreText4');
        scoreText.textContent += tracker;

    }
}