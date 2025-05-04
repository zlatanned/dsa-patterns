/*
    Problem: Longest Consecutive Sequence (Leetcode 128) (MEDIUM)
    Pattern: HashSet + Sequence Building
    Key trigger: Need to find the longest sequence of consecutive integers in O(n) time.

    Approach:
    - Add all numbers to a Set for O(1) lookup
    - For each num in Set:
        - Only start counting if num - 1 is NOT in the Set (start of sequence)
        - Count how long the consecutive sequence goes (num+1, num+2, ...)
    - Keep track of the maximum length found

    Time: O(n)
    Space: O(n)
*/

const longestConsecutive = (nums) => {
    const numSet = new Set(nums); // Put all numbers into a Set for O(1) lookups.
    let longest = 0;

    for (let num of numSet) {
        // Only start counting when num - 1 doesn’t exist → ensures we start at the beginning of a sequence.
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let count = 1;

            // Count how far the sequence goes using a while loop.
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                count++;
            }

            // Keep track of the max length.
            longest = Math.max(longest, count);
        }
    }
    return longest;
}