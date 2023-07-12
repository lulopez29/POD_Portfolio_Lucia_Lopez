let data
let maxNacimiento
let minNacimiento
let minPeso
let maxPeso
let minAltura
let maxAltura
let characters
let nombres = []
let pelis = []
let desplazamiento = 20
let MyFont


function preload() {
  data = loadJSON("data/starWars_by_altura.json")
  StarWars = loadImage("foto1.png")
  Fondo = loadImage("foto2.png")
  Yoda = loadImage("foto3.png")
  Yarael = loadImage("foto5.png")
  Jabba = loadImage("foto4.png")
  Referencias = loadImage("foto6.png")
  MyFont = ("DegularDemo-Regular.otf")
}

function setup() {
  createCanvas(windowWidth, 5000)
  background(0)
  textFont("MyFont")

  // Máximos y mínimos
  maxNacimiento = data.maxNacimiento
  minNacimiento = data.minNacimiento
  minPeso = data.minPeso
  maxPeso = data.maxPeso
  minAltura = data.minAltura
  maxAltura = data.maxAltura

  // Lista de objetos
  characters = data.characters

  // Log de datos - Bucle imprime objetos de la lista
  for (let i = 0; i < characters.length; i++) {
    console.log(characters[i].nombre)
    console.log(characters[i])
    nombres.push(characters[i].nombre)
    pelis.push(characters[i].peliculas)
  }

  console.log("maxNacimiento: " + maxNacimiento)
  console.log("minNacimiento: " + minNacimiento)
  console.log("minPeso: " + minPeso)
  console.log("maxPeso: " + maxPeso)
  console.log("minAltura: " + minAltura)
  console.log("maxAltura: " + maxAltura)
}

function draw() {
  
  // FOTOS
  image(Fondo, 0, 0, 3024, 1513.85)
  image(Fondo, 0, 1513.85, 3024, 1513.85)
  image(Fondo, 0, 3000, 3024, 1513.85)
  image(Fondo, 0, 4500, 3024, 1513.85);
  image(StarWars, windowWidth / 2 - 252, 30, 560*0.90, 248*0.90)
  image(Referencias, windowWidth / 2 - 340, 285, 2067*0.32, 234*0.32)

  // Años y altura
  textSize(14)
  textFont("Degular")
  noStroke()
  fill(255)
  text('ALTURA', 105, 465)
  text('AÑOS', 195, 395)


  //CUANTITATINAS
  for (let i = 0; i < characters.length; i++) {
    let posY = map(characters[i].altura, maxAltura, minAltura, 500, 5000 - 200);
    let posX = map(characters[i].anioNacimiento, minNacimiento, maxNacimiento, 175, windowWidth - 250);
    let diam = map(characters[i].peso, minPeso, maxPeso, 15, 50);

    rectMode(CENTER)
    ellipseMode(CENTER)
    strokeJoin(ROUND)
    strokeWeight(2)

    //CUALITATIVAS
    // ESPECIE: color
    noFill()
    if (characters[i].especie === "Human") {
      stroke(254, 223, 0) // Amarillo && Human
    } else if (characters[i].especie === "Mon Calamari") {
      stroke(107, 70, 193) // Violeta && Mon calamari
    } else if (characters[i].especie === "Hutt") {
      stroke(0); // Rojo NO SE VE XQ ES EL MAS PESADO Y USAMOS IMAGEN
    } else if (characters[i].especie === "Togruta") {
      stroke(0, 112, 255) // Azul && Togruta
    } else if (characters[i].especie === "Trandoshan") {
      stroke(139, 195, 74) // Verde && Trandoshan
    } else if (characters[i].especie === "Wookiee") {
      stroke(255, 152, 0) // Naranja && Wookiee
    } else if (characters[i].especie === "Yoda's species") {
      stroke(0); // Negro &&Yoda
    } else if (characters[i].especie === "Quermian") {
      stroke(0) // Negro && QUERMIAN
    } else {
      stroke(196, 211, 240); // Gris && Otros
    }

    // SEXO: forma
    if (characters[i].sexo === "male") {
      rect(posX, posY, diam) // Hombre como cuadrado
    } else if (characters[i].sexo === "female") {
      ellipse(posX, posY, diam) // Mujer como círculo
    } else if (characters[i].sexo === "none") {
      triangle(posX, posY - diam, posX - diam, posY + diam, posX + diam, posY + diam) // None como triángulo equilátero
    }

    // MAS ALTO
    image(Yarael, 137, 470, 70, 70)
    fill(255, 255, 255, 100)
    noStroke()
    textAlign(CENTER)
    textSize(12)
    text("MÁS ALTO ", 183, 572)
    textSize(10)
    text("Altura: " + 2.64 + " m", 182, 555)
    
    // MAS PESADO
    if (characters[i].especie === "Hutt") {
      image(Jabba, posX - 85, posY - 74, 200, 200)
      noStroke(0)
      fill(255, 255, 255)
      textSize(10)
      textAlign(CENTER)
      text("Peso: " + 1358 + " kg", posX +15, posY + 90)
      textSize(12)
      text("MÁS PESADO", posX + 15, posY + 110)
    }
  
    // MAS VIEJO
    if (characters[i].especie === "Yoda's species") {
      image(Yoda, posX - 40, posY - 35, 80, 80)
      noStroke()
      fill(255, 255, 255)
      textAlign(CENTER)
      textSize(10)
      text("Años: " + 896, posX , posY + 40)
      textSize(12)
      text("MÁS VIEJO", posX , posY  + 60)
    }

 // HOVER: nombres & peliculas
    if (mouseX > posX - diam/2 && mouseX < posX + diam/2  && mouseY > posY - diam/2 && mouseY < posY + diam/2) {
      
      //Nombres
      textAlign(LEFT, CENTER)
      textSize(20)
      fill(255)
      
      // Incrementar el desplazamiento del texto
      let xOffsite = 0;
      for (let j = 0; j < characters.length; j++) {
        if (characters[j].altura === characters[i].altura && characters[j].anioNacimiento === characters[i].anioNacimiento && j < i) {
          xOffsite += 175 
        }
      }
      text(nombres[i], posX + diam + 167 + xOffsite, posY - 7, 250, 150);

      //Peliculas
      textAlign(LEFT, CENTER)
      textSize(10)
      noStroke()
      fill(255)
      text(pelis[i], posX + diam + 123 + xOffsite, posY + 25, 160, 220)
    }
  }

  // ESCALA ALTURA
  let escala = 2.6
  for (let i = 0; i <= 26; i++) {
    let altura = map(escala, maxAltura, minAltura, 500, 5000 - 200)
    fill(255)
    text(escala.toFixed(1), 118, altura)
    escala -= 0.1
    stroke(255, 50)
    line(50 + 100, altura, width - 160, altura) // línea horizontal
  }

  // ESCALA AÑOS
  let ys = 440
  let escala2 = 0
  for (let i = 0; i <= 18; i++) {
    let anio = map(escala2, minNacimiento, maxNacimiento, 175, windowWidth - 210)
    fill(255)
    text(escala2, anio, ys)
    escala2 += 50
    stroke(255, 50)
    line(anio, 450, anio, height - 170)
  }
}