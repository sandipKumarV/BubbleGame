let timer = 60;
let score = 0;
let hit;
function makeBubble() {
    let bub = "";
    for (let i = 1; i <= 152; i++) {
        let rand = Math.floor(Math.random() * 10);
        bub += `<div class="bubble">${rand}</div>`;
    }
    let bubble = document.querySelector(".pbtm");
    bubble = bubble.innerHTML = bub;
}
function setTimer() {
    let settimer = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timer").innerText = timer;
        }else{
            document.querySelector("#pbtm").innerHTML = `<div class="finalScore"><h1>Game Over</h1><h1>Your Score = ${score}</h1></div>`
            clearInterval(settimer);
        }
    },1000)
}

function randHit() {
    let rand = Math.floor(Math.random()*10);
    hit = rand;
    document.querySelector("#hit").innerText = rand;
}

function incScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function decScore() {
    score -= 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",(details)=>{
    let clickedval = Number(details.target.innerText);
    if(clickedval===hit){
        incScore();
        randHit();
        makeBubble();
    }else{
        decScore();
        randHit();
        makeBubble();
    }
})

randHit();
setTimer();
makeBubble()