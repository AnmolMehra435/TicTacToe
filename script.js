let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg");
let winMsg = document.querySelector("#win-msg");
let newGa = document.querySelector("#winner");
turnX = true;
let count = 0;
draw();
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/* function draw() {
    let count = 0;
    for(box of boxes){
        box.onclick = () =>{
            count++;
            if(count === 9){
                console.log("draw");
                msgContainer.style.display = "block";
                reset.style.display = "none";
                winMsg.innerText = "No more boxes left match Draw."
            }
        }
    }
}
*/

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box clicked");
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
})

const checkWinner = () =>{
    for (let pattern of winPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log("player won");
                msgContainer.style.display = "block";
                reset.style.display = "none";
                if(val1 === "X"){
                   winMsg.innerText = "Congratulations, Player 1 wins."
                   disableBox();
                }else if(val1 === "O"){
                    winMsg.innerText = "Congratulations, Player 2 wins"
                    disableBox();
                }
            }
        }
        
    }
}

const disableBox = () =>{
    for (box of boxes){
        box.disabled = true;
    }
}


const newGame = () =>{
    for(box of boxes){
        count = 0;
        box.innerText = "";
        msgContainer.style.display = "none";
        reset.style.display = "block";
        box.disabled = false;
    }
}

newGa.addEventListener("click", newGame);
reset.addEventListener("click", newGame);

function draw(){
boxes.forEach((box) =>{
    box.onclick = () =>{
        count++;
        console.log(count);
        if(count === 9){
            console.log("draw");
            msgContainer.style.display = "block";
            reset.style.display = "none";
            winMsg.innerText = "No more boxes left match Draw."
        }else if(checkWinner()){
            count = 0;
        }      
    }
})
}



