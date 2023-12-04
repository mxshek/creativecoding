

function setup() {
  createCanvas(600, 600)

}

function draw() {

  //yes box
  rectMode(CENTER)
  rect(200, 400, 100, 50)
  fill(0, 255, 0)
  textSize(32)
  text('yes', 150, 350)

  //no box
  rectMode(CENTER)
  rect(400, 400, 100, 50)
  fill(255, 0 , 255)
  textSize(32)
  text('no', 350, 350)

console.log(frameCount)

  //draw intro sequence and add arduino in later
if (frameCount < 1000) {
  text('hello', 300, 200)
  textAlign(CENTER)
}

if(frameCount > 1000 && frameCount < 2000){
  text('will you answer my question', 300, 200)
  textAlign(CENTER)
}
  }

  // How are you feeling?
  // What does it mean to be human?
  // Do you feel connected?
  // Does this weather make you happy? [Weather API?]
  // This is the weather in [pick from API JSON]
  // Are you in this place?
  // Do you want to be?
  // Are you tired of my questions? 
  // Are you tired of me? 
  // What does it mean to be human?
  // Am I human?	
  // [Create custom quote JSON]
  // I found this. Does it make you happy?
  // Have you enjoyed our conversation?
  // I wanted to make this conversation enjoyable. I like your perspective. 
  // Thank you for spending time with me. 
  // Have you said that to anyone lately?
  // Thank you for being human.
  // Have you said that to anyone lately?

  // function mouseClicked(){
  //   if(frameCount > 1000 && frameCount < 2000 && mouseX > 150 && mouseX < 250 && mouseY > 375 && mouseY < 425){
  //     //new class? should i make questions a class and then push them? 


  // }
  
  // }
