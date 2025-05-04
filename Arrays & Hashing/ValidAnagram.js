/*
    Problem: Valid Anagram (Leetcode 242) (EASY)
    Pattern: Hashmap
    Key trigger: Check if two strings have identical character counts.

    Approach:
    - Increment count for characters in 's'
    - Decrement count for characters in 't' simultaneously
    - After traversal, all counts must be zero for valid anagram

    Time: O(n)
    Space: O(1) (since limited to 26 lowercase letters)
*/

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const count = {};

    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1;
    }

    return Object.values(count).every(val => val === 0);
}