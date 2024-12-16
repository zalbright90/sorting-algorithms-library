import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from './algorithms.js';
import { setupVisualization, drawArray, animateSorting, updateStep } from './visualization.js';

let array = [];
const arraySize = 10;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateArray() {
    array = Array.from({ length: arraySize }, () => random(10, 100));
    console.log('Generated array:', array);
    // Call the function to generate and scale the array in visualization.js
    generateScaledArray(); // This will handle scaling in visualization.js
}

function startSorting() {
    const algorithm = document.querySelector('#algorithmSelect').value;
    console.log('Selected algorithm:', algorithm);
    const steps = {
        bubble: bubbleSort,
        selection: selectionSort,
        insertion: insertionSort,
        merge: mergeSort,
        quick: quickSort
    }[algorithm](array.slice());
    console.log('Sorting steps:', steps);
    animateSorting(steps); // Start animation with the sorting steps
}

document.querySelector('#randomizeButton').addEventListener('click', () => {
    console.log('Randomize button clicked');
    generateArray();
});

document.querySelector('#startSortingButton').addEventListener('click', () => {
    console.log('Start Sorting button clicked');
    startSorting();
});

document.querySelector('#stepButton').addEventListener('click', () => {
    console.log('Step button clicked');
    updateStep();
});

window.setup = setupVisualization;
window.draw = updateStep; // Update to call updateStep on each draw cycle

generateArray(); // Generate initial array