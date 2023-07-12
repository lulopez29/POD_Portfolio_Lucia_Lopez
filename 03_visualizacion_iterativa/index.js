let escalar = 2;
let desp = 10;
let diam = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(200)
  textFont("Helvetica")
  textAlign(CENTER);
}

function draw() {
  tiempo = millis()
  background(0)

  // Modulo 1 / Circulos que bajan
  if (tiempo < 3000) {
    strokeWeight(3);
    stroke("yellow");
    noFill("yellow");
    for (let x = 0; x < width; x = x + 100) {
      for (let y = -0; y < 10; y = y + 100) {
        ellipse(x, y + desp, diam + desp * 0.1);
      }
    } {
      noStroke();
      texto("FISHER STYLE", width / 2, height * 7.5 / 16, 30, "yellow")
      texto("Tech House", width / 2, height / 2, 15, "white")
    }

    if (desp > height) {
      desp = 0;
      diam = random(20, 100);
    }
    desp = desp + 2;


    //Modulo 2 - Momento "Rebote" + Texto negrita
  } else if (tiempo < 3500) {
    strokeWeight (5)
    texto("FISHER STYLE", width / 2, height * 7.5 / 16, 30, "yellow")
    for (let y = 0; y < height; y += 10) {
      for (let x = 0; x < width; x += 10) {
        strokeWeight(2);
        fill("yellow")
        noFill();
        ellipse(x, y, diam + desp * 0.9);
      }
    }

    // Modulo 3 - Cuadrados
  } else if (tiempo < 6000) {
    stroke(255, 255, 0);
    for (let x = 0; x <= width ; x = x + 300) {
      for (let y = 0; y <= height; y = y + 300) {
        rect(x, y, diam);}
      if (desp > height) {
        desp = 0
        diam = random(20, 10)
      } desp = desp + 30
    }


    // Modulo 4 - Cuadriculas de puntos
  } else if (tiempo < 8000) {
    for (let y = 20; y <= height - 20; y += 10) {
      for (let x = 20; x <= width - 20; x += 10) {
        noFill();
        strokeWeight(2)
        stroke(random(255), random(255, 250), random(0));
        ellipse(x, y, 10);
      }
    }

    // Modulo 5 - Clase
  } else if (tiempo < 9500) {
  for (let x = 20; x <= 400; x = x + 40) {
    strokeWeight (20)
    stroke(random(255), random(255, 250), random(0));
    line(x, 0, x, height)
    col = x / 2
    console.log(col)
  }

    // Modulo 6
  } else if (tiempo < 12000) {
    stroke(255, 255, 0);
    for (let x = 0; x <= width ; x = x + 300) {
      for (let y = 0; y <= height; y = y + 300) {
        strokeWeight(6)
        stroke(random(255), random(255, 250), random(0))
        ellipse(x, y, desp + diam);}
      if (desp > height) {
        desp = 0
        diam = random(50, 10)
      } desp = desp + 1
    }
  
  }
  // Funciones
  function texto(escribir, textoX, textoY, tamanio, color) {
    textSize(tamanio)
    fill(color)
    text(escribir, textoX, textoY)
  }
}
