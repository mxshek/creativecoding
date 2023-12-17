// add the same uuid as your arduino
const serviceUuid = "5af87508-4bf9-4852-8faf-91252c8afef0";

let buttonCharacteristic;
let buttontwoCharacteristic;
let photoCharacteristic;

let buttonValue = 0;
let buttontwoValue = 0;
let photoValue = 0;

let myBLE;

let currentTemp;

let bg = [0, 0, 0];

let images;
let imageIndex = 0;
let i;

function preload(){
  images = [
    //hi
    loadImage('convo/Untitled_Artwork-1.png'),
    //hi next
    loadImage('convo/Untitled_Artwork-2.png'),
    //it's nice to meet you
    loadImage('convo/Untitled_Artwork-3.png'),
    // it's nice to meet you :)
    loadImage('convo/Untitled_Artwork-4.png'),
    // it's nice to meet you :) next
    loadImage('convo/Untitled_Artwork-5.png'),
    // how are you feeling?
    loadImage('convo/Untitled_Artwork-6.png'),
    // how are you feeling, hold hand over
    loadImage('convo/Untitled_Artwork-7.png'),
    // ^^ next
    loadImage('convo/Untitled_Artwork-8.png'),
    // i see i feel you aura, keep still
    loadImage('convo/Untitled_Artwork-9.png'),
    // ^^ thanks
    loadImage('convo/Untitled_Artwork-10.png'),
    // ^^ thanks, next
    loadImage('convo/Untitled_Artwork-11.png'),
    // done! amazing. your aura is loading
    loadImage('convo/Untitled_Artwork-12.png'),
    // ^^. 
    loadImage('convo/Untitled_Artwork-13.png'),
    // ^^ ..
    loadImage('convo/Untitled_Artwork-14.png'),
    // ^^ ...
    loadImage('convo/Untitled_Artwork-15.png'),
    // your aura is red
    loadImage('convo/Untitled_Artwork-16.png'),
    // red did i get that right
    loadImage('convo/Untitled_Artwork-17.png'),
    //REMOVED 18, NUMBER IN ARRAY IS NOW -2
    // orange aura
    loadImage('convo/Untitled_Artwork-19.png'),
    // orange aura right?
    loadImage('convo/Untitled_Artwork-20.png'),
    // yellow aura
    loadImage('convo/Untitled_Artwork-21.png'),
    // yellow aura right?
    loadImage('convo/Untitled_Artwork-22.png'),
    // green aura
    loadImage('convo/Untitled_Artwork-23.png'),
    // green aura right?
    loadImage('convo/Untitled_Artwork-24.png'),
    // blue aura
    loadImage('convo/Untitled_Artwork-25.png'),
    // blue aura right?
    loadImage('convo/Untitled_Artwork-26.png'),
    // purple aura
    loadImage('convo/Untitled_Artwork-27.png'),
    // purple aura right?
    loadImage('convo/Untitled_Artwork-28.png'),
    // im so glad! next
    loadImage('convo/Untitled_Artwork-29.png'),
    // oh im so sorry next
    loadImage('convo/Untitled_Artwork-30.png'),
    // this is the weather in nyc day
    loadImage('convo/Untitled_Artwork-31.png'),
    // this is the weather in nyc night
    loadImage('convo/Untitled_Artwork-32.png'),
    // is this affecting your energy?
    loadImage('convo/Untitled_Artwork-33.png'),
    // i see weather always affects my mood
    loadImage('convo/Untitled_Artwork-34.png'),
    // ... 
    loadImage('convo/Untitled_Artwork-35.png'),
    // ... next
    loadImage('convo/Untitled_Artwork-36.png'),
    // can i ask you a question
    loadImage('convo/Untitled_Artwork-37.png'),
    // ah i see would you reconsider?
    loadImage('convo/Untitled_Artwork-38.png'),
    // thanks it means a lot
    loadImage('convo/Untitled_Artwork-39.png'),
  ]
}

function setup() {
  createCanvas(1400, 700)
  //object will let us read to the bluetooth and write to it as well
  myBLE = new p5ble();

  //turn on bluetooth connection
  const connectButton = createButton("Connect");
  connectButton.mousePressed(connectToBLE);

  //weather api
  apiRequest()

  //changing to hsb
  colorMode(HSB)

}

//ESTABLISH BUTTON is YES
//BUTTONTWO is NO

function draw() {
  background(bg)

  //testing bluetooth
// if (buttonValue > 0) {
//   bg = [255, 255, 255]
// } else {
//   bg = [0, 0, 0]
// }

// if (buttontwoValue > 0) {
//   bg = [128, 255, 255]
// } else {
//   bg = [0, 0, 0]
// }



//what is being shown on screen
image (images[imageIndex], 0, 0)

if (imageIndex = [number]) {
fill(photoValue, 150, 198)
ellipse(1050, 450, 350)
}

}

//realized framecount will not work as it puts answering on a timeline. going to try image preloading. also think image preloading will look better design wise 
// took inspiration from https://www.youtube.com/watch?v=LKIywVLGXcw p5.js Image Sequence youtube video 
// and stack overflow tutorial https://stackoverflow.com/questions/66549075/in-p5-js-is-it-possible-to-load-a-gif-in-the-setup-or-preload-function-and-the 
function newQuestion () {
  imageIndex++;
  if(imageIndex > images.length - 1) {
    imageIndex = 0
  }
}

function specQuestion() {
  imageIndex = i
}

function mouseClicked() {
  newQuestion();
}

function greenPress () {
  if (buttonValue > 0) {
    //see if this works
    console.log("green button functional")

    newQuestion();
}}

function redPress () {
  if (buttontwoValue > 0){
    //see if this works
    console.log("red button functional")
  
  newQuestion();
  }}


function connectToBLE() {
  myBLE.connect(serviceUuid, gotCharacteristics)
}

function gotCharacteristics(error, characteristics) {
  if (error) console.error(error)
  // console.log("characteristics: ", characteristics)
  console.log("Connected to Service")
  
  console.log("Characteristics: ", characteristics)

  //check console of sketch and then double check arduino which uuid is which
  buttonCharacteristic = characteristics[0]
  myBLE.read(buttonCharacteristic, gotButtonValue)

  buttontwoCharacteristic = characteristics[1]
  myBLE.read(buttontwoCharacteristic, gotbuttontwoValue)

  photoCharacteristic = characteristics[2]
  myBLE.read(photoCharacteristic, gotPhotoValue)

}

function gotButtonValue(error, value) {
  if (error) console.error(error)
  buttonValue = value
// console.log("button value: ", value)
  myBLE.read(buttonCharacteristic, gotButtonValue)
}

function gotbuttontwoValue(error, value) {
  if (error) console.error(error)
  buttontwoValue = value
// console.log("button value: ", value)
  myBLE.read(buttontwoCharacteristic, gotbuttontwoValue)
}

//getting bluetooth error that photovalue has error
//after commenting out, bluetooth is functional. something wrong with photovalue function
//restarted it, bluetooth is now working DO NOT NEED SERIAL OPEN

function gotPhotoValue(error, value) {
  if (error) console.error(error)
  photoValue = value
// console.log("photocell value: ", value)
  myBLE.read(photoCharacteristic, gotPhotoValue)
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
