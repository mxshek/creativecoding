
//create parent class of all shapes and draw an array of all shapes 
//got info about polymorphism from office hours
//process: once we get parent class, just do parent class display/interact so now it will be in order 
//for more info on inheritance/polymorphism, i watched The Coding Train 16.17 and 16.18
let painting = []
class Art{
  constructor(_x, _y, _w, _h){
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
    //to match the 'mismatched' line in the poem, let's make the fill random
    this.color = [random(0,255), random(0,255), random(0,255)]
  }

  display() {
    fill(this.color)
    noStroke()
    ellipse(this.x, this.y, this.w, this.h)
  }

  update() {
    this.h = this.h + .003
    this.y = this.y + .003
  }

}

//create class for paintballs
// click to launch paint
//NO LONGER NEED INDIVIDUAL ARRAYS BC ALL IN ONE CLASS 
// let splatter = []

let splatter = []
let randTheta
let a
let r 



class Paintball extends Art{
  constructor(_x, _y, _w, _h){
    super(_x, _y, _w, _h);
    //BELOW NOTATION WAS RETURNING ERROR. REFERRED TO JAVASCRIPT CLASSES #5 POLYMORPHISM FOR CORRECT NOTATION
    //https://www.youtube.com/watch?v=YkhLw5tYR6c
    // super.x = _x;
    // super.y = _y;
    // super.w = _w;
    // super.h = _h;
    // super.color = [random(0,255), random(0,255), random(0,255)]

//reintroducing array to create subsplatters (learned in office hours)
//this array will determine how many subsplatters we have
this.splatter = []
this.randTheta = random(0, 360);
this.a = random(0.25, 0.33) * this.h


for(let i = 0; i < 10; i++){
randTheta = random(0,360);
r = random(0.25, 0.33);
this.a = this.x + (cos(this.randTheta)*this.w)/2;
this.b = this.y + (sin(this.randTheta)*this.w)/2;
this.c = r * this.w;
this.d = r * this.h
}
}

display() {
  super.display()

  //test to debug since splatters aren't showing
  // rect(60, 60, 60, 60) does show up so I know nothing is wrong with my draw/display function
  // for(let i = 0; i < 10; i++){
  //   rect(this.x,this.y,60,60)}
  // nothing is wrong w for loop or this.x/y notation? rectangle is still drawn within for loop

  for(let i = 0; i < 10; i++){
    angleMode(DEGREES)
    ellipse(this.a, this.b, this.c, this.d)
  }

  
}
// }

update() {
  super.update()
  this.d = this.d + .02
}
}

//create class for wiper
//press space bar to add rectangle that is wiping
// let eraser = []
class Wiper extends Art{
  constructor(_x, _y, _w, _h){
    super(_x, _y, _w, _h);
    this.color = [255, 255, 255]
  }

//augmenting display
  display() {
    fill(this.color)
    noStroke()
    rect(this.x, this.y, this.w, this.h)
  }

//overriding update
update() {
  if(this.x < 300) {
    this.w = this.w + 10
  } else {this. w = this.w - 10}
}

}

 function keyPressed() {
  if(keyCode === 32 
    && frameCount > 1400
    ) {
    let w = new Wiper(random(0, 600), random(0,600), 20, 75);
    painting.push(w)
  }
}
function mousePressed() {
  if(frameCount > 1400) {
  let r = random(50, 250);
  let s = new Art(mouseX, mouseY, r, r);
  painting.push(s)
}
}

function setup() {
  createCanvas(600, 600)

//debugging - did not need this and it was breaking code
// for (let i = 0; i = painting.length; i++) {
//   if (mousePressed) { 
//   //debugging process, not working, let's add console.log
//   console.log("clicked")
//   let r = random (50, 250)
//   let o = new Paintball(mouseX, mouseY, r, r)
//   painting[i] = o
//   painting.push(o)
//   }
  // if(keyPressed(keyCode === 32)) {
  // console.log("space")
  // let 
  // painting[i].push = new Wiper(random(0, 600), random(0,600), 40, 75)
  // painting.push
  // }
  }
// }



let bg = [255, 255, 255]

function draw() {
//for testing purposes, set background color
background(bg)

//INTRODUCTION
//greet user, invite to center themselves, reveal instructions
//'insert text'
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

//for polymorphism help, referred to polymorphism in javascript youtube video
//link https://www.youtube.com/watch?v=8a5BkwuZRK0
  for (let p of painting) {
    p.update();
    p.display()
  }


//OLD METHOD - REMOVED NOW THAT WE HAVE PARENT CLASS
// create for loop for paintball class to click to launch paint 
// for(let i = 0; i < splatter.length; i++) {
//   splatter[i].display(); 
// }

// for(let i=0; i < eraser.length; i++) {
//   eraser[i].display();
// }

//try parent class notation
// for (let p of painting) {
//   p.update();
//   p.display()
// }

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



