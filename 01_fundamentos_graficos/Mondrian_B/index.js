function setup() {
createCanvas(400, 400)
background(250,250,250)

}

function draw() {


// Figuras
fill(217,234,0)
noStroke()
rect(26, 270,65)

fill (51,78,65)
rect(26, 167, 36,100)

fill(233, 237,201)
rect(26, 115, 314, 48)

fill (217,234,0)
rect(280, 33, 60, 35)

fill (52,78,65)
rect(280, 166, 60, 220)

fill (233, 237,201)
rect(24.5, 340, 62, 15)

fill (255,78,65)
ellipse(356.5, 365.5, 15, 15)

//triangulo
fill (255,78,65)
triangle (24.5, 67, 86.5, 23, 86.5, 68)


//cuadrados para los vertices
fill (0)
rect(86.5, 350, 5, 5)
rect(86.5, 267, 5, 5)
rect(86.5, 23, 5, 5)
rect(214, 27, 5, 6)
rect(24.5, 67, 5, 5)
rect(372.5, 345, 5, 5)

// Lineas
// Verticales
strokeWeight(5)
stroke(0)
line(27, 70, 27, 400)
line(44, 70, 44, 112)
line(60, 166, 60, 270)
line(89, 26, 89, 66)
line(89, 270, 89, 352)
line(280, 166, 280, 384)
line(280, 30, 280, 70)
line(338, 0, 338, 384)
line(350, 30, 350, 70)
line(375, 348, 375, 400)

// horizontal
strokeWeight(6)
stroke(0)
line(218, 30, 400, 30)
line(28, 70, 400, 70)
line(28, 116, 400, 116)
line(28, 166, 400, 166)
line(0, 270, 88, 270)
line(0, 337, 278, 337)
line(281, 384, 372, 384)
line(340, 348, 374, 348)


}