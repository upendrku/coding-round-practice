// debouncing / throttling
// myMap
// myFilter

// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[, thisArg])

Array.prototype.customMap = function (callback) {
    const mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(callback(this[i], i, this));
    }
    return mappedArray;
};

// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])

Array.prototype.customFilter = function (callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

// arr.reduce(callback[, initialValue])

Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}


// Call apply bind

const person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function (message) {
        console.log(message + ' ' + this.firstName + ' ' + this.lastName);
    }
};

// Using call
const message1 = 'Hello';
person.greet.call({ firstName: 'Jane', lastName: 'Smith' }, message1);
// Output: Hello Jane Smith

// Using apply
const message2 = 'Hi';
person.greet.apply({ firstName: 'Mike', lastName: 'Johnson' }, [message2]);
// Output: Hi Mike Johnson

// Using bind
const message3 = 'Welcome';
const boundGreet = person.greet.bind({ firstName: 'Emily', lastName: 'Davis' });
boundGreet(message3);
// Output: Welcome Emily Davis


const debounce = (callback, delay) => {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    };
};

const throttle = (callback, delay) => {
    let previousTime;
    return function () {
        const currentTime = Date.now();
        if (currentTime - previousTime >= delay) {
            callback();
            previousTime = currentTime;
        }
    };
};

const debouncedCallback = debounce(() => console.log("Hello"), 1000);
const throttledCallback = throttle(() => console.log("Hello"), 1000);

debouncedCallback(); // Nothing happens
debouncedCallback(); // Nothing happens
debouncedCallback(); // Hello

throttledCallback(); // Hello
throttledCallback(); // Nothing happens
throttledCallback(); // Nothing happens
throttledCallback(); // Hello

// Closure example in javascript
function f() {
    let value = 123;

    return function () {
        console.log(value);
    }
}

let g = f(); // while g function exists, the value stays in memory

g = null; // ...and now the memory is cleaned up

// Currying
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3))

////////////////////////////////////


// Linear and Binary search

// Linear seach

const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

function binarySearch(arr, num) {
    let startIndex = 0
    let lastIndex = arr.length
    return recursiveBinarySearch(arr, num, startIndex, lastIndex)
}

function recursiveBinarySearch(arr, x, start, end) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
        return mid;
    } else if (arr[mid] < x) {
        return recursiveBinarySearch(arr, x, mid + 1, end);
    } else {
        return recursiveBinarySearch(arr, x, start, mid - 1);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1


/*
1. Bubble Sort
2. Insertion Sort
3. Quick Sort
4. Merge Sort
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

function insertionSort(arr) {
    // insertion sort
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
    return arr
}

function quickSort(arr) {
    // quick sort
    if (arr.length < 2) return arr
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function mergeSort(arr) {
    // merge sort
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

console.log(bubbleSort([1, 2, 9, 5, 4, 6]))



