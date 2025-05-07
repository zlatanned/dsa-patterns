/**
 * Problem: Best Time to Buy and Sell Stock (Leetcode 121)
 * Pattern: Two Pointers / Sliding Window
 * Key Insight: Buy low, sell high → Track lowest price so far, and calculate profit on every new price.

 * Approach:
 * - Use two pointers: `start` tracks min price (buy), `end` scans for a higher price (sell)
 * - If profit is positive, update maxProfit
 * - If profit is negative or zero, move start to end (new min price candidate)

 * Time: O(n)
 * Space: O(1)
 */

const maxProfit = function(prices) {
    let start = 0;           // Buying day
    let end = 1;             // Selling day
    let maxProfit = 0;

    while (end < prices.length) {
        const profit = prices[end] - prices[start];

        if (profit > 0) {
            maxProfit = Math.max(maxProfit, profit);
        } else {
            start = end;     // Found a lower buy price
        }

        end++;
    }

    return maxProfit;
};
