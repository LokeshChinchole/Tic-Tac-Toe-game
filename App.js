let Boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#reset-btn");

let turnO = true;//player X , Player O
const winPatterns = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonals
    [0, 4, 8],
    [2, 4, 6]
];

const disableBoxes  = () => {
    for (box of Boxes) {
        box.disabled=true;
    }
}
const enableBoxes  =()=>{
    for (box of Boxes){
        box.disabled=false;
        Boxes.innerText= "";
    }
}
const resetGame =  () => {
    turnO = true;
    enableBoxes();
    for(box  of Boxes) {
        box.innerText= '';
        box.classList.remove("winner") ;
    }
}

Boxes.forEach(box => {
    box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO){
        //player O  
        box.innerText = "O";
        turnO = false;
    } else{
        //Player X
        box.innerText ="X";
        turnO = true;
    }
    box.disabled=true;

    checkWinner();
    });
});
const checkWinner = ()=>{
    for(let pattern of  winPatterns) {
        const [a, b, c] = pattern;
        const boxA = Boxes[a];
        const boxB = Boxes[b];
        const boxC = Boxes[c];
        
        if(boxA.innerText === boxB.innerText && boxA.innerText === boxC.innerText && boxA.innerText !== ""){
            boxA.classList.add("winner");
            boxB.classList.add("winner");
            boxC.classList.add("winner");
            alert(`Player ${boxA.innerText} is the winner!`);
            disableBoxes();
            return;
        };
    }
   
};

resetbtn.addEventListener("click",resetGame);

            
            







 

   
   

