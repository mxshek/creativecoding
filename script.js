//assignment: create a sketch that adds objects based on interaction that interact with each other

//everytime you click the mouse add a bubble in a random place
//create the classes

console.log ("Hello!")

class Bubble {
  constructor(_x, _y, _d, _speedX, _speedY){
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.speedX = _speedX;
    this.speedY = this.speedY;
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
  }

  display(){
    noFill()
    stroke(random(0,255), random(0,255), random (0,255))
  }
}

//make a bubble
let bubbleArr = []

function setup() {
  createCanvas(600, 600)

  for(let i = 0; i < 100; i++){
    bubbleArr.push(new Bubble(
        random(0, width),
        random(0, height),
        random(30, 45),
        random(-1, 1),
        random(-1, 1)
      ))}
    

    //   //add to our bubble array
    //   function mousePressed() {
    //     this.bubbleArr.push(temp)
    // }

}

// class PaintBucket {
//   constructor(_radius, _height, _detailX, _detailY, _speedX, _speedY){
//     this.radius = _radius,
//     this.height = _height,
//     this.detailX = _detailX, 
//     this.detailY = _detailY,
//     this.speedX = _speedX,
//     this.speedY = this.speedY,
// } 

// update() {
//   this.x += this.speedX
//   this.y += this.speedY
// }

// display() {
//   fill(128, 128, 128)
//   stroke(129, 133, 137)
//   strokeWeight(4)
// }

// // rotate() {
// //   rotateX(framecount * 0.01)
// //   rotateY(framecount * 0.01)
// // }
// }



// createBubble() {
  //make a new bubble
//   let temp = new Bubble(
//     random(0, width),
//     random(0, height),
//     random(30, 45),
//     random(-1, 1),
//     random(-1, 1)
//   )
//   //add to our bubble array
//   function mousePressed() {
//     this.bubbleArr.push(temp)
// }


//add in mousepressed function


  



function draw() {
  background(0)

  for (let i = 0; i < bubbleArr.length; i++) {
    bubbleArr[i].update
    bubbleArr[i].display
  }

}

//everytime you press a key add a paintbucket


// //make a paintbucket
// createPaintBucket() {
//   //make a new paint bucket
//   let temp = new PaintBucket(
//     20,
//     50,
//     random(30, 45),
//     random(-1, 1),
//     random(-1, 1)
//   )
// }


//everytime paintbucket touches bubble change the color


//everytime bubbles touch increase speed

//everytime anything touches change direction


