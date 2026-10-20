let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("Started");
        started = true;
        levelup();
    }
    
});
 function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250); 
 }


function levelup(){
    level++;
    h2.innerText = `level ${level}`;
    btnFlash();
    let randIdx = Math.floor(Math.random() + 3);
    let randColor = btns[randIdx]; 
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);
    btnFlash(randbtn);

function checkAns(){
    console.log(" current level :", level);
}
}
function btnPress() { 
    console.log(this);
    let btn = this;
    btnFlash(btn); 
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns();
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress); 
}



























