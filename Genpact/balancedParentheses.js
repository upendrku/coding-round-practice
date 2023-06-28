// Given a string, implement a function to check if the string is a balanced Parentheses string.

const ParenthesesPair = {
    '[': ']',
    '{': '}',
    '(': ')'
}

function balancedParentheses(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (ParenthesesPair[str[i]]) {
            stack.push(str[i]);
        } else if (ParenthesesPair[stack.pop()] !== str[i]) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(balancedParentheses('()'))
console.log(balancedParentheses("((()))(()()(())()()(())()()()"))
