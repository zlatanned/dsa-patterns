/**
 * Problem: 3Sum (Leetcode 15) (MEDIUM)
 * Pattern: Sorting + Two Pointers
 * Key trigger: Find unique triplets that sum to 0
 *
 * Approach:
 * - Sort the array to make it easy to skip duplicates.
 * - Fix the first element, then use two pointers to find pairs such that sum of triplet is zero.
 * - Skip duplicates for the fixed number.
 * - Set left as next index of fixed number and right as last elem's index and loop while left < right.
 * - If Sum = 0, push triplet to res, skip dupes for left and right, and finally inc left and decrement right.
 * - If Sum < 0, increment left to move triplet sum closer to 0.
 * - If Sum > 0, decrement right to move triplet sum closer to 0.
 *
 * Time: O(n^2) | Space: O(1) (Auxillary space doesn't contribute to overall space complexity)
 */

const threeSum = function(nums) {
    nums.sort((a, b) => a - b); // 1. Sort for duplicates and two-pointer strategy
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate fixed numbers

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Need bigger sum
            } else {
                right--; // Need smaller sum
            }
        }
    }

    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]