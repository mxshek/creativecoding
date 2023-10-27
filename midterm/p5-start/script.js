//code start screen using timeout, give instructions
//greet user, invite to center themselves, reveal instructions
//'insert text'

// setTimeout (
//   function() {
//     //fade from white to blue
  
//   }
// )

//create class for paintballs
// click to launch paint
let splatter = []
let tinySplatter = []
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
  //main paintball
  fill(this.color)
  noStroke()
  ellipse(this.x, this.y, this.r)
  

  //splatters
  //maybe I continue to translate origin?
  // push()
  // for (let i = 0; i < 5; i++) {

  // }
  // translate(this.x + this.r, this.y + this.r)
  // ellipse(0, 0, this.r/n)
  // pop()
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
    eraser.push(w)
    //try adding animation

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

function draw() {
//for testing purposes, set background color
background(255)


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
textSize(28);
textStyle(BOLD)
text(t, 190, 240);
textSize(18);
textStyle(NORMAL)
text(d, 190, 300);
text(e, 190, 325);
text(f, 190, 350)

}



