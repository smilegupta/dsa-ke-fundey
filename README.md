# 🚀 DSA Ke Funde

> **A JavaScript playground for learning and practicing Data Structures & Algorithms**

Created with ❤️ by **Smile Gupta**

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🧠 About

**DSA Ke Funde** is a simple, hands-on platform to practice Data Structures and Algorithms using JavaScript.

It focuses on:

- Clear problem statements
- Writing real code
- Running test cases
- Building strong fundamentals step by step

This is meant to feel like a **thinking space**, not a grind.

---

## ✨ Features

### 🎮 Dual Mode Interface

| Mode              | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| ⚡ **Playground** | Simple split-view JS compiler - write code on left, see output on right |
| 🎯 **Challenges** | Full DSA practice environment with problems, test cases, and solutions  |

### 🛠️ Playground Mode

- **Monaco Editor** (same editor that powers VS Code!)
  - Syntax highlighting
  - IntelliSense / Autocomplete
  - Bracket matching & colorization
  - Minimap navigation
  - Code folding
- Split view editor and output console
- Resizable panels with drag handle
- Keyboard shortcut to run code (`Ctrl/Cmd + Enter`)

### 🎯 Challenges Mode

- Curated question sets
- Easy, Medium, and Hard problems
- Categories like Arrays, Strings, Math, DP, and more
- Run and validate solutions with test cases
- Progress saved using localStorage

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/smilegupta/dsa-ke-funde.git

# Navigate to the project
cd dsa-ke-funde

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
DSA Ke Funde/
├── index.html              # Entry HTML
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── .gitignore              # Git ignore rules
├── README.md               # Documentation
├── public/                 # Static assets
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main App component
    ├── components/
    │   ├── Header.jsx      # Header with logo & mode toggle
    │   ├── Playground.jsx  # Simple JS playground
    │   ├── SetSelector.jsx # Question set picker
    │   ├── Challenges.jsx  # Challenge workspace
    │   ├── CodeEditor.jsx  # Reusable code editor
    │   ├── OutputPanel.jsx # Output display
    │   ├── TestModal.jsx   # Test cases modal
    │   ├── Toast.jsx       # Toast notifications
    │   └── Confetti.jsx    # Celebration effect
    ├── data/
    │   └── questionSets.js # Question sets data
    └── styles/
        └── index.css       # All styles
```

---

## 📝 Adding Custom Question Sets

Edit `src/data/questionSets.js`:

```javascript
export const questionSets = [
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
```

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

## 🛠️ Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## 🌟 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Monaco Editor** - Professional code editor (powers VS Code)
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **localStorage** - Progress persistence
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

- Add new question sets
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
