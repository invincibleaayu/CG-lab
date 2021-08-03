//this is the script for DDA
//line drawing algorithim
function draw() {
    createCanvas(700, 700);
    background(255,255,100);
    textSize(24);
    fill(0, 102, 153);
    text('This is the output of DDA',10,30);
    

    let x1 = 35, y1 = 47, x2 = 400, y2 = 410;

    const m = (y2 - y1) / (x2 - x1);

    fill(0, 0, 0);

    if (Math.abs(m) <= 1) {
        let i;
        beginShape();
        vertex(x1, y1);
        for (i = x1; i < x2; i++) {
            if (x1 < x2) {
                x1 = x1 + 1;
                y1 = y1 + m;
                vertex(x1, y1);
            }
        }
        vertex(x2, y2);
        endShape();
    } else if (Math.abs(m) > 1) {
        let i;
        beginShape();
        vertex(x1, y1);
        for (i = y1; i < y2; i++) {
            if (y1 < y2) {
                y1 = y1 + 1;
                x1 = x1 + 1 / m;
            vertex(x1, y1);
            }
        }
        vertex(x2, y2);
        endShape();
    }
}