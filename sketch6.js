let url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jDPUpEMnGTlRk4AHmcaoYUeH47i4AiOu';
let urlRange = "https://pomber.github.io/covid19/timeseries.json"
let data
let article
let range = 5

const letterA = {
    lines: [
        { x1: 35, y1: 170, x2: 50, y2: 136 },
        { x1: 50, y1: 136, x2: 89, y2: 45 },
        { x1: 89, y1: 45, x2: 125, y2: 136 },
        { x1: 125, y1: 136, x2: 140, y2: 170 },
        { x1: 125, y1: 136, x2: 50, y2: 135 }
    ]
}

const letterB = {
    lines: [
        { x1: 35, y1: 170, x2: 35, y2: 102 },
        { x1: 35, y1: 102, x2: 35, y2: 41 },
        { x1: 35, y1: 41, x2: 125, y2: 52 },
        { x1: 109, y1: 103, x2: 35, y2: 103 },
        { x1: 125, y1: 52, x2: 109, y2: 103 },
        { x1: 109, y1: 103, x2: 125, y2: 159 },
        { x1: 125, y1: 159, x2: 35, y2: 170 }
    ]
}

const letterC = {
    lines: [
        { x1: 131, y1: 147, x2: 85, y2: 177 },
        { x1: 85, y1: 177, x2: 30, y2: 111 },
        { x1: 30, y1: 111, x2: 85, y2: 38 },
        { x1: 85, y1: 38, x2: 131, y2: 65 },
    ]
}

const letterD = {
    lines: [
        { x1: 36, y1: 170, x2: 36, y2: 45 },
        { x1: 36, y1: 45, x2: 123, y2: 54 },
        { x1: 123, y1: 54, x2: 138, y2: 111 },
        { x1: 138, y1: 111, x2: 113, y2: 162 },
        { x1: 113, y1: 162, x2: 36, y2: 170 }
    ]
}

const letterE = {
    lines: [
        { x1: 130, y1: 170, x2: 44, y2: 170 },
        { x1: 44, y1: 170, x2: 44, y2: 100 },
        { x1: 44, y1: 100, x2: 44, y2: 45 },
        { x1: 44, y1: 45, x2: 130, y2: 39 },
        { x1: 120, y1: 100, x2: 44, y2: 100 },
    ]
}

const letterF = {
    lines: [
        { x1: 49, y1: 170, x2: 49, y2: 105 },
        { x1: 49, y1: 105, x2: 121, y2: 105 },
        { x1: 49, y1: 105, x2: 47, y2: 43 },
        { x1: 47, y1: 43, x2: 132, y2: 43 },
    ]
}

const letterG = {
    lines: [
        { x1: 131, y1: 62, x2: 85, y2: 37 },
        { x1: 85, y1: 37, x2: 24, y2: 106 },
        { x1: 24, y1: 106, x2: 81, y2: 175 },
        { x1: 81, y1: 175, x2: 140, y2: 116 },
        { x1: 140, y1: 116, x2: 100, y2: 116 },
        { x1: 140, y1: 116, x2: 140, y2: 175 },
    ]
}

const letterH = {
    lines: [
        { x1: 38, y1: 42, x2: 38, y2: 170 },
        { x1: 129, y1: 42, x2: 129, y2: 170 },
        { x1: 129, y1: 100, x2: 38, y2: 100 },
    ]
}

const letterI = {
    lines: [
        { x1: 83, y1: 42, x2: 83, y2: 170 },
    ]
}

const letterJ = {
    lines: [
        { x1: 108, y1: 42, x2: 107, y2: 157 },
        { x1: 107, y1: 157, x2: 70, y2: 178 },
        { x1: 70, y1: 178, x2: 42, y2: 140 },
    ]
}

const letterK = {
    lines: [
        { x1: 39, y1: 42, x2: 39, y2: 170 },
        { x1: 39, y1: 121, x2: 121, y2: 41 },
        { x1: 75, y1: 93, x2: 130, y2: 170 },
    ]
}

const letterL = {
    lines: [
        { x1: 52, y1: 42, x2: 52, y2: 170 },
        { x1: 52, y1: 170, x2: 130, y2: 170 },
    ]
}

const letterM = {
    lines: [
        { x1: 22, y1: 170, x2: 22, y2: 43 },
        { x1: 22, y1: 43, x2: 83, y2: 170 },
        { x1: 83, y1: 170, x2: 145, y2: 43 },
        { x1: 145, y1: 43, x2: 145, y2: 170 },
    ]
}

const letterN = {
    lines: [
        { x1: 35, y1: 170, x2: 35, y2: 43 },
        { x1: 35, y1: 43, x2: 132, y2: 170 },
        { x1: 132, y1: 170, x2: 132, y2: 43 },
    ]
}

const letterO = {
    lines: [
        { x1: 83, y1: 36, x2: 143, y2: 104 },
        { x1: 143, y1: 104, x2: 83, y2: 175 },
        { x1: 83, y1: 175, x2: 23, y2: 105 },
        { x1: 23, y1: 105, x2: 83, y2: 36 },
    ]
}

const letterP = {
    lines: [
        { x1: 45, y1: 170, x2: 45, y2: 43 },
        { x1: 45, y1: 43, x2: 123, y2: 51 },
        { x1: 123, y1: 51, x2: 123, y2: 104 },
        { x1: 123, y1: 104, x2: 45, y2: 116 },
    ]
}


const letterQ = {
    lines: [
        { x1: 85, y1: 37, x2: 143, y2: 104 },
        { x1: 143, y1: 104, x2: 85, y2: 175 },
        { x1: 85, y1: 175, x2: 24, y2: 104 },
        { x1: 24, y1: 104, x2: 85, y2: 37 },
        { x1: 105, y1: 141, x2: 145, y2: 180 },
    ]
}

const letterR = {
    lines: [
        { x1: 37, y1: 170, x2: 37, y2: 43 },
        { x1: 37, y1: 43, x2: 127, y2: 58 },
        { x1: 127, y1: 58, x2: 104, y2: 111 },
        { x1: 104, y1: 111, x2: 37, y2: 111 },
        { x1: 104, y1: 111, x2: 124, y2: 134 },
        { x1: 124, y1: 134, x2: 127, y2: 170 },
    ]
}

const letterS = {
    lines: [
        { x1: 127, y1: 59, x2: 81, y2: 37 },
        { x1: 81, y1: 37, x2: 34, y2: 70 },
        { x1: 34, y1: 70, x2: 85, y2: 105 },
        { x1: 85, y1: 105, x2: 133, y2: 142 },
        { x1: 133, y1: 142, x2: 85, y2: 175 },
        { x1: 85, y1: 175, x2: 37, y2: 151 },
    ]
}

const letterT = {
    lines: [
        { x1: 35, y1: 41, x2: 132, y2: 41 },
        { x1: 82, y1: 41, x2: 82, y2: 170 },
    ]
}

const letterU = {
    lines: [
        { x1: 36, y1: 42, x2: 42, y2: 152 },
        { x1: 42, y1: 152, x2: 83, y2: 175 },
        { x1: 83, y1: 175, x2: 126, y2: 155 },
        { x1: 126, y1: 155, x2: 131, y2: 42 },
    ]
}

const letterV = {
    lines: [
        { x1: 36, y1: 42, x2: 83, y2: 170 },
        { x1: 83, y1: 170, x2: 131, y2: 42 },
    ]
}

const letterW = {
    lines: [
        { x1: 3, y1: 42, x2: 41, y2: 170 },
        { x1: 41, y1: 170, x2: 83, y2: 42 },
        { x1: 83, y1: 42, x2: 124, y2: 170 },
        { x1: 124, y1: 170, x2: 163, y2: 42 },
    ]
}

const letterX = {
    lines: [
        { x1: 44, y1: 42, x2: 124, y2: 170 },
        { x1: 40, y1: 170, x2: 122, y2: 43 },
    ]
}

const letterY = {
    lines: [
        { x1: 89, y1: 170, x2: 89, y2: 116 },
        { x1: 89, y1: 116, x2: 132, y2: 42 },
        { x1: 89, y1: 116, x2: 43, y2: 42 },
    ]
}

const letterZ = {
    lines: [
        { x1: 40, y1: 40, x2: 130, y2: 40 },
        { x1: 130, y1: 40, x2: 39, y2: 170 },
        { x1: 39, y1: 170, x2: 130, y2: 170 },
    ]
}

const allLetters = {
    A: letterA,
    B: letterB,
    C: letterC,
    D: letterD,
    E: letterE,
    F: letterF,
    G: letterG,
    H: letterH,
    I: letterI,
    J: letterJ,
    K: letterK,
    L: letterL,
    M: letterM,
    N: letterN,
    O: letterO,
    P: letterP,
    Q: letterQ,
    R: letterR,
    S: letterS,
    T: letterT,
    U: letterU,
    V: letterV,
    W: letterW,
    X: letterX,
    Y: letterY,
    Z: letterZ
}


function setup() {
    let canvas = createCanvas(3000, 3000)
    data = loadJSON(url);
    dataRange = loadJSON(urlRange);
    console.log(dataRange)

    button = createButton('Confirmed Cases');
    button.addClass('button');
    buttonTwo = createButton('Deaths');
    buttonTwo.addClass('button');
    buttonThree = createButton('Reset')
    buttonThree.addClass('button');
    buttonFour = createButton('Active Cases');
    buttonFour.addClass('button');


}

function confirmed() {
    let confirmed = dataRange["US"][102].confirmed
    document.getElementById("container").innerHTML = confirmed;
    console.log(confirmed)
    range = confirmed / 1000
}

function deaths() {
    let deaths = dataRange["US"][102].deaths
    document.getElementById("container").innerHTML = deaths;
    console.log(deaths)
    range = deaths / 1000
}

function active() {
    let deaths = dataRange["US"][102].deaths
    let confirmed = dataRange["US"][102].confirmed
    let recovered = dataRange["US"][102].recovered
    let active = confirmed - deaths - recovered
    document.getElementById("container").innerHTML = active;
    range = active / 1000
    console.log(active)
}

function reset() {
    document.getElementById("container").innerHTML = "";
    range = 5
}



function draw() {

    if (!data.results) {
        return
    }
    background(255)
    strokeWeight(20);
    frameRate(1)
    strokeCap(SQUARE);
    button.mousePressed(confirmed);
    buttonTwo.mousePressed(deaths);
    buttonThree.mousePressed(reset)
    buttonFour.mousePressed(active);

    button.position(random(0, 1920), random(0, 1080))
    buttonTwo.position(random(0, 1920), random(0, 1080))
    buttonThree.position(random(0, 1920), random(0, 1080))
    buttonFour.position(random(0, 1920), random(0, 1080))
    article = data.results[0].title.replace(/ /g, "").replace(/,/g, "").replace(/'/g, "").replace(/""/g, "").replace(/:/g, "").replace(/2/g, "").replace(/./g, "");
    console.log(article)
    const letterWidth = 170;
    const windowWidth = window.innerWidth;
    let currentLine = 0;
    let currentX = 0
    for (let i = 0; i < article.length; i++) {

        const char = article.charAt(i);
        const uppercaseChar = char.toUpperCase();
        const letterData = allLetters[uppercaseChar];

        if (letterWidth * (i % (windowWidth / letterWidth)) >= windowWidth - 200) {
            currentLine = currentLine + 200
            currentX = 40
        }

        drawLetter(letterData, { x: ((i % (windowWidth / letterWidth)) * letterWidth) - currentX, y: currentLine });

    }


    function drawLetter(letter, translation) {
        push();
        translate(translation.x, translation.y)
        for (let i = 0; i < letter.lines.length; i++) {
            const { x1, y1, x2, y2 } = letter.lines[i];
            line(random(x1, x1 + range), random(y1, y1 + range), random(x2, x2 + range), random(y2, y2 + range));
        }
        pop();

    }
}