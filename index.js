//point increment home
let point = 0;
let pointsHome = document.getElementById("score-home");

function onePoint() {
  point += 1;
  pointsHome.textContent = point;
}
function twoPoint() {
  point += 2;
  pointsHome.textContent = point;
}
function threePoint() {
  point += 3;
  pointsHome.textContent = point;
}

//point increment guests
let pointG = 0;
let pointsGuest = document.getElementById("score-guest");

function onePointGuest() {
  pointG += 1;
  pointsGuest.textContent = pointG;
}
function twoPointGuest() {
  pointG += 2;
  pointsGuest.textContent = pointG;
}
function threePointGuest() {
  pointG += 3;
  pointsGuest.textContent = pointG;
}

//reset score
function reset() {
  point = 0;
  pointG = 0;
  pointsHome.textContent = point;
  pointsGuest.textContent = pointG;
}
