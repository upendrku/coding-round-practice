// Given a string, implement a function to find the longest substring without repeating characters.

function longestSubstring(str) {
    if (str === "") return str
    let currentSubStr = ""
    let longestSubStr = ""
    let charSet = new Set()

    for (let ch of str) {
        if (!charSet.has(ch)) {
            charSet.add(ch)
            currentSubStr += ch
        } else {
            if (currentSubStr.length > longestSubStr.length)
                longestSubStr = currentSubStr
            currentSubStr = ch
            charSet = new Set([ch])
        }
    }

    if (currentSubStr.length > longestSubStr.length)
        longestSubStr = currentSubStr

    return longestSubStr
}

const ans = longestSubstring("GEEKSFORGEEKS")
console.log(ans)