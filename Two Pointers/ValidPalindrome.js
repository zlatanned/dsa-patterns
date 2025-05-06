/*
    Problem: Valid Palindrome (Leetcode 125) (EASY)
    Pattern: Two Pointers
    Key trigger: Ignore non-alphanumerics and check if string reads same forwards and backwards

    Optimizations:
    - Avoid extra space by using two pointers on the original string
    - Skip non-alphanumeric characters on the fly if encountered
    - Compare lowercase of valid characters only

    Time: O(n)
    Space: O(1) (no extra string creation)
*/

const isPalindrome = function(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }
    return true;
};

const isAlphaNumeric = (ch) => {
    return /^[a-z0-9]$/i.test(ch);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));