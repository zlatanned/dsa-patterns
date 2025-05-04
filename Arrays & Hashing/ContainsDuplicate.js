/*
    Problem: Contains Duplicate (Leetcode 217) (EASY)
    Pattern: Hashset
    Key trigger: Need to detect duplicates efficiently.

    Approach:
    - Use a set to track seen numbers
    - If a number is already in the set, return true
    - Else, add number to set
    - If no duplicates found, return false

    Time: O(n)
    Space: O(n)
*/

const containsDuplicate = function(nums) {
    if (nums.length < 2) return false; // Optimization for small arrays

    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};