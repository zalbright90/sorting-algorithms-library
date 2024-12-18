let array = [];
let scaledArray = [];
let canvasWidth, canvasHeight;
let steps = [];
let currentStep = 0;

export function setupVisualization(inputArray = null) {
    canvasWidth = Math.max(window.innerWidth * 0.9, 100); // Max width
    canvasHeight = Math.max(window.innerHeight * 0.5, 100); // Max height

    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('visualizationCanvas');
    noLoop(); 
    background(220);

    // Use input array or generate a default
    if (inputArray) {
        array = inputArray;
    } else {
        array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 10);
    }

    // Scale the array to fit canvas
    scaledArray = array.map(value => map(value, 0, Math.max(...array), 0, canvasHeight));

    drawArray(scaledArray);
}

// p5.js main draw function, continuously called
export function draw() {
    background(220); // Clear the canvas
    if (scaledArray.length > 0) {
        drawArray(scaledArray); // Draw the array bars on the canvas
    }
}

// Function to render the array as bars
export function drawArray(array) {
    const arrLength = array.length;
    const barWidth = canvasWidth / arrLength;

    for (let i = 0; i < arrLength; i++) {
        fill(0, 123, 255); // Bar color
        rect(i * barWidth, canvasHeight - array[i], barWidth - 2, array[i]); // Draw each bar
    }
}

// Function to handle array updates for sorting animations
export function animateSorting(stepsArray) {
    steps = stepsArray;
    currentStep = 0;
    loop(); // Start animation loop
}

// Function to update the current step of animation
export function updateStep() {
    if (currrentStep < steps.length) {
        const currentStepArray = steps[currentStep];

        // Rescale the current step's array
        scaledArray = currentStepArray.map(value => map(value, 0, Math.max(...currentStepArray), 0, canvasHeight)
    );

    currentStep++;
    drawArray(scaledArray);
    } else {
        noLoop();
    }
}

// Handle window resizing to adjust canvas size
export function windowResized() {
    canvasWidth = window.innerWidth * 0.9;
    canvasHeight = window.innerHeight * 0.5;
    resizeCanvas(canvasWidth, canvasHeight);

    scaledArray = array.map(value => map(value, 0, canvasHeight));
    drawArray(scaledArray);
}