/**
 * Strange Aeons
 * Yannick Hantaniaina
 *
 * A small top-down game inspired by H.P. Lovecraft's The Call of Cthulhu.
 * You are the entity that buried Cthulhu the first time, and you forgot how.
 * Lead every sailor to a memory shrine so they forget the call, then return
 * to R'lyeh at the pole and bury him again before the stars align.
 *
 */

"use strict";


/*
*
* Variable initialisation
* 
*/
let cthulu;
let entity = {
    //movement and placement.
    x: 200,
    y: 200,
    vx:2,
    vy:2,
    ax:0.1,
    ay:0.1,

    //size
    size: 50,

}

/**
 * Creates the canvas and sets up the game.
*/
async function setup() {
    createCanvas(windowWidth,windowHeight)
    noSmooth()
     cthulu = await loadImage('./assets/images/cthulu.png')
}


/**
 * Draws everything
*/
function draw() {
    //Draws the background 
    background('black')
    starsBg()
    grid()
    rlyeh()

    //Entity Related behavior
    keyEntity()
    drawEntity()
    
}

/**
 * 
 * Entity Functions
*/
function drawEntity(){
    fill('black')
    //noStroke()
    circle(entity.x,entity.y,entity.size,entity.size)
}

//moves the entity with the keyboard
function keyEntity(){
    if (keyIsDown('d') || keyIsDown(RIGHT_ARROW)){
        moveEntity(+5,0);
    }
    if (keyIsDown('s') || keyIsDown(DOWN_ARROW)){
        moveEntity(0,+5);
    }
    if (keyIsDown('a') || keyIsDown(LEFT_ARROW)){
        moveEntity(-5,0);
    }
    if (keyIsDown('w') || keyIsDown(UP_ARROW)){
        moveEntity(0,-5);
    }
}

//move entity
function moveEntity(x,y){
    entity.x +=x;
    entity.y +=y;

    entity.x = constrain(entity.x, entity.size / 2, width - entity.size / 2);
    entity.y = constrain(entity.y, entity.size / 2, height - entity.size / 2);
}





/*
 * 
 * Background functions 
 * 
*/

// Function for the pole grid
function grid(){
    //two horizontal and vertical lines 
    stroke('grey')
    strokeWeight(0.5)
    line(0,height/2,width,height/2)//horizontal
    line(width/2,0,width/2,height)//vertical

    //diagonal lines 
    line(0,0,width,height)
    line(width,0,0,height)
    line(width/4,0,width*3/4,height)
    line(width*3/4,0,width/4,height)
    line(0,height/4,width,height*3/4)
    line(0,height*3/4,width,height/4)
    line(width*3/8,0,width*5/8,height)
    line(width*5/8,0,width*3/8,height)

    //circles   
    noFill()
    for (let size=200; size<=width+200; size+=200) {
        circle(width/2,height/2,size)
    }

}
function starsBg(){
    //same seed every frame so the stars don't move
    randomSeed(42)
    noStroke()
    fill('white')
    for (let i=0; i<400; i++) {
        circle(random(width),random(height),2)
    }
}

//function for R'lyeh and cthulu 
function rlyeh(){
    fill('black')
    stroke('white')
    circle(width/2,height/2,200,200)
    strokeWeight(1)
    circle(width/2,height/2,170,170)
    strokeWeight(2)
    circle(width/2,height/2,130,130)
    imageMode(CENTER)
    image(cthulu,width/2,height/2-5,120,120)
}