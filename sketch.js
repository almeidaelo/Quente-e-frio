let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
    background("pink");
  x = x + random (-2,2);
  y = y + random (-2, 2);   
    let distanciaX;//cateto
    let distanciaY;//cateto
    let distancia;//hipotenusa
    distanciaX = mouseX - x;//diferença  de distancia X
    distanciaY = mouseY - y;//diferença de distancia Y
   // distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);//teorema de Pitágoras
  
    circle(mouseX, mouseY, distancia);
  
 distancia= dist(mouseX, mouseY,x,y)
  
   // console.log(distanciaX, distanciaY);//revela o valor da hipotenusa
    
    if(distancia < 3 ) {
        text("Encontrei!", 200, 200);
        noLoop();
    }

if(distancia>150){
  fill ("blue")
  circle(mouseX, mouseY, distancia);
  } else if (distancia>100){
    fill("rgb(170,15,225)")
    circle(mouseX,mouseY, distancia)
    }else if (distancia>7){
      fill("rgb(225,111,15)");
      circle(mouseX,mouseY,distancia)
      }else if(distancia>15){
    
      fill("rgb(225,15,15)");
circle(mouseX,mouseY,distancia)
}

    }