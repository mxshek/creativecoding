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

function setup() {
  createCanvas(windowWidth, windowHeight - 100)
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
  
  //HOW ARE YOU FEELING
  if(frameCount > 100 && frameCount < 300) { 
    bg = [0, 0, 100]
    fill(255)
    textSize(36)
    textAlign(CENTER)
    text('How are you feeling? Hold your hand over the sensor.', width/2, width/2)}

    if(frameCount > 300 && frameCount < 550) { 
        bg = [0, 0, 0]
        fill(225)
        textSize(32)
        textAlign(CENTER)
        text('I see. I feel your aura. Please keep still', width/2, 150)
        //make a more dynamic color using chroma library
        fill(photoValue, 30, 45);
        ellipse(width / 2, height / 2, 300)}

        if(frameCount > 550 && frameCount < 700) { 
            bg = [0, 0, 0]
            fill(255)
            textSize(36)
            textAlign(CENTER)
            text('Done! Amazing.', width/2, width/2)}

        //pull from custom aura api??
        if(frameCount > 700 && frameCount < 900) { 
        bg = [0, 0, 0]
        fill(255)
        textSize(36)
        textAlign(CENTER)
        text('Your energy is []', width/2, width/2)}

        if(frameCount > 700 && frameCount < 900) { 
            bg = [0, 0, 0]
            fill(255)
            textSize(36)
            textAlign(CENTER)
            text('Did I get that right?', width/2, width/2)

            // YES OPTION
            if (buttonValue > 0) {
                bg = [10, 10, 10]
                textSize(36)
                textAlign(CENTER)
                text('I am so glad!', 300, 300)

                } else { 
                    //show green button
                    rectMode(CENTER)
                    rect(200, 400, 100, 50)
                    textSize(32)
                    text('yes', 150, 350)
                    fill(0, 255, 0)
                
                }

                //NO OPTION
                if (buttontwoValue > 0) {
                    bg = [230, 230, 230]
                    textSize(36)
                    textAlign(CENTER)
                    text('I am so sorry!', 300, 300)

                } else { 
                //show red button
                rectMode(CENTER)
                rect(400, 400, 100, 50)
                textSize(32)
                text('no', 350, 350)
                fill(255, 0 , 0)
    }
  }

  //THIS IS THE WEATHER IN NYC
  if(frameCount > 900 && frameCount < 1100) {
    bg = [0, 0, 0]
    fill(255)
    textSize(36)
    textAlign(CENTER)
    text('This is the weather right now in New York City.', 300, 300)
    if (currentTemp != undefined) {
        for(let i = 0; i < currentTemp.length; i++){
            //display weather
            text(currentTemp, 300, 450)
        }
      }
  }
  
  if(frameCount > 1100 && frameCount < 1300) {
    bg = [0, 0, 0]
            fill(255)
            textSize(36)
            textAlign(CENTER)
            text('Is this affecting your energy?', width/2, width/2)

            // YES OPTION
            if (buttonValue > 0) {
                bg = [10, 10, 10]
                textSize(36)
                textAlign(CENTER)
                text('I see! Weather always affects my mood.', 300, 300)

                } else { 
                    //show green button
                    rectMode(CENTER)
                    rect(200, 400, 100, 50)
                    textSize(32)
                    text('yes', 150, 350)
                    fill(0, 255, 0)
                }

                //NO OPTION
                if (buttontwoValue > 0) {
                    bg = [230, 230, 230]
                    textSize(36)
                    textAlign(CENTER)
                    text('I see! Weather always affects my mood.', 300, 300)

                } else { 
                //show red button
                rectMode(CENTER)
                rect(400, 400, 100, 50)
                textSize(32)
                text('no', 350, 350)
                fill(255, 0 , 0)
                }
  
  //can i ask you a question
  if(frameCount > 1300 && frameCount < 1500) {
    bg = [0, 0, 0]
    fill(255)
    textSize(36)
    textAlign(CENTER)
    text('...', 300, 300)
  }
  
  
  if(frameCount > 1500 && frameCount < 1700) {
    bg = [0, 0, 0]
    fill(255)
    textSize(36)
    textAlign(CENTER)
    text('Can I ask you a question?', 300, 300)

        // YES OPTION
        if (buttonValue > 0) {
            bg = [10, 10, 10]
            textSize(36)
            textAlign(CENTER)
            text('Thank you. It means a lot.', 300, 300)

            } else { 
                //show green button
                rectMode(CENTER)
                rect(200, 400, 100, 50)
                textSize(32)
                text('yes', 150, 350)
                fill(0, 255, 0)
            
            }

            //NO OPTION
            if (buttontwoValue > 0) {
                bg = [230, 230, 230]
                textSize(36)
                textAlign(CENTER)
                text('Ah, I see... Would you reconsider?', 300, 300)

            } else { 
            //show red button
            rectMode(CENTER)
            rect(400, 400, 100, 50)
            textSize(32)
            text('no', 350, 350)
            fill(255, 0 , 0)
}
  }
  
  
  if(frameCount > 1300) {
  }  

    if (buttonValue > 0) {
    background(126)
  } else { 
    background(0)
  }


  // fill(255, 30, 45);
  // ellipse(width / 2, height / 2, 100)

}
// }

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
  }}
