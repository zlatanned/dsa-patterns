/*
    Problem: Two Sum (Leetcode 1) (EASY)
    Pattern: Hashmap
    Key trigger: Find two numbers summing to target efficiently (O(1) lookup).

    Approach:
    - For each element, calculate the required complement (target - current element)
    - Check if complement already exists in hashmap
    - If yes, return indices
    - Else, store current element with its index

    Time: O(n)
    Space: O(n)
*/

const twoSum = (nums, target) => {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in hashmap) return [i, hashmap[diff]];

        hashmap[nums[i]] = i;
    }
};