import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from './algorithms.js';
import { setupVisualization, draw, drawArray, animateSorting, updateStep, windowResized } from './visualization.js';

let array = [];
const arraySize = 10;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateArray(customArray = null) {
    if(customArray) {
        array = customArray;
    } else {
        array = Array.from({ length: arraySize }, () => random(10, 100));
    }

    console.log('Current array: ', array);

    setupVisualization(array);
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
    animateSorting(steps);
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

document.querySelector('#arrayInput').addEventListener('change', (e) => {
    const input = e.target.value.trim();
    try {
        const customArray = input.split(/[,\s]+/)
        .map(number => {
            const parsed = parseInt(number.trim(), 10);
            if(isNaN(parsed)) throw new Error ('Invalid number');
            return parsed;
        });

        // Limit array size
        if (customArray.length > 32) {
            alert('Maximum array size is 32');
            return;
        }
        document.querySelector('#arraySize').value = customArray.length;

        generateArray(customArray);
    } catch (error) {
        alert('Please enter valid numbers separated by commans or spaces');
    }
});

window.setup = setupVisualization;
window.draw = updateStep;

generateArray();