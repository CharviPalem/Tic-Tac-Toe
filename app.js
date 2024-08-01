let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame= document.querySelector("#new-game");
let mssgCont = document.querySelector(".mssg-container");
let mssg = document.querySelector("#mssg");

let turnO = true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
    let turnO = true;
    count=0;
    enableBox();
    mssgCont.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML = "O";
            turnO=false;
            count++;
        }else{
            box.innerHTML = "X";
            turnO=true;
            count++;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableBox=()=>{
    for(box in boxes){
        boxes[box].disabled=true;
    }
}
const enableBox=()=>{
    for(box in boxes){
        boxes[box].disabled=false;
        boxes[box].innerText="";
    }
}


const showWinner=(winner)=>{
    mssg.innerText = `Winner is ${winner}`
    mssgCont.classList.remove("hide");
    disableBox();
}


const checkwinner=()=> {
    for(pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                showWinner(val1);
            }
            else if(count === 9){
                mssgCont.classList.remove("hide");
            }
        }

    }
}

newgame.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
