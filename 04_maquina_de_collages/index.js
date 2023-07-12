let magistretti = [
  'Magistretti_00.png',
  'Magistretti_01.png',
  'Magistretti_02.png',
  'Magistretti_03.png',
  'Magistretti_04.png',
  'Magistretti_05.png',
  'Magistretti_06.png',
  'Magistretti_07.png',
  'Magistretti_08.png',
  'Magistretti_09.png',
  'Magistretti_10.png',
  'Magistretti_11.png'
];

let imgLoaded = [];
let i = 0;
let prop;

function preload() {

  // Orden aleatorio
  magistretti = shuffle(magistretti);

  let path;
  for (let index = 0; index < magistretti.length; index++) {
    /* Cargar las fotos */
    path = 'imagenes/' + magistretti[index];
    imgLoaded[index] = loadImage(path);
  }
}

function setup() {
  createCanvas(500, 500);
  background(237, 232, 223);
  frameRate(3);
  textFont("Druk Wide");
  textAlign(LEFT);
  textSize(60);
  textLeading(55);
  console.log(imgLoaded[0]);

  prop = imgLoaded[0].height / imgLoaded[0].width;
}

function draw() {
  // Posición X aleatoria
  let x = random(0, width - imgLoaded[i].width);
  // Posición Y aleatoria
  let y = random(0, height - imgLoaded[i].height);


  image(imgLoaded[i], x, y);

  i = i + 1;
  if (i > 11) {
    i = 0;
    clear();
    background(237, 232, 223);
  }

  // texto
  fill(255);
  text('Vico Magistretti', 25, 185, 250, 250);
  console.log(i);
}
