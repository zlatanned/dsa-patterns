/*
    Problem: Group Anagrams (Leetcode 49) (MEDIUM)
    Pattern: Hashmap + Character Count
    Key trigger: Need a unique signature for anagrams without sorting.

    Approach:
    - For each word, build a frequency count array (size 26)
    - Convert count array into a unique string key
    - Use hashmap: key → list of words
    - Group words with the same character frequency

    Time: O(n * k) (n = number of words, k = max word length)
    Space: O(n * k)
*/

const groupAnagrams = (strs) => {
    const map = {};

    for (let str of strs) {
        const count = new Array(26).fill(0);

        for (let char of str) {
            // Prepare count such that for 'eat' count = [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
            count[char.charCodeAt(0) - 97]++;
        }

        // Build key manually - key for 'eat', 'tea' and 'ate' = a1e1t1
        let key = '';
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) {
                key += String.fromCharCode(97 + i) + count[i];
            }
        }

        if (!map[key]) map[key] = [];
        map[key].push(str);
    }

    return Object.values(map);
};