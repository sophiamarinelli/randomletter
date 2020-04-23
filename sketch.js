let canvasX = 216
let canvasY = 216
let px = 10;
let py = 10;
let px2 = 30;
let py2 = 30;
let px3 = 50;
let py3 = 50;
let px4 = 90;
let py4 = 90;


function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(1);

}

function draw() {
    background(255);
    letterA();
    letterB();

    letterA2();
    letterB2();
    letterA3();
    letterB3();
    letterA4();
    letterB4();
    letterC();
}

function letterA() {
    strokeWeight(20);
    strokeCap(SQUARE);
    noFill();
    line(random(29, 29 + px), random(176, 176 + py), random(45, 45 + px), random(139, 139 + py));
    line(random(45, 45 + px), random(139, 139 + py), random(91, 91 + px), random(30, 30 + py));
    line(random(91, 91 + px), random(30, 30 + py), random(139, 139 + px), random(139, 139 + py));
    line(random(139, 139 + px), random(139, 139 + py), random(153, 153 + px), random(176, 176 + py));
    line(random(139, 139 + px), random(139, 139 + py), random(45, 45 + px), random(139, 139 + py));

}

function letterB() {
    strokeWeight(20);
    noFill();
    translate(200, 0);
    line(random(31, 31 + px), random(175, 175 + py), random(31, 31 + px), random(99, 99 + py));
    line(random(31, 31 + px), random(99, 99 + py), random(31, 31 + px), random(30, 30 + py));
    line(random(31, 31 + px), random(30, 30 + py), random(136, 136 + px), random(39, 39 + py));
    line(random(136, 136 + px), random(39, 39 + py), random(117, 117 + px), random(99, 99 + py));
    line(random(117, 117 + px), random(99, 99 + py), random(142, 142 + px), random(156, 156 + py));
    line(random(142, 142 + px), random(156, 156 + py), random(31, 31 + px), random(175, 175 + py));
    line(random(31, 31 + px), random(99, 99 + py), random(117, 117 + px), random(99, 99 + py));
}


function letterA2() {
    strokeWeight(20);
    noFill();
    translate(-200, 200);
    line(random(29, 29 + px2), random(176, 176 + py2), random(45, 45 + px2), random(139, 139 + py2));
    line(random(45, 45 + px2), random(139, 139 + py2), random(91, 91 + px2), random(30, 30 + py2));
    line(random(91, 91 + px2), random(30, 30 + py2), random(139, 139 + px2), random(139, 139 + py2));
    line(random(139, 139 + px2), random(139, 139 + py2), random(153, 153 + px2), random(176, 176 + py2));
    line(random(139, 139 + px2), random(139, 139 + py2), random(45, 45 + px2), random(139, 139 + py2));

}

function letterB2() {
    strokeWeight(20);
    noFill();
    translate(200, 0);
    line(random(31, 31 + px2), random(175, 175 + py2), random(31, 31 + px2), random(99, 99 + py2));
    line(random(31, 31 + px2), random(99, 99 + py2), random(31, 31 + px2), random(30, 30 + py2));
    line(random(31, 31 + px2), random(30, 30 + py2), random(136, 136 + px2), random(39, 39 + py2));
    line(random(136, 136 + px2), random(39, 39 + py2), random(117, 117 + px2), random(99, 99 + py2));
    line(random(117, 117 + px2), random(99, 99 + py2), random(142, 142 + px2), random(156, 156 + py2));
    line(random(142, 142 + px2), random(156, 156 + py2), random(31, 31 + px2), random(175, 175 + py2));
    line(random(31, 31 + px2), random(99, 99 + py2), random(117, 117 + px2), random(99, 99 + py2));
}


function letterA3() {
    strokeWeight(20);
    noFill();
    translate(-200, 200);
    line(random(29, 29 + px3), random(176, 176 + py3), random(45, 45 + px3), random(139, 139 + py3));
    line(random(45, 45 + px3), random(139, 139 + py3), random(91, 91 + px3), random(30, 30 + py3));
    line(random(91, 91 + px3), random(30, 30 + py3), random(139, 139 + px3), random(139, 139 + py3));
    line(random(139, 139 + px3), random(139, 139 + py3), random(153, 153 + px3), random(176, 176 + py3));
    line(random(139, 139 + px3), random(139, 139 + py3), random(45, 45 + px3), random(139, 139 + py3));

}

function letterB3() {
    strokeWeight(20);
    noFill();
    translate(200, 0);
    line(random(31, 31 + px3), random(175, 175 + py3), random(31, 31 + px3), random(99, 99 + py3));
    line(random(31, 31 + px3), random(99, 99 + py3), random(31, 31 + px3), random(30, 30 + py3));
    line(random(31, 31 + px3), random(30, 30 + py3), random(136, 136 + px3), random(39, 39 + py3));
    line(random(136, 136 + px3), random(39, 39 + py3), random(117, 117 + px3), random(99, 99 + py3));
    line(random(117, 117 + px3), random(99, 99 + py3), random(142, 142 + px3), random(156, 156 + py3));
    line(random(142, 142 + px3), random(156, 156 + py3), random(31, 31 + px3), random(175, 175 + py3));
    line(random(31, 31 + px3), random(99, 99 + py3), random(117, 117 + px3), random(99, 99 + py3));
}

function letterA4() {
    strokeWeight(20);
    noFill();
    translate(-200, 200);
    line(random(29, 29 + px4), random(176, 176 + py4), random(45, 45 + px4), random(139, 139 + py4));
    line(random(45, 45 + px4), random(139, 139 + py4), random(91, 91 + px4), random(30, 30 + py4));
    line(random(91, 91 + px4), random(30, 30 + py4), random(139, 139 + px4), random(139, 139 + py4));
    line(random(139, 139 + px4), random(139, 139 + py4), random(153, 153 + px4), random(176, 176 + py4));
    line(random(139, 139 + px4), random(139, 139 + py4), random(45, 45 + px4), random(139, 139 + py4));

}

function letterB4() {
    strokeWeight(20);
    noFill();
    translate(200, 0);
    line(random(31, 31 + px4), random(175, 175 + py4), random(31, 31 + px4), random(99, 99 + py4));
    line(random(31, 31 + px4), random(99, 99 + py4), random(31, 31 + px4), random(30, 30 + py4));
    line(random(31, 31 + px4), random(30, 30 + py4), random(136, 136 + px4), random(39, 39 + py4));
    line(random(136, 136 + px4), random(39, 39 + py4), random(117, 117 + px4), random(99, 99 + py4));
    line(random(117, 117 + px4), random(99, 99 + py4), random(142, 142 + px4), random(156, 156 + py4));
    line(random(142, 142 + px4), random(156, 156 + py4), random(31, 31 + px4), random(175, 175 + py4));
    line(random(31, 31 + px4), random(99, 99 + py4), random(117, 117 + px4), random(99, 99 + py4));
}

function letterC() {
    strokeWeight(20);
    noFill();
    translate(300, 0);
    line(random(145, 145 + px), random(151, 151 + px), random(91, 91 + px), random(186, 186 + px));
}