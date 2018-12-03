// player can answer questions, and can only select one answer

function myFunction1T() {
    document.getElementById("answer1").innerHTML = "You answered true.";
}

function myFunction1F() {
    document.getElementById("answer1").innerHTML = "You answered false.";
}

function myFunction2T() {
    document.getElementById("answer2").innerHTML = "You answered true.";
}

function myFunction2F() {
    document.getElementById("answer2").innerHTML = "You answered false.";
}

function myFunctionA() {
    document.getElementById("answer3").innerHTML = "You answered A.";
}

function myFunctionB() {
    document.getElementById("answer3").innerHTML = "You answered B.";
}

function myFunctionC() {
    document.getElementById("answer3").innerHTML = "You answered C.";
}

function myFunctionD() {
    document.getElementById("answer3").innerHTML = "You answered D.";
}


// 10 sec countdown

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < -1) {

            clearInterval(startTimer);
            alert("Times Up! How many did you get correct? \n1. True! All cats are born with blue eyes because the newborn kitten's melanin level has not yet been established, so their eyes reflect outside light which is seen as blue. Melanocyte cells respond to light and will start to make melanin in the first few weeks after birth. Cats who retain blue eyes into adulthood do so because of low or no melanin production. \n2. True! All cats have the tabby gene. If you look closely, even solid-colored cats have faint tabby markings. \n3. C is correct. A group of cats is called a clowder. \nClick OK if you want to retake the quiz.");
            //    reset quiz
            
            location.reload();

           

        }
    }, 1000);

}



window.onload = function () {
    var tenSeconds = 10,
        display = document.querySelector('#seconds');
    startTimer(tenSeconds, display);
};









