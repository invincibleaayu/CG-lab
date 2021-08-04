//this is the algorithm for
//Bresenham Line Drawing
//Algorothim
function setup(){
    createCanvas(700, 700);
    background(255,255,100);
    textSize(24);
    fill(0, 102, 153);
    text('This is the output of Bresenham Algorothim',10,30);
    draw(100,110,400,350);
    draw(400,350,600,150);

}

function draw(x1,y1,x2,y2) {

    const dx = x2 - x1;
    const dy = y2 - y1;
    const m = dy / dx;

    fill(0, 0, 0)
//slope less than 1
    if (Math.abs(m) < 1) {
        let i;
        let p0 = 2 * dy - dx;
        beginShape();
        vertex(x1, y1);
        for (i = x1; i < x2; i++) {
            if (p0 < 0) {
                x1 += 1;
                p0 = p0 + 2 * dy
                vertex(x1, y1)
            } else {
                x1 += 1;
                y1 += 1;
                p0 = p0 + 2 * dy - 2 * dx
                vertex(x1, y1)
            }
        }
        vertex(x2, y2);
        endShape();
        //slope greater than equal to 1
    } else if (Math.abs(m) >= 1) {
        let i;
        let p0 = 2 * dx - dy;
        beginShape();
        vertex(x1, y1);
        for (i = y1; i < y2; i++) {
            if (p0 < 0) {
                y1 += 1;
                p0 = p0 + 2 * dx
                vertex(x1, y1)
            } else {
                x1 += 1;
                y1 += 1;
                vertex(x1, y1)
                p0 = p0 + 2 * (dx - dy);
            }
        }
        vertex(x2, y2);
        endShape();
    }
}