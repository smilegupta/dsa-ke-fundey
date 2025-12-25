# 🚀 DSA Ke Funde

> **A cyberpunk-themed JavaScript playground for learning and practicing Data Structures & Algorithms**

Created with ❤️ by **Smile Gupta**

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

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

### 🎯 Challenges Mode

- **Question Sets**: Themed question packs to choose from
- **Multiple Difficulties**: Easy, Medium, and Hard
- **Categories**: Arrays, Strings, Math, DP, and more
- **Interactive Test Cases**: Run and validate your solutions
- **Progress Tracking**: Solved problems saved to localStorage

### 🎨 Cyberpunk Aesthetics

- Neon glow effects (cyan, pink, green)
- Scanline overlay animation
- Glitch text effects
- Dark theme optimized for long coding sessions
- Confetti celebration on solving challenges! 🎉

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
