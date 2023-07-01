/* 
Given a sorted array, find the first occurrence of a given number in the array. 
*/

function findFirstOccurance(arr, num) {
    const middle = Math.floor(arr.length - 1 / 2)
    if (arr[middle] === num) {
        return middle
    } else if (num < arr[middle]) {
        for (let i = 0; i < middle; i++) {
            if (num === arr[i]) {
                return i
            }
        }
    } else {
        for (let i = middle + 1; i < arr.length; i++) {
            if (num === arr[i]) {
                return i
            }
        }
    }
}

console.log(findFirstOccurance([1, 2, 2, 3, 3, 3, 3, 3, 5], 3))