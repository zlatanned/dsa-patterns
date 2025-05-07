/**
 * Problem: Longest Substring Without Repeating Characters (Leetcode 3)
 * Pattern: Sliding Window
 * Key Insight: Use a sliding window to track unique characters; shrink window when duplicates are found.

 * Approach:
 * - Use a Set to store characters in the current window
 * - Expand the window with `windowEnd`
 * - If a duplicate is seen, shrink window from the left (`windowStart`) until it's removed
 * - Track the max window length at each step

 * Time: O(n) → Each character is seen at most twice (once added, once removed)
 * Space: O(n) → Set may store up to all unique characters
 */

const lengthOfLongestSubstring = function (s) {
    const seen = new Set();
    let longest = 0, windowStart = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        // Shrink window from left if duplicate found (Looping continues until first occurence of dupe is not removed)
        while (seen.has(s[windowEnd])) {
            seen.delete(s[windowStart]);
            windowStart += 1;
        }

        seen.add(s[windowEnd]); // Add current char to window
        longest = Math.max(longest, windowEnd - windowStart + 1);
    }

    return longest;
};
