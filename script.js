
let homescoreEl = document.getElementById("home-score-el")
let homecount = 0

function oneHome() {
    homecount += 1
    homescoreEl.textContent = homecount
}

function twoHome() {
    homecount += 2
    homescoreEl.textContent = homecount
}

function threeHome() {
    homecount += 3
    homescoreEl.textContent = homecount
}


let guestscoreEl = document.getElementById("guest-score-el")
let guestcount = 0

function oneGuest() {
    guestcount += 1
    guestscoreEl.textContent = guestcount
}

function twoGuest() {
    guestcount += 2
    guestscoreEl.textContent = guestcount
}

function threeGuest() {
    guestcount += 3
    guestscoreEl.textContent = guestcount
}