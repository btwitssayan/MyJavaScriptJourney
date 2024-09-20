const randNum = parseInt(Math.random() * 100 + 1); 
console.log("Random Number:", randNum);

const submit = document.querySelector("#submit"); 
const userGuess = document.querySelector("#guess-num"); 
const result = document.querySelector("#result"); 
const form = document.querySelector("form"); 

let attempt = 1; 
let prevGuesses = []; 

const attempLimit = 50;

const inst = document.querySelector(".inst2")
inst.innerHTML = `you have ${attempLimit} Attempts to guess the right number`


function validNumber(num) {
    if (isNaN(num) || num === "") {
        alert("Please Enter a Number...!");
        return false;
    } else if (num <= 0 || num > 100) {
        alert("Please Enter a Number between 1 to 100...!");
        return false;
    }
    return true;
}

function matchNumber(num, attempts) {
    if (num > randNum) {
        return `Your Guess is TOOO.... High..!`;
    } else if (num < randNum) {
        return `Your Guess is TOOO.... LOW..!`;
    } else {
        alert("Congratulation You Win...!")
        return `You Got it in ${attempts} attempts.!`;

    }
}

function displayMessages(message, prevGuesses, remAttempts) {
    deleteMessages();
    
    const prvMessageel = document.createElement("span");
    const remMessageel = document.createElement("span");
    const messageel = document.createElement("span");

    prvMessageel.id = "prv";
    remMessageel.id = "rem";
    messageel.id = "msg";

    prvMessageel.innerHTML = "Previous guesses: " + prevGuesses.join(", ");
    remMessageel.innerHTML = "Remaining attempts: " + remAttempts; 
    messageel.innerHTML = message;

    result.appendChild(prvMessageel);
    result.appendChild(remMessageel);
    result.appendChild(messageel);
}

function deleteMessages() {
    const existingPrv = result.querySelector("#prv");
    const existingRem = result.querySelector("#rem");
    const existingMessage = result.querySelector("#msg");

    const arr = [existingMessage, existingPrv, existingRem];

    arr.forEach((item) => {
        if (item) {
            item.remove();
        }
    });
}

function isEligibleToPlay(attempt) {
    return attempt <= attempLimit;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isEligibleToPlay(attempt)) {
        const userNum = parseInt(userGuess.value);

        if (validNumber(userNum)) {
            const msg = matchNumber(userNum, attempt);
            prevGuesses.push(userNum);
            displayMessages(msg, prevGuesses, 10 - attempt);
            attempt++;
            userGuess.value = "";

        }
    } else {
        let corNum = document.createElement("span");
        corNum.innerHTML = `Correct Number : ${randNum}`;
        result.appendChild(corNum);
        alert("You've exceeded the maximum number of attempts!");
    }
});

form.addEventListener("reset", (e) => {
    attempt = 1;
    prevGuesses = [];
    deleteMessages();
    userGuess.value = ""; 
});

