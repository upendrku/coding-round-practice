// Given an array of numbers, find the maximum number in the array and print it.

const findMax = (arr) => {
    let max = arr[0]
    let i = 1
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i]
        }
        i++
    }

    return max
}

console.log(findMax([-5, -2, -10, -1, -8]))
console.log(findMax([3, 7, 2, 5, 7, 4, 2, 9]))