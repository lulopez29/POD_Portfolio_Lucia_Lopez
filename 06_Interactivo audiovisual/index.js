let song;
let fft;
let amp;

let level = [];
let duration;
let currentTime;
let wave = [];
let amplitudes = [];


let offsetX;
let offsetY;
let estado = 'a';


let prop;
let i = 0;
let imgLoaded = [];
let frames = [
  'frame_1.png',
  'frame_2.png'
];

let texto = [
  '(◕‿◕)',
  'ｷﾀ━━ﾟ+.ヽ(≧▽≦)ﾉ.+ﾟ━━ ｯ ! ! !',
  'yo',
  'wtf',
  '(´͈  ᵕ `͈ )',
  /*'los chicos en la plaza',
  'los pajaritos cantan',
  'ringo',
  'ringo va'*/
]

let myFont;
let manual; 

function preload() {
  /* Brian Eno, Glitch (2011) */
  song = loadSound('audio/estupida_mentira.mp3');

  let path;
  for (let index = 0; index < frames.length; index++) {
    path = 'imagenes/' + frames[index];
    imgLoaded[index] = loadImage(path);
  }

  myFont = loadFont('tipografia/drukwidemedium.otf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  let bins = 128;

  fft = new p5.FFT(1, bins);
  amp = new p5.Amplitude();
  duration = song.duration();


  offsetX = width / bins;
  offsetY = height / bins;


}

function draw() {

  background(0);

  wave = fft.waveform();
  level = amp.getLevel();
  currentTime = song.currentTime();
  frameRate(60)

  if (song.isPlaying()) {
    if (estado == 's') {
      printRectFill();
    } else if (estado == 'a') {
      createBars();
    } else if (estado == 'd') {
      printCircFill();
    } else if (estado == 'q') {
      printCircFill();
      printRectCircGlitch();
    } else if (estado == 'f') {
      printCircRect();
    } else if (estado == 'w') {
      printRectCircGlitch();
    } else if (estado == 'e') {
      printRectanguloRotadoRandom();
    } else if (estado == 'l') {
      printNombre();
    } else if (estado == 'x') {
      printFlor();
    } else if (estado == 'r') {
      circuloTriangulo();
    } else if (estado == 'k') {
      primitiva3D();
    } else if (estado == 'o') {
      printNombreInv();
    } else if (estado == 'i') {
      createCircles();}
  } else {
    printGif();
  }
}

function keyPressed() {
  if (key == 'a'
    || key == 's'
    || key == 'd'
    || key == 'f'
    || key == 'l'
    || key == 'o'
    || key == 'q'
    || key == 'w'
    || key == 'e'
    || key == 'r'
    || key == 'x'
    || key == 'i'
    || key == 'k'
    || key == 'u') {
  estado = key;
  }

  if (key == 'p') {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }

}

function printCircRect() {
  for (let y = 10; y <= height - 10; y += 60) {
    for (let x = 10; x <= width - 10; x += 60) {
      noFill();
      stroke(random(255), random(255, 250), random(0));
      let diam = map(amp.getLevel(), 0, 1, 5, 500);
      rect(x, y, diam, diam);
      ellipse(x, y, diam)
    }
  }
}


function createBars() {
  let barTotal = 100; // número total de barras 
  let barHeight = 50; //altura de cada barra
  let barEspacio = 0.5; //espaciado
  let barWidth = width / barTotal + barEspacio; //ancho de cada barra en función del ancho total del canvas

  let tiempo = millis() % 2000; // para cambiar segun el beat del pum

  if (tiempo > 1000) {
    for (let i = 0; i < barTotal; i++) { 
      for (let j = 0; j < barHeight; j++) {
        
        let x = i * (barWidth + barEspacio); 
       
        let barAmplitude = map(amp.getLevel(), 0, 1, 0, barHeight * 2); // mapear la amplitud en relacion a la altura de la barra 
        let barAlto = map(wave[i], 0, 1, 0, 50); //  la altura de la onda
        let y = height - (j * (barHeight + barAlto)); // j es el índice de la altura de la barra

        stroke(random(255), random(200, 255), random(0));
        noFill();
        rect(x, y, barAmplitude, barAlto);
        let diametro = map(amp.getLevel(), 0, 1, 0, 50)
        stroke(random(255), random(255, 250), random(0));
        ellipse(x, y, diametro / 2);
      }
    }

  } else {
    for (let i = 0; i < barTotal; i++) {
      for (let j = 0; j < barHeight; j++) {
        let x = i * (barWidth + barEspacio);
        let barAmplitude = map(amp.getLevel(), 0, 1, 0, barHeight * 2);
        let barAlto = map(wave[i], 0, 1, 0, 1);
        let y = height - (j * (barHeight + barAlto));
        stroke(random(255), random(255, 250), random(0));
        noFill();
        rect(x, y, barAmplitude, barAlto);
        let diametro = map(amp.getLevel(), 0, 1, 0, 50)
        noFill();
        stroke (random(255), random(255, 250), random(0));
        ellipse(x, y, diametro);
      }
    }
  }
} // Cambios en  amplitud y el tiempo 


function printRectFill() {
    let radio = map(amp.getLevel(), 0, 1, 0, 50);
    let offCircle = radio;
  
  
  
    push();
    noFill();
    stroke(random(255), random(255, 250), random(0));
    strokeWeight(1);
  
  
    let tiempo = millis() % 240000; // 4 minutos milisegundos
  
    if (tiempo > 7200) {
      for (let i = 0; i < 50; i++) {
        let xRect = random(width);
        let yRect = random(height);
  
        stroke(random(255), random(220, 250), random(0))
        noFill()
        rect(xRect, yRect, offCircle * (radio * 2), offCircle * (radio * 2));
  
        fill(random(255), random(220, 250), random(255))
        rect(xRect, yRect, offCircle * radio, offCircle * radio);
  
        fill(0)
        ellipse(xRect, yRect, offCircle * (radio / 2), offCircle * (radio / 2));
  
        noFill()
        stroke(random(255), random(220, 250), random(255))
        ellipse(xRect, yRect, offCircle * (radio / 3), offCircle * (radio / 3));
      }
      let maxTamanio = 100;
      fill(random(255), random(200, 250), random(255))
      noStroke()
      let tamanio = map(amp.getLevel(), 0, 1, 0, maxTamanio);
      textSize(tamanio)
      text(texto, random(200, windowWidth - 100), random(200, windowHeight - 100), 100, 200)
    
    } else {
      for (let i = 0; i < radio; i++) {
        let xRect = width / 2 - offCircle;
        let yRect = height / 2 - offCircle;
        stroke(255)
        rect(xRect, yRect, offCircle * radio, offCircle * radio);
        stroke(random(255), random(220, 250), random(255))
        ellipse(xRect, yRect, offCircle * (radio / 2), offCircle * (radio / 2));
  
      }
      let maxTamanio = 50;
      fill(random(255), random(200, 250), random(255))
      noStroke()
      let tamanio = map(amp.getLevel(), 0, 1, 0, maxTamanio);
      textSize(tamanio)
      text(texto, random(200, windowWidth - 100), random(200, windowHeight - 100), 100, 200)
  
    }
    pop();
  }


function printCircFill() {
  let radio = map(amp.getLevel(), 0, 1, 0, 50); // mapear amplitud del sonido en relaci'on al radio
  let offCircle = radio;

  push();
  noFill();
  stroke(random(255), random(255, 250), random(0));
  strokeWeight(1);

  let tiempo = millis() % 240000; // 4 minutos milisegundos

  if (tiempo > 7200) {
    for (let i = 0; i < 50; i++) {
      let xRect = random(width);
      let yRect = random(height);
      ellipseMode(CENTER);
      rectMode(CENTER);
      
      stroke(255)
      noFill()
      rect(xRect, yRect, offCircle * (radio * 2), offCircle * (radio * 2));

      fill(random(255), random(220, 250), random(0))
      rect(xRect, yRect, offCircle * radio, offCircle * radio);

      fill(0)
      ellipse(xRect, yRect, offCircle * (radio ), offCircle * (radio ));

      fill(random(255), random(220, 250), random(0))
      ellipse(xRect, yRect, offCircle * (radio / 3), offCircle * (radio / 3));
    }
    let maxTamanio = 100;
    fill(random(255), random(200, 250), random(255))
    noStroke()
    let tamanio = map(amp.getLevel(), 0, 1, 0, maxTamanio);
    textSize(tamanio)
    text(texto, random(200, windowWidth - 100), random(200, windowHeight - 100), 100, 200)
  
  } else {
    for (let i = 0; i < radio; i++) {
      let xRect = width / 2 - offCircle;
      let yRect = height / 2 - offCircle;
      ellipseMode(CENTER);
      rectMode(CENTER);
      stroke(255)
      rect(xRect, yRect, offCircle * radio, offCircle * radio);
      stroke(random(255), random(220, 250), random(255))
      ellipse(xRect, yRect, offCircle * (radio / 2), offCircle * (radio / 2));

    }
    
    let maxTamanio = 50; // tamaño del texto max
    fill(random(255), random(200, 250), random(255))
    noStroke()
    let tamanio = map(amp.getLevel(), 0, 1, 0, maxTamanio);
    textSize(tamanio)
    text(texto, random(200, windowWidth - 100), random(200, windowHeight - 100), 100, 200)
  }
  pop();
} 



function printNombreInv() {
  stroke(255)

  let maxTitulo = 200
  let tamanioTitulo = map(amp.getLevel(), 0, 1, 0, maxTitulo)
  textSize(tamanioTitulo)
  textFont(myFont)
  text('UNA ESTÚPIDA MENTIRA', windowWidth / 2, windowHeight / 2)
  filter(INVERT);
  textAlign(CENTER);

  let maxTamanio = 50;
  fill(255)
  noStroke()
  let tamanio = map(amp.getLevel(), 0, 1, 0, maxTamanio);
  textSize(tamanio)
  text(texto, random(200, windowWidth - 100), random(200, windowHeight - 100), 100, 200)
}

function printNombre() {
  stroke(255)
  noFill()

  let maxTitulo = 200
  let tamanioTitulo = map(amp.getLevel(), 0, 1, 0, maxTitulo)
  textSize(tamanioTitulo)
  textFont(myFont)
  text('UNA ESTÚPIDA MENTIRA', windowWidth / 2, windowHeight / 2)

  let maxTamanio = 50;
  fill(255)
  noStroke()
  textAlign(CENTER);
  let tamanio = map(amp.getLevel(), 0, 1, 0, maxTamanio);
  textSize(tamanio)
  text(texto, random(200, windowWidth - 100), random(200, windowHeight - 100), 100, 200)
}


function  printRectCircGlitch() {
  noStroke()
  let tamanio = map(wave[i], 0, 1, 0, 50, 20) //mapear el valor de wave
  for (let x = 20; x < windowWidth; x = x + 20) { 
    for (let y = 20; y < windowHeight; y = y + 20) { // hasta la altura de la ventana
      fill(random(255), random(220, 250), random(0))
      rect(x, y, tamanio)
    }
  }
  for (let x = 20; x < windowWidth; x = x + 20) {
    for (let y = 20; y < windowHeight; y = y + 20) {
      fill(0)
      ellipse(x, y, tamanio / 1.5)
    }
  }
}


function printRectanguloRotadoRandom() {
  noStroke()

  let tiempo = millis() % 8003;

  if (tiempo > 4003) {
    for (let x = 20; x < windowWidth; x = x + 50) {
      for (let y = 20; y < windowHeight; y = y + 50) {
        fill(random(255), random(220, 250), random(0))
        x = random(20, windowWidth)
        y = random(20, windowHeight)
        let diametro = map(amp.getLevel(), 0, 1, 0, 50)
        noStroke
        ellipse(x, y, diametro)
        noFill()
        stroke(255)
        strokeWeight(0.5)
        rect (x, y, diametro * 2)
      }
    }

  } else {
    noFill()
    for (let x = 20; x < windowWidth; x = x + 50) {
      for (let y = 20; y < windowWidth; y = y + 50) {
        let diam = map(wave[i], 0, 1, 0, 50)
        fill(random(255), random(220, 250), random(0))
        rect(x, y, diam)
        fill(0)
        let diametro = map(amp.getLevel(), 0, 1, 0, 50)
        ellipse(x, y, diametro / 1.5)
      }
    }
  }
}


function circuloTriangulo() {
  noFill()
  for (let x = 20; x < windowWidth; x = x + 50) {
    for (let y = 20; y < windowWidth; y = y + 50) {
      let mov = map(wave[i], 0, 1, 0, 50)

      fill(random(255), random(220, 250), random(0))
      ellipse(x, y, mov)
      rect(x, y + 5, mov)
    }
  }
}

function printFlor() {

  let tiempo = millis() % 2000;
  if (tiempo > 1000) {
    noFill()
    for (let x = 20; x < windowWidth; x = x + 50) {
      for (let y = 20; y < windowWidth; y = y + 50) {
        let mov = map(wave[i], 0, 1, 0, 50)

        fill(random(255), random(220, 250), random(0), 80)
        ellipse(x, y, mov)

        noFill()
        stroke(random(255), random(220, 250), random(0), 70)
        ellipse(x, y, mov * 2)
        ellipse(x, y, mov * 1.5)
        ellipse(x, y, mov)
      }
    }

  } else {
    translate(windowWidth / 2, windowHeight / 2); //mueve las coordenadas al centro del canvas
    noStroke();
    for (let i = 100; i < windowWidth / 2; i++) {

      let mov = map(wave[i], 0, 1, 0, 100)
      fill(random(255), random(220, 250), random(0))
      ellipse(i, windowHeight / 3, mov);
      rotate(PI / 5); //rotar las coordenadas en un ángulo de 36 grados
      noFill()
      stroke(random(255), random(220, 250), random(0))
      ellipse(i, windowHeight / 3, mov);
      rotate(PI / 3); //rotar lascoordenadas en un ángulo de60
    }
  }
}

function primitiva3D() {
  noStroke()
  for (let x = 0; x < windowWidth; x = x + 20) { //0 hasta el ancho de la ventana 
    for (let y = 0; y < windowHeight; y = y + 20) {

      noFill()

      let diametro = map(amp.getLevel(), 0, 1, 0, 50)
      fill(random(255), random(220, 250), random(0))
      ellipse(x, y, diametro)

      fill(0)
      rect(x, y, diametro / 2)


      fill(random(255), random(220, 250), random(255))
      ellipse(x, y, diametro / 3)
    }
  }
}

function createCircles() {

  let maxDiam = 200;
  let tiempo = millis() % 240000;
  if (tiempo > 7200) {
    stroke(random(255), random(255, 250), random(0));
    for (let x = 0; x < width; x += 50) {
      for (let y = 0; y < height; y += 50) {
        let diam = map(amp.getLevel(), 0, 1, 0, maxDiam);
        let strokeWeightValor= map(level[i], 0, 1, 1, 15);

        if (wave[i] > 0) {
          stroke (0);
        } else {
          noFill();
        }

        strokeWeight(strokeWeightValor);
        ellipse(x, y, diam*20);
      }
    }
  } else {
    stroke(random(255), random(255, 250), random(0));
    for (let x = 0; x < width; x += 10) {
      for (let y = 0; y < height; y += 10) {
        let diam = map(amp.getLevel(), 0, 1, 0, maxDiam);
        let strokeWeightValor = map(level[i], 0, 1, 1, 10);

        if (wave[i] > 0) {
          fill(0);
        } else {
          noFill();
        }

        strokeWeight(strokeWeightValor);
        ellipse(x, y, diam/3);
      }
    }
  }
}

function printGif() {
  frameRate(2.5)
  image(imgLoaded[i], windowWidth / 3, windowHeight / 5, width * prop / 3, width * prop / 3)
  i = i + 1

  filter(GRAY);


  if (i > imgLoaded.length - 1) {
    i = 0
      filter(INVERT);
  }
}