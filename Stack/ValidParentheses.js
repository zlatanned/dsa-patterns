/**
 * Problem: Valid Parentheses (Leetcode 20)
 * Pattern: Stack
 * Key Insight:
 *   - Use a stack to track opening brackets.
 *   - When a closing bracket is encountered, pop from the stack and check for a match.
 *   - After processing, the stack must be empty for a valid expression.
 * 
 * Approach:
 * - Iterate through each character in the string:
 *     - If it's an opening bracket, push it to the stack.
 *     - If it's a closing bracket, pop from the stack and check if it matches the expected opening bracket.
 * - After processing all characters, if the stack is empty, the expression is valid.
 * 
 * Time: O(n) → We process each character once.
 * Space: O(n) → In the worst case (all opening brackets), we use a stack of size n.
 */

const isValid = (s) => {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' }; // Mapping of closing to opening brackets

    for (let char of s) {
        if (map[char]) { // If it's a closing bracket
            // Pop from stack & check if it matches expected opening bracket
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char); // Push opening brackets onto the stack
        }
    }

    return stack.length === 0; // Stack must be empty for a valid expression
}