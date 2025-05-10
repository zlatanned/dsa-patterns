/**
 * Problem: Minimum Window Substring (Leetcode 76)
 * Pattern: Sliding Window + Hash Map
 * Hook: Grow window to include all chars, then shrink to minimize it.
 * Key Insight:
 *   Expand window to include required chars.
 *   Once valid, shrink from left to minimize.
 *   Track smallest valid window.

 * Approach:
 * - Use two hashmaps:
 *     1. `need` → frequency of chars in `t`
 *     2. `window` → frequency of current window chars
 * - Expand `right` until window contains all required chars.
 * - Then, shrink `left` to get minimum valid window.
 * - Track `minLen` and `minStart` for result.

 * Time: O(s.length + t.length)
 * Space: O(128) → constant for ASCII
 */

const minWindow = function(s, t) {
    if (t.length > s.length) return "";

    // Step 1: Count frequency of each char in t
    const tMap = new Map();
    for (let ch of t) {
        tMap.set(ch, (tMap.get(ch) || 0) + 1);
    }

    // Step 2: Initialize sliding window pointers and helpers
    let left = 0;
    let have = 0;                     // how many chars matched with required frequency
    const window = new Map();
    const need = tMap.size;          // total unique characters needed
    let res = [-1, -1];
    let resLen = Infinity;

    // Step 3: Expand window with right pointer
    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        window.set(ch, (window.get(ch) || 0) + 1);

        // If character is part of t and we matched the required count
        if (tMap.has(ch) && window.get(ch) === tMap.get(ch)) {
            have++;
        }

        // Step 4: Try to shrink window when it's valid
        while (have === need) {
            // Update result if it's the smallest valid window so far
            if ((right - left + 1) < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }

            // Shrink from the left
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);

            // If we drop below required freq, window is no longer valid
            if (tMap.has(leftChar) && window.get(leftChar) < tMap.get(leftChar)) {
                have--;
            }
            left++; // Move left pointer forward
        }
    }

    const [start, end] = res;
    return resLen === Infinity ? "" : s.slice(start, end + 1);
};
