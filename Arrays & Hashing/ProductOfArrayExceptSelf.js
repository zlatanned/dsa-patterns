/*
    Problem: Product of Array Except Self (Leetcode 238) (MEDIUM)
    Pattern: Array manipulation, Left and Right products.
    Key trigger: Need to calculate the product of all elements except the current one for each index, but without using division.

    Approach:
    - We cannot use division, so we need to handle the problem by calculating the products of elements on the left and right of each index.
    - First, compute the "left product" for each element.
    - Then compute the "right product" while updating the result array in-place.
    - The result at each index will be the product of the left and right products.

    Time: O(n) (single pass through the array twice)
    Space: O(n) (for the result array)
*/

const productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n); // Result array to store the answer
    let leftProduct = 1; // Initialize the left product to 1 (nothing on the left of the first element)
    
    // First pass: calculate left products
    for (let i = 0; i < n; i++) {
        res[i] = leftProduct;  // Store the left product for the current index
        leftProduct *= nums[i];  // Update left product by multiplying with current element
    }

    let rightProduct = 1; // Initialize the right product to 1 (nothing on the right of the last element)

    // Second pass: calculate right products and multiply them with the left products in the result array
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= rightProduct;  // Multiply the current left product with the right product
        rightProduct *= nums[i]; // Update the right product by multiplying with current element
    }

    return res;  // Return the final result array
};

// Example test case
console.log(productExceptSelf([1, 2, 3, 4]));  // Output: [24, 12, 8, 6]
