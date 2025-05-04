/*
    Problem: Top K Frequent Elements (Leetcode 347) (MEDIUM)
    Pattern: Hashmap + Sorting
    Key trigger: Count frequencies and return top K elements

    Approach:
    - Build a frequency map of elements
    - Convert map to array of [element, frequency]
    - Sort array in descending order of frequency
    - Take first K elements

    Time: O(n log n)
    Space: O(n)
*/

function topKFrequent(nums, k) {
    const hmp = {};
    const res = [];

    for (const num of nums) {
        hmp[num] = (hmp[num] || 0) + 1;
    }

    const freqArr = Object.entries(hmp); // [num, freq]
    freqArr.sort((a, b) => b[1] - a[1]); // Descending by frequency

    for (let i = 0; i < k; i++) {
        res.push(Number(freqArr[i][0]));
    }

    return res;
}

/*
    Problem: Top K Frequent Elements (Leetcode 347) (MEDIUM)
    Pattern: Hashmap + Bucket Sort
    Key trigger: Top K frequent elements with optimal time (better than sort)

    Approach:
    - Build frequency map
    - Create buckets where index = frequency
    - Fill buckets with numbers based on frequency
    - Traverse buckets from end to start, collecting K elements

    Time: O(n)
    Space: O(n)
*/

/*
function topKFrequent(nums, k) {
    const freqMap = {};
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const bucket = Array(nums.length + 1).fill().map(() => []);
    for (const [num, freq] of Object.entries(freqMap)) {
        bucket[freq].push(Number(num));
    }

    const res = [];
    for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
        for (const num of bucket[i]) {
            res.push(num);
            if (res.length === k) break;
        }
    }

    return res;
}
*/
