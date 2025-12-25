// DSA Ke Funde - Sample Questions
// By Smile Gupta
// ===========================================

const sampleQuestions = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: "easy",
    category: "Arrays",
    description: `Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to target.<br><br>You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1, 2]" },
    ],
    template: `function twoSum(nums, target) {
    // Your code here
    
}

// Test your solution
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Expected: [1, 2]`,
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1], fn: "twoSum" },
      { input: [[3, 2, 4], 6], expected: [1, 2], fn: "twoSum" },
      { input: [[3, 3], 6], expected: [0, 1], fn: "twoSum" },
    ],
  },
  {
    id: 2,
    name: "Reverse String",
    difficulty: "easy",
    category: "Strings",
    description: `Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.<br><br>You must do this by modifying the input array in-place with O(1) extra memory.`,
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    template: `function reverseString(s) {
    // Modify s in-place
    
    return s;
}

// Test your solution
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));`,
    testCases: [
      {
        input: [["h", "e", "l", "l", "o"]],
        expected: ["o", "l", "l", "e", "h"],
        fn: "reverseString",
      },
      {
        input: [["H", "a", "n", "n", "a", "h"]],
        expected: ["h", "a", "n", "n", "a", "H"],
        fn: "reverseString",
      },
    ],
  },
  {
    id: 3,
    name: "Palindrome Check",
    difficulty: "easy",
    category: "Strings",
    description: `A phrase is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.<br><br>Given a string <code>s</code>, return <code>true</code> if it is a palindrome, or <code>false</code> otherwise.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
      { input: 's = "race a car"', output: "false" },
    ],
    template: `function isPalindrome(s) {
    // Your code here
    
}

// Test your solution
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false`,
    testCases: [
      {
        input: ["A man, a plan, a canal: Panama"],
        expected: true,
        fn: "isPalindrome",
      },
      { input: ["race a car"], expected: false, fn: "isPalindrome" },
      { input: [" "], expected: true, fn: "isPalindrome" },
    ],
  },
  {
    id: 4,
    name: "FizzBuzz",
    difficulty: "easy",
    category: "Logic",
    description: `Given an integer <code>n</code>, return a string array where:<br>
        • <code>"FizzBuzz"</code> if i is divisible by 3 and 5<br>
        • <code>"Fizz"</code> if i is divisible by 3<br>
        • <code>"Buzz"</code> if i is divisible by 5<br>
        • <code>i</code> (as string) if none of the above`,
    examples: [
      { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' },
      {
        input: "n = 15",
        output:
          '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
      },
    ],
    template: `function fizzBuzz(n) {
    // Your code here
    
}

// Test your solution
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));`,
    testCases: [
      { input: [5], expected: ["1", "2", "Fizz", "4", "Buzz"], fn: "fizzBuzz" },
      { input: [3], expected: ["1", "2", "Fizz"], fn: "fizzBuzz" },
    ],
  },
  {
    id: 5,
    name: "Valid Parentheses",
    difficulty: "easy",
    category: "Stack",
    description: `Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.<br><br>An input string is valid if:<br>• Open brackets must be closed by the same type of brackets.<br>• Open brackets must be closed in the correct order.`,
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    template: `function isValid(s) {
    // Your code here
    
}

// Test your solution
console.log(isValid("()"));      // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));      // false`,
    testCases: [
      { input: ["()"], expected: true, fn: "isValid" },
      { input: ["()[]{}"], expected: true, fn: "isValid" },
      { input: ["(]"], expected: false, fn: "isValid" },
      { input: ["([)]"], expected: false, fn: "isValid" },
    ],
  },
  {
    id: 6,
    name: "Maximum Subarray",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `Given an integer array <code>nums</code>, find the subarray with the largest sum, and return its sum.<br><br>A subarray is a contiguous non-empty sequence of elements within an array.`,
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    template: `function maxSubArray(nums) {
    // Your code here (Hint: Kadane's Algorithm)
    
}

// Test your solution
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([5,4,-1,7,8]));             // 23`,
    testCases: [
      {
        input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        expected: 6,
        fn: "maxSubArray",
      },
      { input: [[5, 4, -1, 7, 8]], expected: 23, fn: "maxSubArray" },
      { input: [[1]], expected: 1, fn: "maxSubArray" },
    ],
  },
  {
    id: 7,
    name: "Binary Search",
    difficulty: "easy",
    category: "Searching",
    description: `Given a sorted array of integers <code>nums</code> and a <code>target</code> value, return the index if the target is found. If not, return -1.<br><br>You must write an algorithm with O(log n) runtime complexity.`,
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    template: `function binarySearch(nums, target) {
    // Your code here
    
}

// Test your solution
console.log(binarySearch([-1,0,3,5,9,12], 9));  // 4
console.log(binarySearch([-1,0,3,5,9,12], 2));  // -1`,
    testCases: [
      { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4, fn: "binarySearch" },
      { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1, fn: "binarySearch" },
    ],
  },
  {
    id: 8,
    name: "Merge Two Sorted Arrays",
    difficulty: "easy",
    category: "Arrays",
    description: `You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in non-decreasing order. Merge them into a single sorted array and return it.`,
    examples: [
      { input: "nums1 = [1,2,4], nums2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "nums1 = [1], nums2 = []", output: "[1]" },
    ],
    template: `function mergeSortedArrays(nums1, nums2) {
    // Your code here
    
}

// Test your solution
console.log(mergeSortedArrays([1,2,4], [1,3,4])); // [1,1,2,3,4,4]
console.log(mergeSortedArrays([1], []));           // [1]`,
    testCases: [
      {
        input: [
          [1, 2, 4],
          [1, 3, 4],
        ],
        expected: [1, 1, 2, 3, 4, 4],
        fn: "mergeSortedArrays",
      },
      { input: [[1], []], expected: [1], fn: "mergeSortedArrays" },
    ],
  },
  {
    id: 9,
    name: "Climbing Stairs",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `You are climbing a staircase. It takes <code>n</code> steps to reach the top.<br><br>Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    examples: [
      { input: "n = 2", output: "2", explanation: "(1+1) or (2)" },
      { input: "n = 3", output: "3", explanation: "(1+1+1), (1+2), or (2+1)" },
    ],
    template: `function climbStairs(n) {
    // Your code here (Hint: Dynamic Programming / Fibonacci)
    
}

// Test your solution
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8`,
    testCases: [
      { input: [2], expected: 2, fn: "climbStairs" },
      { input: [3], expected: 3, fn: "climbStairs" },
      { input: [5], expected: 8, fn: "climbStairs" },
    ],
  },
  {
    id: 10,
    name: "Longest Common Prefix",
    difficulty: "easy",
    category: "Strings",
    description: `Write a function to find the longest common prefix string amongst an array of strings.<br><br>If there is no common prefix, return an empty string "".`,
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    template: `function longestCommonPrefix(strs) {
    // Your code here
    
}

// Test your solution
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // ""`,
    testCases: [
      {
        input: [["flower", "flow", "flight"]],
        expected: "fl",
        fn: "longestCommonPrefix",
      },
      {
        input: [["dog", "racecar", "car"]],
        expected: "",
        fn: "longestCommonPrefix",
      },
    ],
  },
  {
    id: 11,
    name: "Find Missing Number",
    difficulty: "easy",
    category: "Math",
    description: `Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing from the array.`,
    examples: [
      { input: "nums = [3,0,1]", output: "2" },
      { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" },
    ],
    template: `function missingNumber(nums) {
    // Your code here
    
}

// Test your solution
console.log(missingNumber([3,0,1]));             // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8`,
    testCases: [
      { input: [[3, 0, 1]], expected: 2, fn: "missingNumber" },
      {
        input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]],
        expected: 8,
        fn: "missingNumber",
      },
      { input: [[0, 1]], expected: 2, fn: "missingNumber" },
    ],
  },
  {
    id: 12,
    name: "Container With Most Water",
    difficulty: "medium",
    category: "Two Pointers",
    description: `Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }],
    template: `function maxArea(height) {
    // Your code here (Hint: Two Pointers)
    
}

// Test your solution
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));               // 1`,
    testCases: [
      { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49, fn: "maxArea" },
      { input: [[1, 1]], expected: 1, fn: "maxArea" },
    ],
  },
  {
    id: 13,
    name: "3Sum",
    difficulty: "medium",
    category: "Arrays",
    description: `Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.<br><br>Notice that the solution set must not contain duplicate triplets.`,
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
    ],
    template: `function threeSum(nums) {
    // Your code here
    
}

// Test your solution
console.log(threeSum([-1,0,1,2,-1,-4]));`,
    testCases: [
      {
        input: [[-1, 0, 1, 2, -1, -4]],
        expected: [
          [-1, -1, 2],
          [-1, 0, 1],
        ],
        fn: "threeSum",
        compareArrays: true,
      },
    ],
  },
  {
    id: 14,
    name: "Rotate Array",
    difficulty: "medium",
    category: "Arrays",
    description: `Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where k is non-negative.`,
    examples: [
      { input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]" },
      { input: "nums = [-1,-100,3,99], k = 2", output: "[3,99,-1,-100]" },
    ],
    template: `function rotate(nums, k) {
    // Modify nums in-place
    
    return nums;
}

// Test your solution
console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2));  // [3,99,-1,-100]`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5, 6, 7], 3],
        expected: [5, 6, 7, 1, 2, 3, 4],
        fn: "rotate",
      },
      {
        input: [[-1, -100, 3, 99], 2],
        expected: [3, 99, -1, -100],
        fn: "rotate",
      },
    ],
  },
  {
    id: 15,
    name: "Longest Substring Without Repeating",
    difficulty: "medium",
    category: "Sliding Window",
    description: `Given a string <code>s</code>, find the length of the longest substring without repeating characters.`,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc"',
      },
      { input: 's = "bbbbb"', output: "1" },
    ],
    template: `function lengthOfLongestSubstring(s) {
    // Your code here (Hint: Sliding Window)
    
}

// Test your solution
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3`,
    testCases: [
      { input: ["abcabcbb"], expected: 3, fn: "lengthOfLongestSubstring" },
      { input: ["bbbbb"], expected: 1, fn: "lengthOfLongestSubstring" },
      { input: ["pwwkew"], expected: 3, fn: "lengthOfLongestSubstring" },
    ],
  },
  {
    id: 16,
    name: "Merge Intervals",
    difficulty: "medium",
    category: "Arrays",
    description: `Given an array of intervals where <code>intervals[i] = [start_i, end_i]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    template: `function mergeIntervals(intervals) {
    // Your code here
    
}

// Test your solution
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));`,
    testCases: [
      {
        input: [
          [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
          ],
        ],
        expected: [
          [1, 6],
          [8, 10],
          [15, 18],
        ],
        fn: "mergeIntervals",
      },
      {
        input: [
          [
            [1, 4],
            [4, 5],
          ],
        ],
        expected: [[1, 5]],
        fn: "mergeIntervals",
      },
    ],
  },
  {
    id: 17,
    name: "Product Except Self",
    difficulty: "medium",
    category: "Arrays",
    description: `Given an integer array <code>nums</code>, return an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of nums except <code>nums[i]</code>.<br><br>You must write an algorithm that runs in O(n) time and without using the division operation.`,
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }],
    template: `function productExceptSelf(nums) {
    // Your code here
    
}

// Test your solution
console.log(productExceptSelf([1,2,3,4]));   // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]`,
    testCases: [
      {
        input: [[1, 2, 3, 4]],
        expected: [24, 12, 8, 6],
        fn: "productExceptSelf",
      },
      {
        input: [[-1, 1, 0, -3, 3]],
        expected: [0, 0, 9, 0, 0],
        fn: "productExceptSelf",
      },
    ],
  },
  {
    id: 18,
    name: "Trapping Rain Water",
    difficulty: "hard",
    category: "Two Pointers",
    description: `Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }],
    template: `function trap(height) {
    // Your code here
    
}

// Test your solution
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5]));              // 9`,
    testCases: [
      {
        input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
        expected: 6,
        fn: "trap",
      },
      { input: [[4, 2, 0, 3, 2, 5]], expected: 9, fn: "trap" },
    ],
  },
  {
    id: 19,
    name: "Quick Sort",
    difficulty: "medium",
    category: "Sorting",
    description: `Implement the Quick Sort algorithm to sort an array of integers in ascending order.`,
    examples: [{ input: "arr = [3,6,8,10,1,2,1]", output: "[1,1,2,3,6,8,10]" }],
    template: `function quickSort(arr) {
    // Your code here
    
}

// Test your solution
console.log(quickSort([3,6,8,10,1,2,1]));
console.log(quickSort([5,2,9,1,7,6,3]));`,
    testCases: [
      {
        input: [[3, 6, 8, 10, 1, 2, 1]],
        expected: [1, 1, 2, 3, 6, 8, 10],
        fn: "quickSort",
      },
      {
        input: [[5, 2, 9, 1, 7, 6, 3]],
        expected: [1, 2, 3, 5, 6, 7, 9],
        fn: "quickSort",
      },
    ],
  },
  {
    id: 20,
    name: "LRU Cache",
    difficulty: "hard",
    category: "Design",
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.<br><br>Implement the <code>LRUCache</code> class with <code>get(key)</code> and <code>put(key, value)</code> methods.`,
    examples: [
      {
        input: "LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)",
        output: "1, -1",
      },
    ],
    template: `class LRUCache {
    constructor(capacity) {
        // Your code here
    }
    
    get(key) {
        // Your code here
    }
    
    put(key, value) {
        // Your code here
    }
}

// Test your solution
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));  // 1
cache.put(3, 3);            // evicts key 2
console.log(cache.get(2));  // -1
cache.put(4, 4);            // evicts key 1
console.log(cache.get(1));  // -1
console.log(cache.get(3));  // 3
console.log(cache.get(4));  // 4`,
    testCases: [], // Complex class-based test - manual verification
  },
];

// Export for use in main script
if (typeof window !== "undefined") {
  window.sampleQuestions = sampleQuestions;
}

