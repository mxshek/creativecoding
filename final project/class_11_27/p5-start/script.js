

function setup() {
  createCanvas(600, 600)

}

function draw() {

  //yes box
  rect(CENTERMODE)
  rect(200, 400, 100, 50)
  fill(0, 255, 0)
  textSize(32)
  text('yes', 150, 350)

  //no box
  rect(CENTERMODE)
  rect(400, 400, 100, 50)
  fill(255, 0 , 255)
  textSize(32)
  text('no', 350, 350)


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

  function mouseClicked(){
    if(frameCount > 1000 && frameCount < 2000 && mouseX > 150 && mouseX < 250 && mouseY > 375 && mouseY < 425){
      //new class? should i make questions a class and then push them? 


  }
  
  }
