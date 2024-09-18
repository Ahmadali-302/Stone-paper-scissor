let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const showWinner = (userWin, userChoiceId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;  // Corrected to innerHTML
        msg.innerHTML = `Congrats! You win. Your ${userChoiceId} beats ${compChoice}`;  // Corrected to innerHTML
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;  // Corrected to innerHTML
        msg.innerHTML = `Sorry, you lose. ${compChoice} beats your ${userChoiceId}`;  // Corrected to innerHTML
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoiceId) => {
    console.log("User Choice is ", userChoiceId);
    const compChoice = genCompChoice();
    console.log("Comp Choice is ", compChoice);

    if (userChoiceId === compChoice) {
        console.log("It's a tie");
        msg.innerHTML = "Game was Draw. Play again.";  // Corrected to innerHTML
        msg.style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoiceId, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id");
        playGame(userChoiceId);
    });
});
