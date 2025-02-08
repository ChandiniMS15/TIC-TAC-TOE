let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true; // playero playerx


const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetgame = () => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("the box was clicked");
       if(turnO){
        box.innerText= "O";
        turnO=false;
       }else{
       box.innerText="X";
       turnO=true;
       }
     box.disabled=true;

     checkWinner();
    });
});
  const disabledboxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
  };

  const enabledboxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
        box.innerText="";
    }
  };





const showwinner=(winner) =>{
    msg.innerHTML="CONGRAGULATIONS"
    msgcontainer.classList.remove("hide");
}


     const checkWinner = () => {
     for(let pattern of winpatterns){
        
          let posval1 = boxes[pattern[0]].innerText;
          let posval2 = boxes[pattern[1]].innerText;
          let posval3 = boxes[pattern[2]].innerText;


          if(posval1 != "" && posval2 !="" && posval3 !=""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner", posval1);

               showwinner(posval1);
            }
          }
     };
     }


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
     


