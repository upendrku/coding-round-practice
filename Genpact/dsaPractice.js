// Max profit

function maxProfit(arr) {
    let minBuyPrice = arr[0]
    let currentProfit = 0
    for (let i = 1; i < arr.length; i++) {
        currentProfit = Math.max(currentProfit, arr[i] - minBuyPrice)
        minBuyPrice = Math.min(minBuyPrice, arr[i])
    }

    return currentProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2, 4]))
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))

console.log('..................................')
// Longest Sub string without repeas=ting characters

function lengthOfLongestSubstring(str) {
    let i = 0, j = 1, subStrs = [], currentSubStr = str[0], chrObj = {}
    chrObj[currentSubStr] = true

    while (i < j && j < str.length) {
        if (!chrObj[str[j]]) {
            chrObj[str[j]] = true
            currentSubStr += str[j]
            j++
        } else {
            subStrs.push(currentSubStr)
            currentSubStr = str[j]
            chrObj = {}
            chrObj[currentSubStr] = true
            i = j
            j++
        }
    }

    let longest = 0
    for (let i = 0; i < subStrs.length; i++) {
        longest = Math.max(longest, subStrs[i].length)
    }

    return longest
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));


console.log('..................................')

// Two Number Sum

function twoNumberSum(arr, sum) {
    let numsObj = {}
    for (let i = 0; i < arr.length; i++) {
        const other = sum - arr[i]
        if (numsObj[other]) {
            return [i, numsObj[other]]
        } else {
            numsObj[arr[i]] = i
        }
    }
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

console.log('..................................')

// Valid Parentheses
const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const isValid = function (s) {
    if (s.length % 2 === 1) return false
    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (pairs[s[i]]) {
            stack.push(s[i]) // ([
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
    }
    return stack.length === 0
};

// Roman to Integer.
// Isomorphic Strings
// Longest Common Prefix
// First Unique Character in a String
