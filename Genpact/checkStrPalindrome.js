// Given a string, implement a function to check if the string is a palindrome.

function palindromeChk(str) {
    return str === str.split('').reverse().join('');
}