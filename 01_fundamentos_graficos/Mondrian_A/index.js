function setup() {
    createCanvas(400, 400)

}

function draw() {

//  canvas
noStroke()
fill (240,240,240)
rect(0, 0, 400, 400)

// Cuadrados

strokeWeight (0)
fill(213, 51,43)
rect(0, 0, 184, 167)

fill (255,203,0)
rect(0, 263, 44,136 )

fill (72,124,183)
rect(184, 263, 127,117 )


// lineas
stroke(0)
strokeWeight(6)

//vertical
line(184, 0, 184, 400)
line(44, 267, 44, 400)
line(308, 267, 308, 400)

// horizontal
strokeWeight (8)
line(0, 263, 400, 263)
line(0, 167, 400, 167)
line(185, 384, 307, 384)


}