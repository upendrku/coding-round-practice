// Given a string, find the number of ways to partition the string into palindromes.

function findPalindromicPartitions(string) {
    const partitions = [];
    backtrack(0, []);
    return partitions;

    function backtrack(start, currentPartition) {
        if (start === string.length) {
            partitions.push([...currentPartition]);
            return;
        }

        for (let end = start; end < string.length; end++) {
            if (isPalindrome(start, end)) {
                const palindrome = string.substring(start, end + 1);
                currentPartition.push(palindrome);
                backtrack(end + 1, currentPartition);
                currentPartition.pop();
            }
        }
    }

    function isPalindrome(start, end) {
        while (start < end) {
            if (string[start] !== string[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}

const string = "ababbbabbababa";
const partitions = findPalindromicPartitions(string);
console.log(partitions); // [["n", "i", "t", "i", "n"], ["n", "iti", "n"], ["nitin"]]

