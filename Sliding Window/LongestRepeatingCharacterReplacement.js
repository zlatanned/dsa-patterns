/**
 * Problem: Longest Repeating Character Replacement (Leetcode 424)
 * Pattern: Sliding Window

 * Key Insight: 
 *   Keep track of the most frequent char in window.
 *   Window size - max freq char count = # of changes needed
 *      If it's > k → shrink window from left.
 *      Else, it's a valid window, update maxLen.

 * Approach:
 * - Use a hashmap to count characters in current window.
 * - Track max frequency character (`maxFreq`) in window.
 * - If windowSize - maxFreq > k → shrink window from left.
 * - Else → update maxLen with current window size.

 * Time: O(n)
 * Space: O(26) = O(1) since only uppercase letters
 */

var characterReplacement = function(s, k) {
    let left = 0, maxFreq = 0, maxLen = 0;
    const count = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;

        maxFreq = Math.max(maxFreq, count[char]);

        // If we need to replace more than k characters, shrink the window
        while (right - left + 1 - maxFreq > k) {
            count[s[left]]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
