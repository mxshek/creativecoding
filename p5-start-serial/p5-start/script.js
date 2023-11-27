let serial;
let portName = "COM3"

let activeSensor = ""

let potValue = 0
let photoValue = 0


function setup() {
  createCanvas(600, 600)

  serial = new p5.SerialPort()

  //grabs whatever ports are available and scans them
  serial.onList(gotList)
  //gotList is function

  //make that event happen w below
  serial.list()

  //event listener
  serial.onOpen(gotOpen)
  //event 
  serial.openPort(portName)

  //now we have connected to ports and can listen to data over the wire
  //make another event callback
  serial.onData(gotData)

  //add p5 setup
  // face.push(new base());
}


function draw() {
  background(255)


  //learned in office hours
    // fill(photoValue, 30, 45)
    // ellipse(width/2, height/2, potValue)

let x = map(potValue, 0, 100, 0, 255)


//hair
fill(photoValue, 30, 45)
ellipse(200, 185, 350, 350);

//skin
fill(x, x/4, x/2)
ellipse(200, 225, 250, 300);

//eye
fill(255);  
ellipse(130, 200, 50, 50)
ellipse(270, 200, 50, 50);

//iris
fill(30, photoValue, 45)
ellipse(130, 210, 20, 20);
ellipse(270, 210, 20, 20)

// lips
fill(200, photoValue, 0)
ellipse(200, 320, 60, 20);
}

function gotList(ports) {
  for(let i = 0; i < ports.length; i++){
    console.log(ports[i])
  }
}

function gotOpen(){
  console.log("port is open!")
}

function gotData(){
  let currentString = serial.readLine()

  if(currentString.length <= 0){
    return;
  }

  console.log(currentString)

  //assign currentString to potentiometer value
  // potValue = currentString

  //now we have added photocellresistor
  //so commented out potValue above
  if(currentString === "potentiometer" || currentString === "photocell"){
    //add global variable

    activeSensor = currentString
  } else {
    if (activeSensor === "potentiometer"){
      potValue = currentString
    }
    if (activeSensor === "photocell"){
      photoValue = currentString
    }
  }

}
