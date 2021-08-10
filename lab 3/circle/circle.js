function setup() {
    createCanvas(700, 700);
    background(255,255,100);
    textSize(24);
    fill(0, 102, 153);
    text('This is the output of Midpoint Circle Drawing Algorothim',10,30);
    midPointCircleDraw(200, 200, 100);
    midPointCircleDraw(400, 400, 200);
}
function midPointCircleDraw(x_centre, y_centre, r) {
    var x = 0,
    y = r;
    point(x + x_centre, y + y_centre);
    if (r > 0) {
    point(x + x_centre, -y + y_centre);
    point(y + x_centre, x + y_centre);
    point(-y + x_centre, x + y_centre);
    }
    var P = 1 - r;
    for (x = 0; x <= y; x++) {
    // if midpoint lie inside
    if (P < 0) {
        P = P + 2 * x + 1;
    }
    // if midpoint lie outside
    else {
        y--;
        P = P + 2 * x - 2 * y + 1;
    }
    point(x + x_centre, -y + y_centre);
    point(-x + x_centre, y + y_centre);
    point(x + x_centre, y + y_centre);
    point(-x + x_centre, -y + y_centre);
    point(y + x_centre, x + y_centre);
    point(-y + x_centre, x + y_centre);
    point(y + x_centre, -x + y_centre);
    point(-y + x_centre, -x + y_centre);
    }
}




