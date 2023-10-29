
//code start screen using timeout, give instructions
//greet user, invite to center themselves, reveal instructions
//'insert text'

//create class for paintballs
// click to launch paint
let splatter = []
class Paintball{
  constructor(_x, _y, _r){
    this.x = _x
    this.y = _y
    this.r = _r
    //to match the 'mismatched' line in the poem, let's make the fill random
    this.color = [random(0,255), random(0,255), random(0,255)]
}

// DID NOT USE BECAUSE CREATED FLASHING COLORS
//  color() {
//   let randomColor = chroma.random();
//   fill(randomColor.rgb())
//   noStroke()}

display() {
  fill(this.color)
  noStroke()
  ellipse(this.x, this.y, this.r)
}
}

//create class for wiper
//press space bar to add rectangle that is wiping
let eraser = []
class Wiper{
  constructor(_x, _y, _w, _h){
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
  }

  display() {
    fill(255)
    noStroke()
    rect(this.x, this.y, this.w, this.h)
  }

}

function keyPressed() {
  if(keyCode === 32) {
    let w = new Wiper(random(0, 600), random(0,600), 20, 50);
    eraser.push(w   )
  }
}

function mousePressed() {
  let r = random(50, 250);
  let s = new Paintball(mouseX, mouseY, r);
  splatter.push(s)
}

function setup() {
  createCanvas(600, 600)

}

let bg = [255, 255, 255]
let hue = chroma.hsl(230, 1 , 0.5)


//FOR WHEN MIYA PICKS UP AGAIN, HSL IS NOT IN CORRECT NOTATION USE REVIEW TIME TO SHIFT THIS
function draw() {
//for testing purposes, set background color
background(bg)

//INTRODUCTION
//note for miya - 300 frames is about 10 sec
if(frameCount > 100 && frameCount < 300) {
  bg = [115, 215, 255]  
  fill(255)
  textSize(36)
  textAlign(CENTER)
  text('welcome', 300, 300)
}

if(frameCount > 300 && frameCount < 500) {
  bg = [145, 224, 255]
  fill(255)
  textSize(36)
  textAlign(CENTER)
  text('take a breath', 300, 300)
}

if(frameCount > 500 && frameCount < 700) {
  bg = [165, 229, 255]
  fill(255)
  textSize(36)
  textAlign(CENTER)
  text('exhale', 300, 300)
}

if(frameCount > 700 && frameCount < 1000) {
  bg = [185, 235, 255]
  fill(255)
  textSize(36)
  textAlign(CENTER)
  text('you are exactly', 300, 275)
  text('as you are meant to be', 300, 325)

}

if(frameCount > 1000 && frameCount < 1300) {
  bg = [225, 246, 255]
  fill(200)
  textSize(36)
  textAlign(CENTER)
  text('CLICK to create', 300, 275)
  text('press SPACE to erase', 300, 325)
}

if(frameCount > 1400) {
  bg = [255, 255, 255]

//create for loop for paintball class to click to launch paint 
for(let i = 0; i < splatter.length; i++) {
  splatter[i].display(); 
}

for(let i=0; i < eraser.length; i++) {
  eraser[i].display();
}

// write poem in white
let t = 'Classical Master'
let d = 'Globs of mismatched paint.'
let e = 'Brushstrokes in drunken stupor.' 
let f = 'Resonating view.'
fill(255)
textAlign(LEFT)
textSize(28);
textStyle(BOLD)
text(t, 190, 240);
textSize(18);
textStyle(NORMAL)
text(d, 190, 300);
text(e, 190, 325);
text(f, 190, 350)
}






}



