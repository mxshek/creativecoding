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
let daynight;

let bg = [0, 0, 0];

let images;
//can set number to test specific portions
let imageIndex = 0;
let auraArray;
let selection;

let capture;

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
    //don't use this lol
    loadImage('convo/Untitled_Artwork-18.png'),
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
    //do you know what it means to be human
    loadImage('convo/Untitled_Artwork-40.png'),
    //to be human is to put another's happiness over your own
    loadImage('convo/Untitled_Artwork-41.png'),
    //oh good i got it right
    loadImage('convo/Untitled_Artwork-42.png'),
    //i still wanted to make you happy
    loadImage('convo/Untitled_Artwork-43.png'),
    // thank you for being human
    loadImage('convo/Untitled_Artwork-44.png'),
    //say it to yourself
    loadImage('convo/Untitled_Artwork-45.png'),
    loadImage('convo/Untitled_Artwork-45.png')
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

  //got info on capture in this example https://p5js.org/examples/dom-video-capture.html


}

//ESTABLISH BUTTON is YES
//BUTTONTWO is NO

function draw() {
  background(bg)
 
  console.log(imageIndex)
 image (images[imageIndex], 0, 0)


 if (imageIndex === 0 && frameCount > 300) {
  for (let i = 0; i < 2; i++ ){
    imageIndex = i
  }
 }


 if (imageIndex === 1 && buttonValue === 1){
  for (let i = 1; i < 3; i++ ){
    imageIndex = i
  }
 }


//TRANSITION TO 3
if (imageIndex === 2) {
    setTimeout( function() {for(let i = 2; i < 4; i++){
      imageIndex = i
    }}, 2000)
   }


   if (imageIndex === 3) {
    setTimeout( function() {for(let i = 3; i < 5; i++){
      imageIndex = i
    }}, 2000)
   }


   if (imageIndex === 4 && buttonValue === 1) {
    for(let i = 4; i < 6; i++){
      imageIndex = i
    }
   }


   if (imageIndex === 5) {
    setTimeout( function() {for (let i = 5; i < 7; i++ ){
      imageIndex = i
   }}, 2000)}


   if (imageIndex === 6) {
    setTimeout( function() {for(let i = 6; i < 8; i++){
      imageIndex = i
    }}, 2000)
    fill(photoValue, 100, 100)
    noStroke()
    ellipse(1050, 450, 300)
   }


   if (imageIndex === 7 && buttonValue === 1) {
    for(let i = 7; i < 9; i++){
      imageIndex = i
    }
   }

   if (imageIndex === 7) {
    fill(photoValue, 100, 100)
    noStroke()
    ellipse(1050, 450, 300)
   }
   
   if (imageIndex === 8) {
    setTimeout( function() {for(let i = 8; i < 10; i++){
      imageIndex = i
    }}, 2000)
    fill(photoValue, 100, 100)
    noStroke()
    ellipse(1050, 450, 300)
   }


   if (imageIndex === 9) {
    setTimeout( function() {for(let i = 9; i < 11; i++){
      imageIndex = i
    }}, 2000)
    fill(photoValue, 100, 100)
    noStroke()
    ellipse(1050, 450, 300)
   }


   //we are at imageindex 11
   if (imageIndex === 10 && buttonValue === 1) {
    for(let i = 10; i < 12; i++){
      imageIndex = i
    }
   }


   if (imageIndex === 10) {
    fill(photoValue, 100, 100)
    noStroke()
    ellipse(1050, 450, 300)
   }


   //picking back up here
   if (imageIndex === 11) {
    setTimeout( function() {for(let i = 11; i < 13; i++){
      imageIndex = i
    }}, 2000)
   }
 
   if (imageIndex === 12) {
    setTimeout( function() {for(let i = 12; i < 14; i++){
      imageIndex = i
    }}, 2000)
   }


   if (imageIndex === 13) {
    setTimeout( function() {for(let i = 13; i < 15; i++){
      imageIndex = i
    }}, 2000)
   }


   if (imageIndex === 14 && buttonValue === 1) {
    // from here we have to randomly select an aura
    // must randomly route to 15, 18, 20, 22, 24, or 26
    for(let i = 0; i < 2; i++){
    let auraArray = [15, 18, 20, 22, 24, 26]
    let selection = random(auraArray)
    imageIndex = selection
   }}

   //IF RED
   if (imageIndex === 15) {
    setTimeout( function() {for(let i = 15; i < 17; i++){
      imageIndex = i
    }}, 2000)
   }

   if(imageIndex === 16 && buttonValue === 1){
    for(let i = 16; i < 29; i+= 11){
      //yes image index is 28
      imageIndex = i
    }
   }

   if(imageIndex === 16 && buttontwoValue === 1){
    for(let i = 16; i < 30; i+=13){
      //no image index is 29
      imageIndex = i
    }
   }


   //IF ORANGE
   if (imageIndex === 18) {
    setTimeout( function() {for(let i = 18; i < 20; i++){
      imageIndex = i
    }}, 2000)
   }

   if(imageIndex === 19 && buttonValue === 1){
    for(let i = 19; i < 29; i+=8){
      //yes image index is 28
      imageIndex = i
    }
   }

   if(imageIndex === 19 && buttontwoValue === 1){
    for(let i = 19; i < 30; i+=10){
      //no image index is 29
      imageIndex = i
    }
   }


   //IF YELLOW
   if (imageIndex === 20) {
    setTimeout( function() {for(let i = 20; i < 22; i++){
      imageIndex = i
    }}, 2000)
   }

   if(imageIndex === 21 && buttonValue === 1){
    for(let i = 21; i < 29; i+=6){
      //yes image index is 28
      imageIndex = i
    }
   }

   if(imageIndex === 21 && buttontwoValue === 1){
    for(let i = 21; i < 30; i+=8){
      //no image index is 29
      imageIndex = i
    }
   }


   //IF GREEN
   if (imageIndex === 22) {
    setTimeout( function() {for(let i = 22; i < 24; i++){
      imageIndex = i
    }}, 2000)
   }

   if(imageIndex === 23 && buttonValue === 1){
    for(let i = 23; i < 29; i+=4){
      imageIndex = i
    }
   }

   if(imageIndex === 23 && buttontwoValue === 1){
    for(let i = 23; i < 30; i+=6){
      //no image index is 29
      imageIndex = i
    }
   }

   //IF BLUE
   if (imageIndex === 24) {
    setTimeout( function() {for(let i = 24; i < 26; i++){
      imageIndex = i
    }}, 2000)
   }

   if(imageIndex === 25 && buttonValue === 1){
    for(let i = 25; i < 29; i+=2){
      //yes image index is 28
      imageIndex = i
    }
   }

   if(imageIndex === 25 && buttontwoValue === 1){
    for(let i = 25; i < 30; i+=4){
      //no image index is 29
      imageIndex = i
    }
   }


   //IF PURPLE
   if (imageIndex === 26) {
    setTimeout( function() {for(let i = 26; i < 28; i++){
      imageIndex = i
    }}, 2000)
   }

   if(imageIndex === 27 && buttonValue === 1){
    for(let i = 27; i < 29; i++){
      //yes image index is 28
      imageIndex = i
    }
   }

   if(imageIndex === 27 && buttontwoValue === 1){
    for(let i = 27; i < 30; i+=2){
      //no image index is 29
      imageIndex = i
    }}



    //go to ...
  // if(imageIndex === 28 && buttonValue === 1){
  //   for(let i = 28; i < 35; i+=6){
  //     imageIndex = i
  //   }
  // }

  // if(imageIndex === 29 && buttonValue === 1){
  //   for(let i = 29; i < 35; i+=5){
  //     imageIndex = i 
  //   }
  // }

  //let's try adding weather back in
  if (daynight === 0){
  if(imageIndex === 28 && buttonValue === 1){
    setTimeout( function(){
      for(let i = 28; i < 32; i+=3){
      imageIndex = i
    }}, 2000)}

      if(imageIndex === 29 && buttonValue === 1){
      setTimeout( function(){
      for(let i = 29; i < 32; i+=2){
        imageIndex = i
      }}, 2000)}
    } 

  else{
  if(imageIndex === 28 && buttonValue === 1){
  setTimeout( function(){
  for(let i = 28; i < 31; i+=2){
    imageIndex = i
  }}, 2000)}


    if(imageIndex === 29 && buttonValue === 1){
    setTimeout( function(){
    for(let i = 29; i < 31; i++){
      imageIndex = i
    }}, 2000)
      }}
    
       if(imageIndex === 30){
        fill (0, 0, 0)
        textAlign(CENTER)
        textSize (72)
        text(currentTemp, 700, 484)
      }
    
    
      if(imageIndex === 31){
        fill (0, 0, 0)
        textAlign(CENTER)
        textSize (72)
        text(currentTemp, 700, 484)
      }
    
 if(imageIndex === 30 && buttonValue === 1){
  setTimeout( function(){
  for(let i = 30; i < 33; i+=2){
    imageIndex = i
  }
}, 2000)}
 
  if(imageIndex === 31 && buttonValue === 1){
    setTimeout( function(){
    for(let i = 31; i < 33; i++){
      imageIndex = i
    }
   }, 2000)}


   if(imageIndex === 32 && buttonValue === 1){
    setTimeout( function(){
    for(let i = 32; i < 34; i++){
      imageIndex = i
    }
  }, 2000)}

   if(imageIndex === 32 && buttontwoValue === 1){
    setTimeout( function(){

    for(let i = 32; i < 34; i++){
      imageIndex = i
    }
  }, 2000)}


   if(imageIndex === 33 && buttonValue === 1){
    setTimeout( function(){

    for(let i = 33; i < 35; i++){
      imageIndex = i
    }
  }, 2000)}


  if(imageIndex === 34){
    setTimeout( function() {for(let i = 34; i < 36; i++){
      imageIndex = i
    }}, 2000)
   }

   if ( buttonValue === 1 && imageIndex === 35 ) {
    setTimeout( function(){
    for(let i = 35; i < 37; i++){
      imageIndex = i
    }}, 2000)
   }

    if (imageIndex === 36) {      
        if (buttonValue === 1){
        setTimeout( function() {
        for(let i = 36; i < 39; i+=2){
          imageIndex = i
      }}, 2000)}

      if (buttontwoValue === 1){
        setTimeout( function() {
        for(let i = 36; i < 38; i++){
          imageIndex = i}
      }, 2000)
    }}
  

  //  if(imageIndex === 36 && buttonValue === 1){
  //   for(let i = 36; i < 39; i+=2){
  //     imageIndex = i
  //   }
  //  }

  //  if(imageIndex === 36 && buttontwoValue === 1){
  //   for(let i = 36; i < 38; i++){
  //     imageIndex = i
  //   }
  //  }
   
   if(imageIndex === 37 && buttonValue === 1){
    setTimeout( function() {  
    for(let i = 37; i < 39; i++){
      imageIndex = i}}
    , 2000)}


   if(imageIndex === 38 && buttonValue === 1){
    setTimeout( function() {  
    for(let i = 38; i < 40; i++){
      imageIndex = i
    }  }, 2000)}

  
    if(imageIndex === 39 && buttonValue === 1){
      setTimeout( function() {  
      for(let i = 39; i < 41; i++){
        imageIndex = i
      }
    }
    , 2000)}

    if(imageIndex === 39 && buttontwoValue === 1){
      setTimeout( function() {  

      for(let i = 39; i < 41; i++){
        imageIndex = i
      }
    }    , 2000)}


    if(imageIndex === 40 && buttonValue === 1){
      setTimeout( function() {  
      for(let i = 40; i < 42; i++){
        imageIndex = i
      }
    }
    , 2000)}

    if(imageIndex === 40 && buttontwoValue === 1){
      setTimeout( function() {  

      for(let i = 40; i < 43; i+=2){
        imageIndex = i
      }
    }    , 2000)}

    if(imageIndex === 41 && buttonValue === 1){
      setTimeout( function() {  

      for(let i = 41; i < 44; i+=2){
        imageIndex = i
      }
    }
    , 2000)}



    if(imageIndex === 41 && buttontwoValue === 1){
      setTimeout( function() {  

      for(let i = 41; i < 45; i+=3){
        imageIndex = i
      }
    }
    , 2000)}

    if(imageIndex === 42 && buttonValue === 1){
      setTimeout( function() {  
      for(let i = 42; i < 44; i++){
        imageIndex = i
      }
    }
    , 2000)}


    if(imageIndex === 42 && buttontwoValue === 1){
      setTimeout( function() {  
      for(let i = 42; i < 45; i+=2){
        imageIndex = i + 1
      }
    }
    , 2000)}

   
    if(imageIndex === 43 && buttonValue === 1){
      setTimeout( function() {  

      for(let i = 43; i < 46; i+=2){
        imageIndex = i
      }
    }
    , 2000)}


    if(imageIndex === 43 && buttontwoValue === 1){
      setTimeout( function() {  
        for(let i = 43; i < 45; i+=2){
        imageIndex = i
      }
    }
    , 2000)}



    if(imageIndex === 44 && buttonValue === 1){
      setTimeout( function() {  
        capture = createCapture(VIDEO);
        capture.size(350, 350)
        image(capture, 1050, 350, 350, 350);} 
      , 2000)}


    if(imageIndex === 44 && buttontwoValue === 1){
      setTimeout( function() {  
        capture = createCapture(VIDEO);
        capture.size(350, 350)
        image(capture, 1050, 350, 350, 350);} 
      , 2000)}


 
  

    // while(imageIndex === 45){
    //   if(buttonValue === 1){
    //     setTimeout( function() {
    //     capture = createCapture(VIDEO);
    //     capture.size(350, 350)
    //     image(capture, 1050, 350, 350, 350);
    //   }, 2000)} 
    //   else if(buttontwoValue === 1) {   
    //     setTimeout( function() {     
    //     capture = createCapture(VIDEO);
    //     capture.size(350, 350)
    //     image(capture, 1050, 350, 350, 350);
    //   }, 2000)}
    // } 


     
      

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

    daynight = nowTemp.is_day
    console.log("is it day")
    console.log(daynight)
  }
