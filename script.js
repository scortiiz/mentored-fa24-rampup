function next(current, nextone) {
    document.getElementById(current).style.display = "none";
    document.getElementById(nextone).style.display = "block";
}
let tracker = 0;

function scorecount(change) {
   tracker += change
}