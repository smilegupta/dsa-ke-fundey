// DSA Ke Funde - Question Sets
// By Smile Gupta
// ===========================================
// Organize your questions into themed sets/packs

const questionSets = [
  // ========================================
  // SET 1: Arrays Fundamentals
  // ========================================
  {
    id: "arrays-basics",
    name: "Arrays Fundamentals",
    icon: "📊",
    description: "Master array manipulation, searching, and common patterns",
    difficulty: "Beginner",
    color: "#00ff88", // green
    questions: [
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
        name: "Find Maximum",
        difficulty: "easy",
        category: "Arrays",
        description: `Write a function to find the maximum number in an array.`,
        examples: [
          { input: "[3, 1, 4, 1, 5, 9, 2, 6]", output: "9" },
          { input: "[-1, -5, -2]", output: "-1" },
        ],
        template: `function findMax(arr) {
    // Your code here
    
}

// Test your solution
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6])); // 9
console.log(findMax([-1, -5, -2])); // -1`,
        testCases: [
          { input: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: 9, fn: "findMax" },
          { input: [[-1, -5, -2]], expected: -1, fn: "findMax" },
          { input: [[42]], expected: 42, fn: "findMax" },
        ],
      },
      {
        id: 3,
        name: "Remove Duplicates",
        difficulty: "easy",
        category: "Arrays",
        description: `Given an array, return a new array with all duplicate values removed.`,
        examples: [
          { input: "[1, 2, 2, 3, 4, 4, 5]", output: "[1, 2, 3, 4, 5]" },
          { input: "[1, 1, 1, 1]", output: "[1]" },
        ],
        template: `function removeDuplicates(arr) {
    // Your code here
    
}

// Test your solution
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1])); // [1]`,
        testCases: [
          {
            input: [[1, 2, 2, 3, 4, 4, 5]],
            expected: [1, 2, 3, 4, 5],
            fn: "removeDuplicates",
          },
          { input: [[1, 1, 1, 1]], expected: [1], fn: "removeDuplicates" },
        ],
      },
      {
        id: 4,
        name: "Merge Sorted Arrays",
        difficulty: "medium",
        category: "Arrays",
        description: `Given two sorted arrays, merge them into a single sorted array.`,
        examples: [
          {
            input: "nums1 = [1,3,5], nums2 = [2,4,6]",
            output: "[1,2,3,4,5,6]",
          },
        ],
        template: `function mergeSorted(nums1, nums2) {
    // Your code here
    
}

// Test your solution
console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]`,
        testCases: [
          {
            input: [
              [1, 3, 5],
              [2, 4, 6],
            ],
            expected: [1, 2, 3, 4, 5, 6],
            fn: "mergeSorted",
          },
          { input: [[1], [2]], expected: [1, 2], fn: "mergeSorted" },
        ],
      },
      {
        id: 5,
        name: "Maximum Subarray",
        difficulty: "medium",
        category: "Arrays",
        description: `Given an integer array <code>nums</code>, find the contiguous subarray which has the largest sum and return its sum. This is known as Kadane's Algorithm.`,
        examples: [
          {
            input: "[-2,1,-3,4,-1,2,1,-5,4]",
            output: "6",
            explanation: "[4,-1,2,1] has the largest sum = 6",
          },
          { input: "[1]", output: "1" },
        ],
        template: `function maxSubArray(nums) {
    // Your code here (Kadane's Algorithm)
    
}

// Test your solution
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1`,
        testCases: [
          {
            input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
            expected: 6,
            fn: "maxSubArray",
          },
          { input: [[1]], expected: 1, fn: "maxSubArray" },
          { input: [[-1]], expected: -1, fn: "maxSubArray" },
        ],
      },
    ],
  },

  // ========================================
  // SET 2: String Manipulation
  // ========================================
  {
    id: "string-mastery",
    name: "String Mastery",
    icon: "✨",
    description: "Work with strings, patterns, and text manipulation",
    difficulty: "Beginner",
    color: "#ff00ff", // pink
    questions: [
      {
        id: 1,
        name: "Reverse String",
        difficulty: "easy",
        category: "Strings",
        description: `Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.`,
        examples: [
          {
            input: 's = ["h","e","l","l","o"]',
            output: '["o","l","l","e","h"]',
          },
        ],
        template: `function reverseString(s) {
    // Modify s in-place
    
    return s;
}

// Test your solution
console.log(reverseString(["h","e","l","l","o"]));`,
        testCases: [
          {
            input: [["h", "e", "l", "l", "o"]],
            expected: ["o", "l", "l", "e", "h"],
            fn: "reverseString",
          },
        ],
      },
      {
        id: 2,
        name: "Palindrome Check",
        difficulty: "easy",
        category: "Strings",
        description: `Given a string <code>s</code>, return <code>true</code> if it is a palindrome (reads same forwards and backwards), ignoring case and non-alphanumeric characters.`,
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
        ],
      },
      {
        id: 3,
        name: "Valid Anagram",
        difficulty: "easy",
        category: "Strings",
        description: `Given two strings <code>s</code> and <code>t</code>, return true if t is an anagram of s, and false otherwise.`,
        examples: [
          { input: 's = "anagram", t = "nagaram"', output: "true" },
          { input: 's = "rat", t = "car"', output: "false" },
        ],
        template: `function isAnagram(s, t) {
    // Your code here
    
}

// Test your solution
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false`,
        testCases: [
          { input: ["anagram", "nagaram"], expected: true, fn: "isAnagram" },
          { input: ["rat", "car"], expected: false, fn: "isAnagram" },
        ],
      },
      {
        id: 4,
        name: "Longest Palindromic Substring",
        difficulty: "hard",
        category: "Strings",
        description: `Given a string <code>s</code>, return the longest palindromic substring in s.`,
        examples: [
          {
            input: 's = "babad"',
            output: '"bab"',
            explanation: '"aba" is also valid',
          },
          { input: 's = "cbbd"', output: '"bb"' },
        ],
        template: `function longestPalindrome(s) {
    // Your code here
    
}

// Test your solution
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"`,
        testCases: [], // Multiple valid answers, manual check
      },
    ],
  },

  // ========================================
  // SET 3: Classic Algorithms
  // ========================================
  {
    id: "classic-algorithms",
    name: "Classic Algorithms",
    icon: "🧮",
    description: "Essential algorithms every developer should know",
    difficulty: "Intermediate",
    color: "#00fff7", // cyan
    questions: [
      {
        id: 1,
        name: "FizzBuzz",
        difficulty: "easy",
        category: "Logic",
        description: `Given an integer n, return a string array answer where:<br>
• answer[i] == "FizzBuzz" if i is divisible by 3 and 5<br>
• answer[i] == "Fizz" if i is divisible by 3<br>
• answer[i] == "Buzz" if i is divisible by 5<br>
• answer[i] == i (as string) otherwise`,
        examples: [
          {
            input: "n = 5",
            output: '["1","2","Fizz","4","Buzz"]',
          },
        ],
        template: `function fizzBuzz(n) {
    // Your code here
    
}

// Test your solution
console.log(fizzBuzz(15));`,
        testCases: [
          {
            input: [5],
            expected: ["1", "2", "Fizz", "4", "Buzz"],
            fn: "fizzBuzz",
          },
        ],
      },
      {
        id: 2,
        name: "Fibonacci Sequence",
        difficulty: "easy",
        category: "Math",
        description: `Given n, return the nth Fibonacci number. F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)`,
        examples: [
          { input: "n = 10", output: "55" },
          { input: "n = 0", output: "0" },
        ],
        template: `function fibonacci(n) {
    // Your code here
    
}

// Test your solution
console.log(fibonacci(10)); // 55
console.log(fibonacci(0));  // 0`,
        testCases: [
          { input: [10], expected: 55, fn: "fibonacci" },
          { input: [0], expected: 0, fn: "fibonacci" },
          { input: [1], expected: 1, fn: "fibonacci" },
        ],
      },
      {
        id: 3,
        name: "Binary Search",
        difficulty: "medium",
        category: "Searching",
        description: `Given a sorted array and a target, return the index of target. If not found, return -1.`,
        examples: [
          { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
          { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
        ],
        template: `function binarySearch(nums, target) {
    // Your code here
    
}

// Test your solution
console.log(binarySearch([-1,0,3,5,9,12], 9)); // 4
console.log(binarySearch([-1,0,3,5,9,12], 2)); // -1`,
        testCases: [
          {
            input: [[-1, 0, 3, 5, 9, 12], 9],
            expected: 4,
            fn: "binarySearch",
          },
          {
            input: [[-1, 0, 3, 5, 9, 12], 2],
            expected: -1,
            fn: "binarySearch",
          },
        ],
      },
      {
        id: 4,
        name: "Climbing Stairs",
        difficulty: "medium",
        category: "Dynamic Programming",
        description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
        examples: [
          { input: "n = 2", output: "2", explanation: "1+1 or 2" },
          { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, or 2+1" },
        ],
        template: `function climbStairs(n) {
    // Your code here
    
}

// Test your solution
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3`,
        testCases: [
          { input: [2], expected: 2, fn: "climbStairs" },
          { input: [3], expected: 3, fn: "climbStairs" },
          { input: [5], expected: 8, fn: "climbStairs" },
        ],
      },
    ],
  },

  // ========================================
  // SET 4: Data Structures
  // ========================================
  {
    id: "data-structures",
    name: "Data Structures",
    icon: "🏗️",
    description: "Stacks, Queues, Linked Lists, and more",
    difficulty: "Intermediate",
    color: "#ffd700", // gold
    questions: [
      {
        id: 1,
        name: "Valid Parentheses",
        difficulty: "medium",
        category: "Stacks",
        description: `Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if brackets are closed in the correct order.`,
        examples: [
          { input: 's = "()"', output: "true" },
          { input: 's = "()[]{}"', output: "true" },
          { input: 's = "(]"', output: "false" },
        ],
        template: `function isValid(s) {
    // Your code here
    
}

// Test your solution
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false`,
        testCases: [
          { input: ["()"], expected: true, fn: "isValid" },
          { input: ["()[]{}"], expected: true, fn: "isValid" },
          { input: ["(]"], expected: false, fn: "isValid" },
          { input: ["([)]"], expected: false, fn: "isValid" },
        ],
      },
      {
        id: 2,
        name: "Implement Queue using Stacks",
        difficulty: "medium",
        category: "Stacks",
        description: `Implement a FIFO queue using only two stacks. The queue should support push, pop, peek, and empty operations.`,
        examples: [
          {
            input: "push(1), push(2), peek(), pop(), empty()",
            output: "null, null, 1, 1, false",
          },
        ],
        template: `class MyQueue {
    constructor() {
        // Initialize your data structures
    }
    
    push(x) {
        // Push element to back of queue
    }
    
    pop() {
        // Remove and return front element
    }
    
    peek() {
        // Return front element without removing
    }
    
    empty() {
        // Return true if queue is empty
    }
}

// Test your solution
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 1
console.log(queue.pop()); // 1
console.log(queue.empty()); // false`,
        testCases: [], // Class-based, manual verification
      },
      {
        id: 3,
        name: "Reverse Linked List",
        difficulty: "easy",
        category: "Linked Lists",
        description: `Given the head of a singly linked list, reverse the list and return the reversed list.`,
        examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }],
        template: `// Definition for singly-linked list node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    // Your code here
    
}

// Helper to create list from array
function createList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper to convert list to array
function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Test your solution
const list = createList([1, 2, 3, 4, 5]);
console.log(listToArray(reverseList(list))); // [5, 4, 3, 2, 1]`,
        testCases: [], // Complex structure, manual verification
      },
    ],
  },

  // ========================================
  // SET 5: Two Pointers & Sliding Window
  // ========================================
  {
    id: "two-pointers",
    name: "Two Pointers & Sliding Window",
    icon: "👆👆",
    description: "Master the two-pointer technique for optimal solutions",
    difficulty: "Advanced",
    color: "#ff3366", // red
    questions: [
      {
        id: 1,
        name: "Container With Most Water",
        difficulty: "medium",
        category: "Two Pointers",
        description: `Given n non-negative integers representing heights of lines, find two lines that together with the x-axis form a container that holds the most water.`,
        examples: [
          {
            input: "height = [1,8,6,2,5,4,8,3,7]",
            output: "49",
          },
        ],
        template: `function maxArea(height) {
    // Your code here
    
}

// Test your solution
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49`,
        testCases: [
          {
            input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
            expected: 49,
            fn: "maxArea",
          },
          { input: [[1, 1]], expected: 1, fn: "maxArea" },
        ],
      },
      {
        id: 2,
        name: "3Sum",
        difficulty: "medium",
        category: "Two Pointers",
        description: `Given an array nums, return all triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.`,
        examples: [
          {
            input: "nums = [-1,0,1,2,-1,-4]",
            output: "[[-1,-1,2],[-1,0,1]]",
          },
        ],
        template: `function threeSum(nums) {
    // Your code here
    
}

// Test your solution
console.log(threeSum([-1,0,1,2,-1,-4]));`,
        testCases: [], // Multiple valid orderings
      },
      {
        id: 3,
        name: "Trapping Rain Water",
        difficulty: "hard",
        category: "Two Pointers",
        description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
        examples: [
          {
            input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
            output: "6",
          },
        ],
        template: `function trap(height) {
    // Your code here
    
}

// Test your solution
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6`,
        testCases: [
          {
            input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
            expected: 6,
            fn: "trap",
          },
          { input: [[4, 2, 0, 3, 2, 5]], expected: 9, fn: "trap" },
        ],
      },
    ],
  },
];

// Export for React
export { questionSets }
