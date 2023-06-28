// Given a string, find the first occurrence of a given substring in the string.

function findFirstOccurrence(str, subStr) {
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + subStr.length) === subStr) {
            return i;
        }
    }
    return -1;
}

const result = findFirstOccurrence("hello world", "world");
console.log(result);