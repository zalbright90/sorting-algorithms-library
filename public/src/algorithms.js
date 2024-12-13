// Bubble Sort
function bubbleSort(arr) {
    const steps = [];
    let swapped;
    let arrLength = arr.length;
    do {
        swapped = false;
        for (let i = 0; i < arrLength - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
            steps.push([...arr]);
        }
        arrLength--;
    } while (swapped);
    return steps;
}

// Selection Sort
function selectionSort(arr) {
    const steps = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found min element with the first element
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        steps.push([...arr]); // Save current array state
    }
    return steps;
}

// Insertion Sort
function insertionSort(arr) {
    const steps = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        steps.push([...arr]); // Save current array state
    }
}
return steps;

// Merge Sort (using recursion)
function mergeSort(arr) {
    const steps = [];

    // Helper function to merge two halves
    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i), right.slice(j));
    }

    // Recursive merge sort
    function sort(arr) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = sort(arr.slice(0, mid));
        let right = sort(arr.slice(mid));
        let merged = merge(left, right);
        steps.push([...merged]);
        return merged;
    }

    return sort(arr);
}

// Quick Sort (using recursion)
function quickSort(arr) {
    const steps = [];

    // Helper function to partition array
    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low - 1; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot
        return i + 1;
    }

    // Recursive Quick Sort
    function sort(arr, low, high) {
        if (low < high) {
            let part = partition(arr, low, high);
            steps.push([...arr]);
            sort(arr, low, part - 1);
            sort(arr, part + 1, high);
        }
    }

    sort(arr, 0, arr.length - 1);
    return steps;
}

export { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort };