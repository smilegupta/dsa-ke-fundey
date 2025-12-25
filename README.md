# 🚀 DSA Ke Funde

> **A cyberpunk-themed JavaScript playground for learning and practicing Data Structures & Algorithms**

Created with ❤️ by **Smile Gupta**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

### 🎮 Dual Mode Interface

| Mode              | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| ⚡ **Playground** | Simple split-view JS compiler - write code on left, see output on right |
| 🎯 **Challenges** | Full DSA practice environment with problems, test cases, and solutions  |

### 🛠️ Playground Mode

- **Clean Split View**: Code editor on the left, output console on the right
- **Resizable Panels**: Drag the divider to adjust editor/output sizes
- **Line Numbers**: Auto-updating line numbers
- **Tab Support**: Proper indentation with Tab key
- **Keyboard Shortcuts**: `Ctrl/Cmd + Enter` to run code
- **Double-click Divider**: Reset to 50/50 split

### 🎯 Challenges Mode

- **20+ DSA Problems**: Easy, Medium, and Hard difficulties
- **Categories**: Arrays, Strings, Math, Sorting, Dynamic Programming, and more
- **Interactive Test Cases**: Run and validate your solutions
- **Progress Tracking**: Solved problems saved to local storage
- **Collapsible Sections**: Problem, Solution, and Output panels expand/collapse

### 🎨 Cyberpunk Aesthetics

- Neon glow effects (cyan, pink, green)
- Scanline overlay animation
- Glitch text effects
- Dark theme optimized for long coding sessions
- Confetti celebration on solving challenges! 🎉

---

## 🚀 Quick Start

### Option 1: Direct Open

Simply double-click `index.html` or drag it into your browser.

### Option 2: Live Server

```bash
# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server

# Or using Python
python -m http.server 8000

# Or using Node.js
npx serve
```

---

## 📁 Project Structure

```
DSA Ke Funde/
├── index.html              # Main HTML file
├── styles.css              # Cyberpunk styling
├── script.js               # App logic & functionality
├── questions/
│   └── question-sets.js    # Question sets/packs
└── README.md               # You're reading this!
```

---

## 📝 Adding Custom Question Sets

Edit `questions/question-sets.js` to create themed question packs:

```javascript
const questionSets = [
  {
    id: "my-custom-set", // Unique ID
    name: "My Custom Set", // Display name
    icon: "🚀", // Emoji icon
    description: "Description of your question set",
    difficulty: "Beginner", // Beginner | Intermediate | Advanced
    color: "#00ff88", // Theme color (hex)
    questions: [
      {
        id: 1,
        name: "Problem Name",
        difficulty: "easy", // easy | medium | hard
        category: "Arrays",
        description: "Problem description with <code>HTML</code> support...",
        examples: [
          {
            input: "[1, 2, 3]",
            output: "6",
            explanation: "1 + 2 + 3 = 6",
          },
        ],
        template: `function solution(arr) {
    // Your code here
}

// Test your solution
console.log(solution([1, 2, 3]));`,
        testCases: [
          {
            fn: "solution",
            input: [[1, 2, 3]],
            expected: 6,
          },
        ],
      },
      // Add more questions...
    ],
  },
  // Add more sets...
];

window.questionSets = questionSets;
```

### Question Set Properties

| Property      | Description                          |
| ------------- | ------------------------------------ |
| `id`          | Unique identifier (used for storage) |
| `name`        | Display name shown on card           |
| `icon`        | Emoji shown on card                  |
| `description` | Brief description of the set         |
| `difficulty`  | Overall difficulty level             |
| `color`       | Theme color for the card             |
| `questions`   | Array of question objects            |

---

## ⌨️ Keyboard Shortcuts

| Shortcut                   | Action                                |
| -------------------------- | ------------------------------------- |
| `Ctrl/Cmd + Enter`         | Run code                              |
| `Ctrl/Cmd + Shift + Enter` | Run with test cases (Challenges mode) |
| `Tab`                      | Insert 2 spaces                       |
| `Escape`                   | Close test cases modal                |

---

## 🎯 Included Question Sets

| Set                                | Problems | Difficulty   | Topics                          |
| ---------------------------------- | -------- | ------------ | ------------------------------- |
| 📊 Arrays Fundamentals             | 5        | Beginner     | Two Sum, Max Subarray, etc.     |
| ✨ String Mastery                  | 4        | Beginner     | Palindrome, Anagram, etc.       |
| 🧮 Classic Algorithms              | 4        | Intermediate | FizzBuzz, Binary Search, DP     |
| 🏗️ Data Structures                 | 3        | Intermediate | Stacks, Queues, Linked Lists    |
| 👆👆 Two Pointers & Sliding Window | 3        | Advanced     | Container, 3Sum, Trapping Water |

---

## 🌟 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **Local Storage** - Progress persistence
- **Google Fonts** - JetBrains Mono, Orbitron, Poppins

---

## 🎥 Perfect For

- 📺 YouTube coding tutorials
- 🎓 DSA learning and practice
- 💻 Quick JavaScript experiments
- 🏆 Coding interview preparation
- 📚 Teaching programming concepts

---

## 🤝 Contributing

Feel free to:

- Add new challenges
- Improve styling
- Fix bugs
- Suggest features

---

## 📄 License

MIT License - Feel free to use and modify!

---

<p align="center">
  <strong>Happy Coding! 🚀</strong>
  <br>
  Made with 💖 by <a href="https://github.com/smilegupta">Smile Gupta</a>
</p>
