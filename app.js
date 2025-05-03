let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msgs = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gameDraw = () => {
    msgs.innerText = "the game was draw!";
    msgs.style.backgroundcolor = "#081b31";
};

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgs.innerText = 'you win!  your ${userChoice} bessts comp  ${compChoice}';
        msgs.style.backgroundcolor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msgs.innerText = 'you loss! ';
        msgs.style.backgroundcolor = "red";
    }
};



const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor, paper!
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === paper) {
            // rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});