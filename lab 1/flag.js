function draw() {
    createCanvas(700, 700);
    smooth();
    noStroke();
    background(255,255,100);
    textSize(32);
    fill(0, 102, 153);
    text('The display width is ' + displayWidth,10,30);
    fill(0, 102, 153);
    text('The display height is ' + displayHeight,10,60);
    //Blue region of flag
    fill(19,0,145);
    beginShape();
    vertex(100,90);
    vertex(395,310);
    vertex(212,320);
    vertex(400,515);
    vertex(100,515);
    endShape();
    // Red region of the flag 
    fill(255,0,0);
    beginShape();
    vertex(112,111);
    vertex(360,300);
    vertex(175,305);
    vertex(370,500);
    vertex(112,500);
    endShape(); 
    
    //drawing moon 
    fill(255,255,255);
    ellipse(172,240,60,60);
    fill(255,0,0);
    ellipse(172,227,60,60);
    //drawing triangle on moon
    fill(255,255,255);
    ellipse(172,255,30,30);
    triangle(172,240,179,247,177,234);
    triangle(172,240,165,247,166,234);
    triangle(177,242,182,248,184,236);
    triangle(167,242,160,248,161,236);
    triangle(182,244,187,252,188,240);
    triangle(162,244,158,252,156,238);
    triangle(180,252,190,256,193,243);
    triangle(164,252,155,256,151,243);

    // drawing sum part
    ellipse(172,400,50);

    triangle(172,375,182,361,184,385);
    triangle(180,381,198,373,193,390);
    triangle(195,390,210,392,196,402);
    triangle(197,402,210,412,192,414);
    triangle(193,414,201,431,186,421);
    triangle(187,422,180,439,172,420);
    triangle(175,424,162,438,160,416);
    triangle(165,416,144,430,151,410);
    triangle(152,410,131,408,150,398);
    triangle(151,398,133,388,152,389);
    triangle(153,389,144,371,161,379);
    triangle(162,379,160,362,174,375);


}
  


