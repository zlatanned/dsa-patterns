/*
    Problem: Container With Most Water (Leetcode 11) (MEDIUM)
    Pattern: Two Pointers
    Key trigger: Max area between two vertical lines → area = width * min(height)

    Approach:
    - Start with two pointers at the ends
    - Calculate area at each step
    - Move the shorter line inward to try and find a taller one
    - Greedy idea: Only moving the shorter height may improve the area

    Time: O(n)
    Space: O(1)
*/

const maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};