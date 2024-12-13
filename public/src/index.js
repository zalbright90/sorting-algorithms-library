// Global Variables
let array = [];
const arraySize = 10;
let canvasWidth;
let canvasHeight;

// Setup Function: Initializes the canvas and array
function setup() {
    console.log('Setup function running...');
    canvasWidth = min(windowWidth * 0.9, 800); // Use 90% of the window
    canvasHeight = canvasWidth / 2; // Maintain a 2:1 aspect ratio
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('visualizationCanvas');
    background(200);
    noLoop();
    generateArray();
    console.log('Generated array:', array)
    drawArray();
}

// Draw function: Called everytime the canvas needs updating
function draw() {
    background(255);
    drawArray();
}

// Generate an array with random values
function generateArray() {
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(floor(random(10, 100))); // Random values between 10 and 100
    }
}
  
// Draw the array as bars
function drawArray() {
    const barWidth = canvasWidth / array.length;
  
    for (let i = 0; i < array.length; i++) {
        const barHeight = map(array[i], 10, 100, 0, canvasHeight);
        fill(0, 123, 255); // Bar color
        rect(i * barWidth, canvasHeight - barHeight, barWidth - 2, barHeight);
    }
}

function windowResized() {
    setup();
}