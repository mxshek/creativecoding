// add the same uuid as your arduino
const serviceUuid = "5af87508-4bf9-4852-8faf-91252c8afef0";

let buttonCharacteristic;
let buttontwoCharacteristic;
let photoCharacteristic;

let buttonValue = 0;
let buttontwoValue = 0;
let photoValue = 0;

let myBLE;

function setup() {
  createCanvas(windowWidth, windowHeight - 100)
  //object will let us read to the bluetooth and write to it as well
  myBLE = new p5ble();

  //turn on bluetooth connection
  const connectButton = createButton("Connect");
  connectButton.mousePressed(connectToBLE);
}

//ESTABLISH BUTTON is YES
//BUTTONTWO is NO

function draw() {
  background(0)
  
    if (buttonValue > 0) {
    background(126)
  } else { 
    background(0)
  }


  // fill(255, 30, 45);
  // ellipse(width / 2, height / 2, 100)
  fill(photoValue, 30, 45);
  ellipse(width / 2, height / 2, 300)
}

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

function gotPhotoValue(error, value) {
  if (error) console.error(error)
  photoValue = value
// console.log("photocell value: ", value)
  myBLE.read(photoCharacteristic, gotPhotoValue)
}
