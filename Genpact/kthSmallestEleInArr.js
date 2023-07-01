/*
Given a array of integers, implement a function to find the kth smallest element in the array.

The function should take two parameters: the array and the index of the kth smallest element. 
The function should return the kth smallest element in the array.

For example, given the array [1, 3, 5, 7, 9] and the index 2, the function should return the third smallest element, which is 5.
*/

function kthSmallest(arr, k) {
    const sortedArr = arr.sort((a, b) => a - b)
    return sortedArr[k]
}

const result = kthSmallest([1, 4, 0, 9, 6, 5], 2)
console.log(result)