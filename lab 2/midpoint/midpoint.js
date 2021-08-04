//this is the algorithm for
//Midpoint Line Drawing
//Algorothim
function setup(){
    createCanvas(700, 700);
    background(255,255,100);
    textSize(24);
    fill(0, 102, 153);
    text('This is the output of Midpoint Algorothim',10,30);
    draw(70,70,550,600);
    draw(200,350,600,150);

}
function draw(x1,y1,x2,y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const m = dy / dx;

    let d = dy - (dx / 2);
    let x = x1, y = y1;

    beginShape();
    vertex(x, y);
    // for slope less than 1
    if (Math.abs(m) < 1) {
        while (x < x2) {
            x++;
            if (d < 0) {
                d = d + dy;
            } else {
                d += (dy - dx);
                y++;
            }
            vertex(x, y);
            console.log(x,y)

        }
    //for slope greater than equal to 1
    } else {
        while (y < y2) {
            y++;
            if (d < 0) {
                d = d + dx;
            } else {
                d += (dx - dy);
                x++;
            }
            vertex(x, y);
            console.log(x,y)

        }
    }

    endShape();
}