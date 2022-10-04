
let canvasDom;
let context;
let cercle = {
    color: "ff0000",
    radius: 20,
    x: 80,
    y: 80,
    colorBorder: "black",
    borderWidth : "1"
}

let cercle2 = {
    color: "142daa",
    radius: 35,
    x: 80,
    y: 80,
    colorBorder: "black",
    borderWidth : "5"
}
let cercle3 = {
    color: "000000",
    radius: 20,
    x: 80,
    y: 80,
    colorBorder: "black",
    borderWidth : "2"
}


document.addEventListener('DOMContentLoaded', ()=>{
    canvasDom = document.querySelector('#canvas');
    context = canvasDom.getContext('2d');

    circle();
    move();
});



function circle(){

    context.clearRect(0, 0, canvasDom.width, canvasDom.height);
    context.fillStyle = "#DDDDDD";
    context.fillRect(0, 0, canvasDom.width, canvasDom.height);
    context.strokeStyle = "black";
    context.strokeRect(0, 0, canvasDom.width, canvasDom.height);

    context.beginPath();
    context.lineWidth = cercle.borderWidth;
    context.arc(cercle.x, cercle.y, cercle.radius, 0, 2* Math.PI);
    context.strokeStyle = cercle.colorBorder;
    context.stroke();

    function fillCircle(){
        context.beginPath();
        context.fillStyle = "#"+cercle.color;
        context.arc(cercle.x, cercle.y, cercle.radius, 0, 2* Math.PI);
        context.fill();
    }
    fillCircle();

}

function move(){
    document.addEventListener('keydown', (event) =>{
        console.log(`key=${event.key},code=${event.code}`);
        switch (event.key) {
            /******************** AXE X ********************/


            //La valeur de e.key retourne ArrowRight
            case 'ArrowRight': 
            
            if (cercle.x>=0 && cercle.x+cercle.radius<canvasDom.width){
                cercle.x+=1;
            }
            if (cercle.x+cercle.radius>=canvasDom.width){
                console.log("LIMITE ATTEINT");
            }
            break;

            //La valeur de e.key retourne ArrowLeft
            case 'ArrowLeft': 
            
            if (cercle.x+cercle.radius<=canvasDom.width && cercle.x-cercle.radius>0){
                cercle.x-=1;
            }
            if(cercle.x-cercle.radius<=0){
                console.log("LIMITE ATTEINT");
            }
            break;

            /******************** AXE Y ********************/

            //La valeur de e.key retourne ArrowDown
            case 'ArrowDown': 
            
            if (cercle.y>=0 && cercle.y+cercle.radius<canvasDom.height){
                cercle.y+=1;
                
            }
            if (cercle.y+cercle.radius >= canvasDom.height){
                console.log("LIMITE ATTEINT");                
            }
            break;

            //La valeur de e.key retourne ArrowUp
            case 'ArrowUp': 
            
            if (cercle.y+cercle.radius <= canvasDom.height && cercle.y-cercle.radius>0){
                cercle.y-=1;
            }
            if(cercle.y-cercle.radius<=0){
                console.log("LIMITE ATTEINT");
            }
            break;
    } 
    circle();
    })}



