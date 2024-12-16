let array = [];
let scaledArray = [];
let canvasWidth, canvasHeight;

export function setupVisualization() {
    canvasWidth = Math.max(window.innerWidth * 0.9, 100); // Minimum width
    canvasHeight = Math.max(window.innerHeight * 0.5, 100); // Minimum height
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('visualizationCanvas');
    noLoop(); // Ensure that p5.js only draws once until requested
    background(220); // Set initial background

    // Generate the random array and scale it using map()
    generateScaledArray();
}

// Function to generate the array and scale it
export function generateScaledArray() {
    array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 10); // Generate random array
    console.log('Generated array:', array);

    // Map the values to fit within the canvas height
    scaledArray = array.map(value => map(value, 0, 100, 0, canvasHeight));
    console.log('Scaled array:', scaledArray);
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
    if (currentStep < steps.length) {
        scaledArray = steps[currentStep]; // Update scaled array to current step
        currentStep++;
        drawArray(scaledArray); // Draw the array for the current step
    } else {
        noLoop(); // Stop the animation when sorting is complete
    }
}

// Handle window resizing to adjust canvas size
export function windowResized() {
    canvasWidth = window.innerWidth * 0.9;
    canvasHeight = window.innerHeight * 0.5;
    resizeCanvas(canvasWidth, canvasHeight);
}