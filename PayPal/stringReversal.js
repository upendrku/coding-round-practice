/* Given a string, reverse the string and print it. */

const reverseString = (str) => {
    let value = str.split("")
    let i = 0, j = value.length - 1
    while (i < j) {
        const ch = value[i]
        value[i] = value[j]
        value[j] = ch
        i++, j--
    }

    return value.join("")
}

function reverseString2(str) {
    if (str === "") return ""
    return reverseString2(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("Upendra"));
console.log(reverseString2("kumar"));