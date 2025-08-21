const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

let palaUnoX= 20;
let palaUnoY= 140;

let palaDosX= 560;
let palaDosY= 140;

let palaAncho= 20
let palaLargo= 60




const drawPala1=()=>{
    ctx.fillStyle= "red"
    ctx.fillRect(palaUnoX, palaUnoY, palaAncho, palaLargo)




}
const drawPala2=()=>{
    ctx.fillStyle= "red"
    ctx.fillRect(palaDosX,  palaDosY, palaAncho, palaLargo)




}

// funcion para manejar la pala 1

//funcion para manejar la pala 2

// crear pelota 


const gameLoop=()=> {

drawPala1()
drawPala2()

requestAnimationFrame(gameLoop)

}

requestAnimationFrame(gameLoop)
