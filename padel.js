const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

//Variables coordenadas

let equipoAGol= 0;
let equipoBGol=0;



//Pelota
let pelotaX= 300
let pelotaY= 170;
let dx=2;
let dy=2;

//Pala 1
let palaUnoX= 20;
let palaUnoY= 140;
let palaMas=10
//Pala 2
let palaDosX= 560;
let palaDosY= 140;

//Ancho y largo de las palas 
let palaAncho= 20;
let palaLargo= 60;

//Dibujar pelota
const drawPelota= ()=> {

    ctx.beginPath()
    ctx.arc(pelotaX,pelotaY,10,0,Math.PI*2)
    ctx.fill()

}

//Mover Pelota

const movePelota=()=>{

    pelotaX+=dx
    pelotaY+=dy

    if(pelotaY+10>canvas.height || pelotaY-10 < 0 ){
        dy= -dy
    }

    if(pelotaX+10>canvas.width || pelotaX - 10 < 0 ){
        dx= -dx
    }


}

//funcion de gol

const SubeMarcador=()=>{

    if(pelotaX -10 < canvas.width){
        equipoBGol++;
        resetPelota()
        
    }
    if(pelotaX+10>canvas.width){
        equipoAGol++;
        resetPelota()
    }

}

const drawScore = () => {
    ctx.font = "20px Arial";       // tamaño y tipo de letra
    ctx.fillStyle = "white";       // color del texto
    ctx.fillText(equipoAGol, canvas.width / 4, 30);        // marcador jugador 1
    ctx.fillText(equipoBGol, (canvas.width / 4) * 3, 30);  // marcador jugador 2
};




    
const resetPelota = () => {
    pelotaX = canvas.width / 2;
    pelotaY = canvas.height / 2;
    dx = -dx; // cambia dirección para que empiece hacia el otro lado
    dy = 2 * (Math.random() > 0.5 ? 1 : -1); // aleatorio hacia arriba o abajo
};







//Dibujo de las pala 1
const drawPala1=()=>{
    ctx.fillStyle= "red"
    ctx.fillRect(palaUnoX, palaUnoY, palaAncho, palaLargo)

}



//Dibujo de las pala 2
const drawPala2=()=>{
    ctx.fillStyle= "red"
    ctx.fillRect(palaDosX,  palaDosY, palaAncho, palaLargo)

}
//colision con palas

const collisionPala1 = () => {
    if (
        pelotaX - 10 < palaUnoX + palaAncho &&   // el borde izq. de la pelota toca la pala
        pelotaX + 10 > palaUnoX &&               // el borde der. de la pelota está más allá de la pala
        pelotaY > palaUnoY &&                    // la pelota está por debajo del borde superior
        pelotaY < palaUnoY + palaLargo           // la pelota está por encima del borde inferior
    ) {
        dx = -dx; // rebota en X
    }
};

const collisionPalaDos =()=>{

      if (
        pelotaX + 10 < palaDosX+ palaAncho &&   // el borde izq. de la pelota toca la pala
        pelotaX - 10 > palaDosX &&               // el borde der. de la pelota está más allá de la pala
        pelotaY > palaDosY &&                    // la pelota está por debajo del borde superior
        pelotaY < palaDosY + palaLargo           // la pelota está por encima del borde inferior
    ) {
        dx = -dx; // rebota en X
    }

}


// funcion para manejar la pala 1

document.addEventListener("keydown", (e)=>{

    if(e.key==="ArrowUp"){

        palaUnoY-=palaMas

    }
    if(e.key==="ArrowDown"){
        palaUnoY+=palaMas
    }


})



//funcion para manejar la pala 2




// Juego por frame
const gameLoop=()=> {

    ctx.clearRect(0,0,canvas.width, canvas.height)

    movePelota()
    
    drawPelota()
    drawPala1()
    drawPala2()
    SubeMarcador()
    drawScore()
    collisionPala1();
    collisionPalaDos();




requestAnimationFrame(gameLoop)

}

requestAnimationFrame(gameLoop)
