
//goal = compare two pokemon as if it were a battle
let espurrStats
let espurrHP
let espurrAttack
let espurrDefense
let espurrSpAttack
let espurrSpDefense

let chikoritaStats
let chikoritaHP
let chikoritaAttack
let chikoritaDefense
let chikoritaSpAttack
let chikoritaSpDefense


function setup() {
  createCanvas(600, 600)
  apiRequest()
  apiRequestTwo()

}

function draw() {
  background(200)

//espurr's side (left) colored shades of purple
  fill(227, 185, 255) 
  rect(0, 0, 300, 600)
  noStroke()

//chikorita's side (right) colored shades of green
  fill(144, 238, 144)  
  rect(300, 0, 300, 600)
  noStroke()

//key images
  //hp hearts
  fill(0)
  ellipse(19, 65, 20, 20)
  ellipse(35, 65, 20, 20)
  triangle(9, 67, 45, 67, 27, 95)
  ellipse(324, 65, 20, 20)
  ellipse(340, 65, 20, 20)
  triangle(314, 67, 350, 67, 332, 95)

  //label stats 
  textSize(16)
  text('Att', 25, 560)
  text('Att', 325, 560)
  text('Sp. Att', 71, 560)
  text('Sp. Att', 371, 560)
  text('Def', 172, 560)
  text('Def', 472, 560)
  text('Sp. Def', 218, 560)
  text('Sp. Def', 518, 560)

//espurr Attack
if(espurrAttack != undefined) {
  let h = map(espurrAttack, 0, 100, 0, 300)
    fill(60, 0, 100)
    rect(10, 540 - h, 50, h)
  }

//espurr SpAttack
if(espurrSpAttack != undefined) {
  let h = map(espurrSpAttack, 0, 100, 0, 300)
  fill(162, 25, 255)
  rect(70, 540 - h, 50, h)
  }

//espurr Defense
if(espurrDefense != undefined) {
  let h = map(espurrDefense, 0, 100, 0, 300)
    fill(60, 0, 100)
    rect(160, 540 - h, 50, h)
  }

  //espurr SpDefense
if(espurrSpDefense != undefined) {
  let h = map(espurrSpDefense, 0, 100, 0, 300)
    fill(162, 25, 255)
    rect(220, 540 - h, 50, h)
  }

//espurr HP bar on top
  if(espurrHP != undefined) {
  let h = map(espurrHP, 0, 100, 0, 300)
    fill(198, 115, 255)
    rect(60, 50, h, 50)
  }

  //chikorita Attack
if(chikoritaAttack != undefined) {
  let h = map(chikoritaAttack, 0, 100, 0, 300)
    fill(0, 100, 0)
    rect(310, 540 - h, 50, h)
  }

//chikorita SpAttack
if(chikoritaSpAttack != undefined) {
  let h = map(chikoritaSpAttack, 0, 100, 0, 300)
  fill(50, 205, 50)
  rect(370, 540 - h, 50, h)
  }

//chikorita Defense
if(chikoritaSpAttack != undefined) {
  let h = map(chikoritaSpAttack, 0, 100, 0, 300)
  fill(0, 100, 0)
  rect(460, 540 - h, 50, h)
  }

  //chikorita SpDefense
if(chikoritaSpDefense != undefined) {
  let h = map(chikoritaSpDefense, 0, 100, 0, 300)
    fill(50, 205, 50)
    rect(520, 540 - h, 50, h)
  }

//chikorita HP bar on top
  if(chikoritaHP != undefined) {
  let h = map(chikoritaHP, 0, 100, 0, 300)
  fill(85, 107, 47)    
  rect(360, 50, h, 50)
  }

//draw espurr
if(espurrImage != undefined) {
  image(espurrImage, 100, 200)
}

//draw chikorita
if(chikoritaImage != undefined) {
  image(chikoritaImage, 400, 200)
}

}



//Espurr's API Request
async function apiRequest() {
  let request = await fetch("https://pokeapi.co/api/v2/pokemon/espurr")
  console.log(request)

  let data = await request.json()
  console.log(data)

  let espurrStats = data.stats
  console.log(espurrStats)

  let espurrSprite = data.sprites
  console.log(espurrSprite)
  let espurrURL = espurrSprite.front_default
  console.log(espurrURL)
  espurrImage = loadImage(espurrURL)
  
  //espurr's HP
  espurrHP = espurrStats[0].base_stat
  console.log(espurrHP)

  //espurr's Attack
  espurrAttack = espurrStats[1].base_stat
  console.log(espurrAttack)

  //espurr's Defense
  espurrDefense = espurrStats[4].base_stat
  console.log(espurrDefense)

  // espurr's Special Attack
  espurrSpAttack = espurrStats[3].base_stat
  console.log(espurrSpAttack)

  //espurr's Special Defense
  espurrSpDefense = espurrStats[4].base_stat
  console.log(espurrSpDefense)

}

//Chikorita's API Request
async function apiRequestTwo() {
  let requestTwo = await fetch("https://pokeapi.co/api/v2/pokemon/chikorita")
  console.log(requestTwo)

  let dataTwo = await requestTwo.json()
  console.log(dataTwo)

  let chikoritaStats = dataTwo.stats
  console.log(chikoritaStats)

  let chikoritaSprite = dataTwo.sprites
  console.log(chikoritaSprite)
  let chikoritaURL = chikoritaSprite.front_default
  console.log(chikoritaURL)
  chikoritaImage = loadImage(chikoritaURL)

  //chikorita's HP
  chikoritaHP = chikoritaStats[0].base_stat
  console.log(chikoritaHP)

  //chikorita's Attack
  chikoritaAttack = chikoritaStats[1].base_stat
  console.log(chikoritaAttack)

  //chikorita's Defense
  chikoritaDefense = chikoritaStats[2].base_stat
  console.log(chikoritaDefense)

  //chikorita's Special Attack
  chikoritaSpAttack = chikoritaStats[3].base_stat
  console.log(chikoritaSpAttack)

  //chikorita's Special Defense
  chikoritaSpDefense = chikoritaStats[4].base_stat
  console.log(chikoritaSpDefense)
}




