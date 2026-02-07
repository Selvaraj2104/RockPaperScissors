let userScore=0
let computerScore=0
let round=0

function play(userChoice){
    let choices=["rock","paper","scissor"]
    let compChoice=choices[Math.floor(Math.random()*3)]

    

    let result=""
    if(round>5) return;
        
    if(compChoice==userChoice){
        result="Its Tie";
    }
    else if(
        (compChoice==="rock" && userChoice==="paper") ||
        (compChoice==="paper" && userChoice==="scissor") ||
        (compChoice==="scissor" && userChoice==="rock")
    ){
        result="User win this round";
        userScore++;
    }
    else{
        result="Computer win";
        computerScore++;
    }
    round++;

    document.getElementById("round").innerText=round;
    document.getElementById("userScore").innerText=userScore;
    document.getElementById("computerScore").innerText=computerScore;
    document.getElementById("result").innerText=result;


    if(round===5){
        let finalResult=""
        let color=""

        if(computerScore>userScore){
            finalResult="Final Winner: Computer!";
            color="red";
        }
        else if(computerScore<userScore){
            finalResult="Final Winner: You!"
            color="green";
        }
        else{
            finalResult="Draw"
            color="gray";
        }
        document.getElementById("finalResult").innerText=finalResult;
        document.getElementById("finalResult").style.color=color;
    }
    
}

function resetGame(){
    document.getElementById("userScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;
    document.getElementById("round").innerText = 0;
    document.getElementById("result").innerText="";
    document.getElementById("finalResult").innerText="";
}


