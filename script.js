let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");
const userScoreBoard=document.querySelector("#user-score");
const compScoreBoaed=document.querySelector("#comp-score");

const genCompChoice=()=>
{
    //rock, paper, scissor
    const option=["rock","paper", "scissor" ];
    const randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
};
const drawGame=()=>
{
    msg.innerText="Game was a Draw, Play Again";
    msg.style.backgroundColor="#16262e";
};

const showWinner=(userWin, userChoice , compChoice)=>
{
if(userWin)
{
    userScore++;;
    userScoreBoard.innerText=userScore;
    msg.innerText=`Congratulations You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="Green";
  
}
else{
    compScore++;
    compScoreBoaed.innerText=compScore;
    msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="Red";
   
}
}

const playGame=(userChoice)=>
{
const compChoice=genCompChoice();
if(userChoice === compChoice)
{
    //draw Game
    drawGame();

}
else{
    let userWin=true;
    if(userChoice==="rock")
    {
        userWin=compChoice==="paper" ? false:true;
    }
    else if(userChoice==="paper")
    {
        userWin=compChoice==="scissor" ? false:true;
    }
    else
    {
        userWin=compChoice==="rock" ? false:true;
    }
    showWinner(userWin, userChoice , compChoice);
}
};

 choices.forEach((choices)=>
 {
   
    choices.addEventListener("click", ()=>{
        const userChoice= choices.getAttribute("id");
 playGame(userChoice);
    });
 });

