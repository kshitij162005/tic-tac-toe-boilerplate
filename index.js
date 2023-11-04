// iteration 1 - declare all the variables
const boxElements = document.querySelectorAll(".box");

// winning combination 
let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

const Message = document.getElementById("message");
const PlayAgain = document.getElementById("button");
const Result = document.getElementById("result");
var click = 0;

let xattempts = [];
let oattempts = [];
let wonTheGame = 0;

//iteration 2 - onclick function 
// iteration 2 - onclick function
boxElements.forEach((el) => {
    el.addEventListener('click', function () {
        handleClick(event);
    });
});

function handleClick(e) {
    console.log(e)
    let i = e.target.id;
    let p = document.createElement("p");
    p.setAttribute('id', "text");
    boxElements[i-1].appendChild(p);

    // if my click is even or odd 
    if (click % 2 == 0) {
        //for the even number
        p.innerHTML = "X";
        p.style.color = "red";
        xattempts.push(parseInt(i - 1));
        result(winningCombination,xattempts,"X")
    } else {
        //for the odd number
        console.log("inside o")
        p.innerHTML = "O";
        p.style.color = "green";
        oattempts.push(parseInt(i - 1)); 
        result(winningCombination,oattempts,"O")
    }

    click++;
    //condition for tie 
    if (click == 9 && wonTheGame == 0) {
        Result.style.visibility = "visible";
        Message.innerHTML = "It's a tie"; 
    }
}

//iteration 3 - result function 
function result(winningCombination, attempts,player){
let count = 0;
let checker =[]

for(let i=0; i < winningCombination.length;i++){
    if(Array.isArray(winningCombination[i])){
        result(winningCombination[i],attempts,player) //recursive function 
    }
    else{
        if(attempts.includes(winningCombination[i])){
            checker.push(true)
            count++
        }

        else{
            checker.push(false)
        }
    }

}
if(checker.every(el => el == true) && count>2){
    Result.style.visibility = "visible";
    Message.innerHTML = "The Winner is "+player+" !";
    wonTheGame = 1
}


}



//restart function 

document.getElementById('button').addEventListener('click', function() {
    // Reload the page when the button is clicked
    location.reload();
})