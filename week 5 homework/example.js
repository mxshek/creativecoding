//EXAMPLE
// let maxTemps
// let minTemps

// function setup() {
//   createCanvas(600, 600)
//   apiRequest()
// }

// function draw() {
//   background(200)
 
//   if(maxTemps != undefined) {
//     for(let i = 0; i < maxTemps.length; i++){
//       let h = map(maxTemps[i], 0, 100, height, 0)
//       rect(i * width/maxTemps.length, h, 100, 25)
//       fill(80, 200, 100)
//     }
//   }

//   if(minTemps != undefined) {
//     for(let i = 0; i < minTemps.length; i++){
//       let h = map(minTemps[i], 0, 100, height, 0)
//       rect(i * width/minTemps.length, h, 100, 25)
//       fill(100, 59, 180)
//     }
//   }

// }

// async function apiRequest() {
//   let request = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.6501&longitude=-73.9496&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York")
//   console.log(request)

//   let data = await request.json()
//   console.log(data)

//   let dailyTemps = data.daily
//   console.log(dailyTemps)

//   maxTemps = dailyTemps.temperature_2m_max
//   console.log(maxTemps)

//   minTemps = dailyTemps.temperature_2m_min
//   console.log(minTemps)

// }