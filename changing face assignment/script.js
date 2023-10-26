//assignment: create a sketch that makes faces which have multiple dimensions of variability

let face = []

//make base shape class
class base {
    constructor(_x, _y, _w, _h){
      this.x = _x;
      this.y = _y;
      this.w = _w;
      this.h = _h
    }

//make features
//hair, skin, eyes (plus irises), mouth
    hair() {
        ellipse(200, 185, 350, 350);
        fill(random(0,255), random(0,255), random(0,255));
    }

    skin() {
        ellipse(200, 225, 250, 300);
        fill(random(37, 85), random(37, 85), random (22, 70))
    }

    eye() {
        ellipse(130, 200, 50, 50)
        ellipse(270, 200, 50, 50);
        fill(255);
    }

    iris() {
        ellipse(130, 210, 20, 20);
         ellipse(270, 210, 20, 20)
           fill(random(0,255), random(0,255), random(0,255));
    }

    lips() {
        ellipse(200, 320, 60, 20);
        fill(random(200,255), random(0,64), random(45,100))
    }
}


function setup() {
    createCanvas (400, 400);
    face.push(new base());
    }

//make sure each feature changes with mouse click
function mousePressed() {
    for (let i = 0; i < face.length; i++) {
        face[i].hair();
        face[i].skin();
        face[i].eye();
        face[i].iris();
        face[i].lips();
}

function draw() {
    background(127)
    }
    face.push(new base())
}





//CODE I DIDN'T END UP USING

// hair () = new base();
// let skin = new base(200, 225, 250, 300);
// let righteye = new base(130, 200, 50, 50);        
// let lefteye = new base(270, 200, 50, 50);
// let rightiris = new base(130, 210, 20, 20);
// let leftiris = new base(270, 210, 20, 20);
// let lips = new base(200, 320, 60, 20);

    //since so many things will be random color, let's make a make it random function
    // different eye colors - let it be random because color contacts
    //different hair colors - let it be random because hair dye
    // paintItRandom() {
    //     fill(random(0,255), random(0,255), random(0,255))
    // }

    //now create function for specific colors
    // paintLips() {
    //     //make lip color options 
    //         //different lip colors - let it be pink/red
    //         // r range - 200 to 255
    //         // g range - 0 to 64
    //         // b range  - 45 to 100
    //     fill(random(200,255), random(0,64), random(45,100))
    // }

    // paintSkin() {
    //         //make skin color options
    //         //different rgb values for skin tones
    //         // r range - 37 to 85
    //         // g range - 37 to 85
    //         // b range  - 22 to 70
    //     fill(random(37, 85), random(37, 85), random (22, 70))
    // }

    // paintEyeBase() {
    //     //the whites of the eye
    //     fill(0)
    // }



// make face option list
// let hair = new base(200, 185, 350, 350);
// let skin = new base(200, 225, 250, 300);
// let righteye = new base(130, 200, 50, 50);        
// let lefteye = new base(270, 200, 50, 50);
// let rightiris = new base(130, 210, 20, 20);
// let leftiris = new base(270, 210, 20, 20);
// let lips = new base(200, 320, 60, 20);
// let thisface = [hair, skin, righteye, lefteye, rightiris, leftiris, lips]


//make the face
        // //make hair
        // let hair = new base(200, 185, 350, 350);
        // thisface.push(hair);
        // // hair.paintItRandom();
    
        // //make face
        // let skin = new base(200, 225, 250, 300);
        // thisface.push(skin);
        // // skin.paintSkin();
    
        // //make eyes
        // let righteye = new base(130, 200, 50, 50);
        // thisface.push(righteye);
        // let lefteye = new base(270, 200, 50, 50);
        // thisface.push(lefteye);
        // // righteye.paintEyeBase();
        // // lefteye.paintEyeBase();
    
        // //make irises
        // let rightiris = new base(130, 210, 20, 20);
        // thisface.push(rightiris);
        // let leftiris = new base(270, 210, 20, 20);
        // thisface.push(leftiris);
        // // rightiris.paintItRandom();
        // // leftiris.paintItRandom();

        // //make lips
        // let lips = new base(200, 320, 60, 20);
        // thisface.push(lips);
        // // lips.paintLips();


        // hair.display()

        // skin.display()
    
        // righteye.display()
        // lefteye.display()
    
        // rightiris.display()
        // leftiris.display()
    
        // lips.display()

    // if mousePressed (event) {
    //     hair.paintItRandom
    //     skin.paintSkin(),
    //     righteye.paintEyeBase(),
    //     lefteye.paintEyeBase(),
    //     rightiris.paintItRandom(),
    //     leftiris.paintItRandom()
    //     lips.paintLips()

    
// function mousePressed() {
//     hair.paintItRandom;
//     skin.paintSkin;
//     }

// function makeFace() {
//     let hair = new base(200, 185, 350, 350);
//     let skin = new base(200, 225, 250, 300);
//     let righteye = new base(130, 200, 50, 50);        
//     let lefteye = new base(270, 200, 50, 50);
//     let rightiris = new base(130, 210, 20, 20);
//     let leftiris = new base(270, 210, 20, 20);
//     let lips = new base(200, 320, 60, 20);
// }
//generate the face


// function mousePressed() {
//       hair.paintItRandom(),
//         skin.paintSkin(),
//         righteye.paintEyeBase(),
//         lefteye.paintEyeBase(),
//         rightiris.paintItRandom(),
//         leftiris.paintItRandom()
//         lips.paintLips()
//         }
  
// function mousePressed() { 
//     thisface[hair].paintItRandom


//     thisface[skin].paintSkin
    
// }

    // for (let i = 0; i < face.length; i++) {
    //     face[i].hair();