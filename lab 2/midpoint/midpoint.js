//this is the algorithm for
//Midpoint Line Drawing
//Algorothim
function draw() {
    createCanvas(700, 700);
    background(255,255,100);
    textSize(24);
    fill(0, 102, 153);
    text('This is the output of Midpoint LDA',10,30);

    let x1 = 70, y1 = 70, x2 = 550, y2 = 600;

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