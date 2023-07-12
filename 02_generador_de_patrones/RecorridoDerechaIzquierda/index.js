// LET
let sorteo
let lado = 150
let x = 0
let y = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    frameRate(5)
    background(0)
    textFont("Helvetica");
}

function draw() {
    stroke(255, 255, 255)

    sorteo = random(0, 4) // Numero random

    if (sorteo < 1) {
        // Modulo 1 
        strokeWeight(2)
        stroke(255)

        // IzquierdaArriba
        fill(37, 40, 86)//Azul
        rect(x, y, lado / 2)

        // IzquierdaAbajo
        fill(239, 172, 191) //Rosa
        rect(x, lado / 2 + y, lado / 2)

        // DerechaAbajo
        fill(255, 249, 29) // Amarillo
        rect(lado / 2 + x, lado / 2 + y, lado / 2)

        // DerechaArriba
        rect(lado / 2 + x, y, lado / 2)
        fill(255, 65, 21) //Rojo
        arc(x + lado, y, lado, lado, 90, 180)
        fill(239, 172, 191) //Rosa
        arc(x + lado, y, lado / 2, lado / 2, 90, 180)

        line(x, y, lado + x, lado + y)
        line(x, 4 / 16 * lado + y, 12 / 16 * lado + x, lado + y)
        line(x, 8 / 16 * lado + y, 8 / 16 * lado + x, lado + y)
        line(x, 12 / 16 * lado + y, 4 / 16 * lado + x, lado + y)

    } else if (sorteo < 2) {
        // Modulo 2 / DerechaArriba
        stroke(255)
        strokeWeight(2)


        // DerechaAbajo
        fill(255, 249, 29) // Amarillo
        rect(lado / 2 + x, lado / 2 + y, lado / 2)

        fill(239, 172, 191) //Rosa
        arc(lado / 2 + x, lado / 2 + y, lado, lado, 0, 90)

        fill(37, 40, 80)//Azul
        rect(x, y, lado / 2, lado)
        strokeWeight(2)
        line(3 / 8 * lado + x, y, 3 / 8 * lado + x, lado + y)
        line(2 / 8 * lado + x, y, 2 / 8 * lado + x, lado + y)


        strokeWeight(2)
        fill(255, 65, 21) //Rojo
        rect(lado / 2 + x, y, lado / 2) // DerechaArriba

        line(lado + x, y, lado / 2 + x, lado / 2 + y)

        strokeWeight(0)
        fill(255)
        textSize(20);
        text(29, 0.1 / 8 * lado + x, 7.9 / 8 * lado + y);

    } else if (sorteo < 3) {

        strokeWeight(2)
        // IzquierdaArriba
        stroke(255, 255, 255)
        fill(239, 172, 191) //Rosa
        rect(x, y, lado / 2)
        fill(255, 249, 29) // Amarillo
        arc(lado / 2 + x, lado / 2 + y, lado, lado, 180, 270)

        // IzquierdaAbajo
        rect(x, lado / 2 + y, lado / 2)
        fill(37, 40, 80)//Azul
        arc(lado / 2 + x, lado * 3 / 4 + y, lado / 2, lado / 2, 90, 270)

        // DerechaAbajo
        fill(239, 172, 191) //Rosa
        rect(lado / 2 + x, lado / 2 + y, lado / 2)

        fill(37, 40, 80)//Azul
        arc(lado / 2 + x, lado / 2 + y, lado, lado, 360, 90)

        // DerechaArriba
        fill(37, 40, 80)//Azul
        rect(lado / 2 + x, y, lado / 2)
        fill(255, 65, 21) //Rojo
        arc(lado / 2 + x, 1 / 4 * lado + y, lado / 2, lado / 2, 270, 90)

    } else {
        rect(x, y, lado)
        strokeWeight(2)

        // IzquierdaArriba
        fill(37, 40, 80)//Azul
        rect(x, y, lado / 2)
        fill(255, 65, 21) //Rojo
        arc(lado / 2 + x, lado / 2 + y, lado, lado, 180, 270)
        line(lado / 2 + x, lado / 2 + y, x, y)

        // IzquierdaAbajo
        fill(255, 249, 29) // Amarillo
        rect(x, lado / 2 + y, lado / 2)

        stroke(255, 255, 255)
        line(1 / 8 * lado + x, lado + y, 1 / 8 * lado + x, lado / 2 + y)
        line(2 / 8 * lado + x, lado + y, 2 / 8 * lado + x, lado / 2 + y)
        line(3 / 8 * lado + x, lado + y, 3 / 8 * lado + x, lado / 2 + y)

        // DerechaAbajo
        fill(255, 65, 21) //Rojo
        rect(lado / 2 + x, lado / 2 + y, lado / 2, lado / 2)
        stroke(255, 255, 255)
        line(lado / 2 + x, lado + y, lado + x, lado / 2 + y)

        // DerechaArriba
        fill(37, 40, 80)//Azul 
        rect(lado / 2 + x, y, lado / 2)
        fill(255, 249, 29) // Amarillo
        arc(lado / 2 + x, lado / 2 + y, lado, lado, 270, 360)
        fill(239, 172, 191) //Rosa
        arc(lado / 2 + x, lado / 2 + y, lado / 2, lado / 2, 270, 360)
    }

    x = x + lado
    if (x >= width) {
        y = y + lado
        x = 0
    }

    if (y >= windowHeight) {
        clear()
        background(0)
        x = 0
        y = 0
    }
}
