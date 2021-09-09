//this is the algorithm for
//Mini project for drawing simple 
//Windmill
function setup() {
    createCanvas(1500, 1500);
    rectMode(CENTER)
    colorMode(HSB)
    strokeWeight(10)
}

function draw() {
    background(220);
    stroke('white')
    textSize(24);
    fill(0, 102, 153);
    text('This is the output of which shows the rotating windmill',10,30);
    moveWindmill()
    console.log(d)
}
function windMill() {
    d = frameCount / 5
    if(mouseIsPressed == true) {
    background('black')
    stroke('black')
    textSize(24);
    fill(0, 102, 153);
    text('This is the output of which shows the rotating windmill',10,30);
    }
    push()
    translate(width / 2, height / 2)
    for(i = 0; i < 15; i++) {
    fill(i * 25, 80, 80)
    scale(0.85)
    rotate(radians(d))
    rect(0, 0, 400, 400, 50)
    }
    for(i = 0; i < 15; i++) {
    fill(i * 25, 80, 80)
    scale(0.85)
    rotate(radians(d))
    rect(0, 0, 400, 400, 50)
    }
    
    pop()
    
}
function moveWindmill() {
    translate(mouseX - width / 2, mouseY - height / 2)
    windMill()
}
