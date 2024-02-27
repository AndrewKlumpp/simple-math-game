const problemElement = document.querySelector(".problem");
const ourForm = document.querySelector(".our-form");
const ourField = document.querySelector(".our-field");
const pointsNeeded = document.querySelector(".points-needed");
const mistakesAllowed = document.querySelector(".mistakes-allowed");

let state = {
    score: 0,
    wrongAnswers: 0
};

function updateProblem() {
    state.currentProblem = generateProblem();
    problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`;
    ourField.value = "";
    ourField.focus();
};

updateProblem();

// use Math to generate random number(0-10)
function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1)); // floor rounds float down to integer
};

function generateProblem() {
    return {
        numberOne: generateNumber(10), // first random number for problem
        numberTwo: generateNumber(10), // second random number for problem
        operator: ['+', '-', 'x'][generateNumber(2)] // operator to display between numbers
    };
};


ourForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) { // 'e' = event
    e.preventDefault() // prevents default behavior of reloading page

    let correctAnswer;
    const p = state.currentProblem; // 'p' = problem
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;
    if (p.operator == "-") correctAnswer = p.numberOne - p.numberTwo;
    if (p.operator == "x") correctAnswer = p.numberOne * p.numberTwo;

    if (parseInt(ourField.value, 10) === correctAnswer) { // User submitted answer is correct
        state.score++;
        pointsNeeded.textContent = 10 - state.score;
        updateProblem()
    } else { // User submitted answer is wrong
        state.wrongAnswers++;
        mistakesAllowed.textContent = 2 - state.wrongAnswers;
    };
    checkLogic()
};

function checkLogic() {
    // if you win
    if(state.score === 10) {
        alert("Congrats! You won.");
        resetGame();
    };
    // if you lose
    if(state.wrongAnswers === 3) {
        alert("Sorry, you lost.");
        resetGame();
    };
};

function resetGame() {
    updateProblem();
    state.score = 0;
    state.wrongAnswers = 0;
    pointsNeeded.textContent = 10;
    mistakesAllowed.textContent = 2;
};
