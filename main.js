let state = {
    score: 0,
    wrongAnswers: 0
};

function updateProblem() {
    state.currentProblem = generateProblem()
};

// use Math to generate random number(0-10)
function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1)); // floor rounds float down to integer
};

function generateProblem() {
    return {
        numberOne: generateNumber(10), // first random number for problem
        numberTwo: generateNumber(10), // second random number for problem
        operator: ['+', '-', 'X'][generateNumber(2)] // operator to display between numbers
    };
};
