let bg = [0, 0, 0]
let currentTemp

conversation = []

//class for questions?
class Question{
  constructor(name, _x, _y, ) {
    this.name = name;
    this.x = _x;
    this.y = _y;
  }

  display() {
    text(this.name, this.x, this.y)
    textAlign(CENTER, CENTER)
    textSize(32)
    
  }

}

setTimeout(
  function() {
    console.log("does this work")
    bg = [100, 100, 100]
    //create new text class and then push array? 
  }, 2000
)

function setup() {
  createCanvas(600, 600)
  apiRequest()
}

function draw() {
background(bg)

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

  // console.log(frameCount)

  //draw intro sequence and add arduino in later
// if (frameCount < 1000) {
//   text('hello', 300, 200)
//   textAlign(CENTER)
// }

// if(frameCount > 1000 && frameCount < 2000){
//   text('will you answer my question', 300, 200)
//   textAlign(CENTER)
// }

  //input API request
  if (currentTemp != undefined) {
    for(let i = 0; i < currentTemp.length; i++){
      let h = map(currentTemp[i], 0, 100, height, 0)
      rect(i*width/currentTemp.length, h, 100, 25)
      fill(80, 200, 100)
    }
  }

  }

  async function apiRequest() {
    let request = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,weather_code&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1")
    console.log(request)
    
    let data = await request.json()
    console.log(data)

    let nowTemp = data.current
    console.log("the current values are:")
    console.log(nowTemp)

    currentTemp = nowTemp.temperature_2m
    console.log("the current temperature is ")
    console.log(currentTemp)

    

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
