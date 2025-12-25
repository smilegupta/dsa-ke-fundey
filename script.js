// DSA Ke Funde - Interactive DSA Playground
// By Smile Gupta
// ===========================================

// Load challenges from external file (if available)
const challenges = window.sampleQuestions || [];

// App State
let currentChallenge = null;
let currentMode = "playground"; // 'playground' or 'challenges'
let solvedChallenges =
  JSON.parse(localStorage.getItem("solvedChallenges")) || [];

// DOM Elements - Challenges Mode
const challengeList = document.getElementById("challenge-list");
const problemTitle = document.getElementById("problem-title");
const problemDescription = document.getElementById("problem-description");
const problemExamples = document.getElementById("problem-examples");
const difficultyBadge = document.getElementById("difficulty-badge");
const codeEditor = document.getElementById("code-editor");
const lineNumbers = document.getElementById("line-numbers");
const outputContent = document.getElementById("output-content");
const testResults = document.getElementById("test-results");
const runBtn = document.getElementById("run-btn");
const runTestsBtn = document.getElementById("run-tests-btn");
const viewTestsBtn = document.getElementById("view-tests-btn");
const resetBtn = document.getElementById("reset-btn");
const clearOutput = document.getElementById("clear-output");
const solvedCount = document.getElementById("solved-count");
const filterBtns = document.querySelectorAll(".filter-btn");
const toastContainer = document.getElementById("toast-container");
const confettiCanvas = document.getElementById("confetti-canvas");
const testModal = document.getElementById("test-modal");
const closeModal = document.getElementById("close-modal");
const testCasesList = document.getElementById("test-cases-list");

// DOM Elements - Playground Mode
const playgroundEditor = document.getElementById("playground-editor");
const playgroundEditorPanel = document.getElementById(
  "playground-editor-panel"
);
const playgroundOutputPanel = document.getElementById(
  "playground-output-panel"
);
const playgroundLineNumbers = document.getElementById(
  "playground-line-numbers"
);
const playgroundOutput = document.getElementById("playground-output");
const playgroundRunBtn = document.getElementById("playground-run-btn");
const playgroundClearBtn = document.getElementById("playground-clear-btn");
const playgroundClearOutput = document.getElementById(
  "playground-clear-output"
);
const resizeHandle = document.getElementById("resize-handle");

// DOM Elements - Mode Toggle
const modeBtns = document.querySelectorAll(".mode-btn");
const playgroundView = document.getElementById("playground-view");
const challengesView = document.getElementById("challenges-view");
const statsPanel = document.getElementById("stats-panel");

// Initialize
function init() {
  setupModeToggle();
  setupPlayground();

  // Only setup challenges if there are any
  if (challenges.length > 0) {
    renderChallengeList();
    updateStats();
    setupChallengesEventListeners();
    setupCollapsibleSections();
    updateLineNumbers();
  }

  // Start in playground mode
  switchMode("playground");
}

// Mode Toggle Setup
function setupModeToggle() {
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      switchMode(mode);
    });
  });
}

// Switch between modes
function switchMode(mode) {
  currentMode = mode;

  // Update button states
  modeBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  // Toggle views
  if (mode === "playground") {
    playgroundView.classList.add("active");
    challengesView.classList.remove("active");
    document.body.classList.add("playground-active");
    updatePlaygroundLineNumbers();
  } else {
    playgroundView.classList.remove("active");
    challengesView.classList.add("active");
    document.body.classList.remove("playground-active");

    // If no challenges, show message
    if (challenges.length === 0) {
      showToast(
        "No challenges loaded. Add questions to questions/ folder.",
        "info"
      );
    }
  }
}

// ==================== PLAYGROUND MODE ====================

function setupPlayground() {
  // Run button
  playgroundRunBtn.addEventListener("click", runPlaygroundCode);

  // Clear code button
  playgroundClearBtn.addEventListener("click", () => {
    playgroundEditor.value = "";
    updatePlaygroundLineNumbers();
    showToast("Editor cleared", "info");
  });

  // Clear output button
  playgroundClearOutput.addEventListener("click", clearPlaygroundOutput);

  // Line numbers
  playgroundEditor.addEventListener("input", updatePlaygroundLineNumbers);
  playgroundEditor.addEventListener("scroll", () => {
    playgroundLineNumbers.scrollTop = playgroundEditor.scrollTop;
  });

  // Tab handling
  playgroundEditor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = playgroundEditor.selectionStart;
      const end = playgroundEditor.selectionEnd;
      playgroundEditor.value =
        playgroundEditor.value.substring(0, start) +
        "  " +
        playgroundEditor.value.substring(end);
      playgroundEditor.selectionStart = playgroundEditor.selectionEnd =
        start + 2;
      updatePlaygroundLineNumbers();
    }
  });

  // Keyboard shortcut
  playgroundEditor.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      runPlaygroundCode();
    }
  });

  // Initialize line numbers
  updatePlaygroundLineNumbers();

  // Setup resize functionality
  setupResizeHandle();
}

// Setup draggable resize handle
function setupResizeHandle() {
  let isResizing = false;
  let startX = 0;
  let startWidth = 0;

  const container = playgroundEditorPanel.parentElement;

  resizeHandle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = playgroundEditorPanel.offsetWidth;

    document.body.classList.add("resizing");
    resizeHandle.classList.add("dragging");

    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const containerWidth = container.offsetWidth;
    const minWidth = 200;
    const maxWidth = containerWidth - 200 - resizeHandle.offsetWidth;

    let newWidth = startWidth + (e.clientX - startX);
    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

    playgroundEditorPanel.style.width = `${newWidth}px`;
  });

  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;
      document.body.classList.remove("resizing");
      resizeHandle.classList.remove("dragging");
    }
  });

  // Touch support for mobile
  resizeHandle.addEventListener("touchstart", (e) => {
    isResizing = true;
    startX = e.touches[0].clientX;
    startWidth = playgroundEditorPanel.offsetWidth;

    document.body.classList.add("resizing");
    resizeHandle.classList.add("dragging");
  });

  document.addEventListener("touchmove", (e) => {
    if (!isResizing) return;

    const containerWidth = container.offsetWidth;
    const minWidth = 200;
    const maxWidth = containerWidth - 200 - resizeHandle.offsetWidth;

    let newWidth = startWidth + (e.touches[0].clientX - startX);
    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

    playgroundEditorPanel.style.width = `${newWidth}px`;
  });

  document.addEventListener("touchend", () => {
    if (isResizing) {
      isResizing = false;
      document.body.classList.remove("resizing");
      resizeHandle.classList.remove("dragging");
    }
  });

  // Double-click to reset to 50/50
  resizeHandle.addEventListener("dblclick", () => {
    playgroundEditorPanel.style.width = "50%";
    showToast("Reset to 50/50 split", "info");
  });
}

function updatePlaygroundLineNumbers() {
  const lines = playgroundEditor.value.split("\n").length;
  playgroundLineNumbers.innerHTML = Array.from(
    { length: lines },
    (_, i) => i + 1
  ).join("<br>");
}

function runPlaygroundCode() {
  const code = playgroundEditor.value;
  playgroundOutput.innerHTML = "";

  if (!code.trim()) {
    playgroundOutput.innerHTML = `
      <div class="output-placeholder">
        <span class="cursor-blink">_</span> Write some code and hit RUN...
      </div>
    `;
    return;
  }

  // Capture console.log
  const logs = [];
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;

  console.log = (...args) => {
    logs.push({ type: "log", message: formatArgs(args) });
  };
  console.error = (...args) => {
    logs.push({ type: "error", message: formatArgs(args) });
  };
  console.warn = (...args) => {
    logs.push({ type: "warn", message: formatArgs(args) });
  };

  try {
    // Execute code
    const result = eval(code);

    // Restore console
    console.log = originalLog;
    console.error = originalError;
    console.warn = originalWarn;

    // Display logs
    if (logs.length > 0) {
      logs.forEach((log) => {
        const line = document.createElement("div");
        line.className = `output-line ${
          log.type === "error" ? "error" : log.type === "warn" ? "info" : ""
        }`;
        line.innerHTML = `<span class="output-prefix">&gt;</span> ${escapeHtml(
          log.message
        )}`;
        playgroundOutput.appendChild(line);
      });
    }

    // Show return value if any (and not undefined)
    if (result !== undefined && logs.length === 0) {
      const line = document.createElement("div");
      line.className = "output-line success";
      line.innerHTML = `<span class="output-prefix">←</span> ${escapeHtml(
        formatValue(result)
      )}`;
      playgroundOutput.appendChild(line);
    }

    if (logs.length === 0 && result === undefined) {
      const line = document.createElement("div");
      line.className = "output-line success";
      line.textContent = "✓ Code executed successfully (no output)";
      playgroundOutput.appendChild(line);
    }
  } catch (error) {
    console.log = originalLog;
    console.error = originalError;
    console.warn = originalWarn;

    const line = document.createElement("div");
    line.className = "output-line error";
    line.innerHTML = `<span class="output-prefix">✗</span> ${escapeHtml(
      error.message
    )}`;
    playgroundOutput.appendChild(line);
  }
}

function clearPlaygroundOutput() {
  playgroundOutput.innerHTML = `
    <div class="output-placeholder">
      <span class="cursor-blink">_</span> Ready to execute...
    </div>
  `;
}

function formatArgs(args) {
  return args.map((arg) => formatValue(arg)).join(" ");
}

function formatValue(val) {
  if (val === null) return "null";
  if (val === undefined) return "undefined";
  if (typeof val === "object") {
    try {
      return JSON.stringify(val, null, 2);
    } catch {
      return String(val);
    }
  }
  return String(val);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ==================== CHALLENGES MODE ====================

// Setup collapsible sections
function setupCollapsibleSections() {
  const sectionHeaders = document.querySelectorAll(".section-header");

  sectionHeaders.forEach((header) => {
    header.addEventListener("click", (e) => {
      // Don't collapse if clicking on buttons
      if (e.target.closest(".action-btn") || e.target.closest(".clear-btn")) {
        return;
      }

      const targetId = header.dataset.target;
      const content = document.getElementById(targetId);
      const section = header.closest(".collapsible-section");

      if (content && section) {
        const isExpanding = !content.classList.contains("expanded");

        content.classList.toggle("expanded");
        header.classList.toggle("collapsed");
        section.classList.toggle("section-expanded", isExpanding);
        section.classList.toggle("section-collapsed", !isExpanding);
      }
    });
  });

  // Initialize section states
  document.querySelectorAll(".collapsible-section").forEach((section) => {
    const content = section.querySelector(".section-content");
    if (content && content.classList.contains("expanded")) {
      section.classList.add("section-expanded");
    } else {
      section.classList.add("section-collapsed");
    }
  });
}

// Render challenge list
function renderChallengeList(filter = "all") {
  challengeList.innerHTML = "";

  const filteredChallenges =
    filter === "all"
      ? challenges
      : challenges.filter((c) => c.difficulty === filter);

  if (filteredChallenges.length === 0) {
    challengeList.innerHTML = `
      <li class="no-challenges">
        No challenges found
      </li>
    `;
    return;
  }

  filteredChallenges.forEach((challenge, index) => {
    const li = document.createElement("li");
    li.className = `challenge-item ${
      solvedChallenges.includes(challenge.id) ? "solved" : ""
    }`;
    li.dataset.id = challenge.id;
    li.style.animationDelay = `${index * 0.05}s`;
    li.innerHTML = `
      <div class="challenge-name">${challenge.id}. ${challenge.name}</div>
      <div class="challenge-meta">
        <span class="challenge-difficulty ${challenge.difficulty}">${
      challenge.difficulty
    }</span>
        ${
          challenge.category
            ? `<span class="challenge-category">${challenge.category}</span>`
            : ""
        }
      </div>
    `;
    li.addEventListener("click", () => selectChallenge(challenge));
    challengeList.appendChild(li);
  });
}

// Select a challenge
function selectChallenge(challenge) {
  currentChallenge = challenge;

  // Update active state
  document.querySelectorAll(".challenge-item").forEach((item) => {
    item.classList.remove("active");
    if (parseInt(item.dataset.id) === challenge.id) {
      item.classList.add("active");
    }
  });

  // Update problem section
  problemTitle.textContent = `${challenge.id}. ${challenge.name}`;
  problemDescription.innerHTML = `<p>${challenge.description}</p>`;
  difficultyBadge.textContent = challenge.difficulty;
  difficultyBadge.className = `difficulty-badge ${challenge.difficulty}`;

  // Render examples
  problemExamples.innerHTML = challenge.examples
    .map(
      (ex, i) => `
      <div class="example-block">
        <strong>Example ${i + 1}:</strong>
        <pre>Input: ${ex.input}
Output: ${ex.output}${
        ex.explanation ? "\nExplanation: " + ex.explanation : ""
      }</pre>
      </div>
    `
    )
    .join("");

  // Set editor code
  codeEditor.value = challenge.template;
  updateLineNumbers();

  // Clear output
  clearOutputContent();

  // Expand all sections when a challenge is selected
  document.querySelectorAll(".section-content").forEach((content) => {
    content.classList.add("expanded");
  });
  document.querySelectorAll(".section-header").forEach((header) => {
    header.classList.remove("collapsed");
  });
  document.querySelectorAll(".collapsible-section").forEach((section) => {
    section.classList.add("section-expanded");
    section.classList.remove("section-collapsed");
  });

  showToast("Challenge loaded! Good luck! 🎯", "info");
}

// Setup event listeners for challenges mode
function setupChallengesEventListeners() {
  runBtn.addEventListener("click", () => runCode(false));
  runTestsBtn.addEventListener("click", () => runCode(true));
  viewTestsBtn.addEventListener("click", showTestCases);
  resetBtn.addEventListener("click", resetCode);
  clearOutput.addEventListener("click", clearOutputContent);
  closeModal.addEventListener("click", hideTestCases);

  // Close modal on overlay click
  testModal.addEventListener("click", (e) => {
    if (e.target === testModal) {
      hideTestCases();
    }
  });

  codeEditor.addEventListener("input", updateLineNumbers);
  codeEditor.addEventListener("scroll", syncScroll);
  codeEditor.addEventListener("keydown", handleTab);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderChallengeList(btn.dataset.difficulty);
    });
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (currentMode !== "challenges") return;

    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      runCode(false);
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "Enter") {
      runCode(true);
    }
    if (e.key === "Escape") {
      hideTestCases();
    }
  });
}

// Update line numbers
function updateLineNumbers() {
  const lines = codeEditor.value.split("\n").length;
  lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join(
    "<br>"
  );
}

// Sync scroll between line numbers and editor
function syncScroll() {
  lineNumbers.scrollTop = codeEditor.scrollTop;
}

// Handle tab key in editor
function handleTab(e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;
    codeEditor.value =
      codeEditor.value.substring(0, start) +
      "  " +
      codeEditor.value.substring(end);
    codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
    updateLineNumbers();
  }
}

// Run code
function runCode(withTests = false) {
  if (!currentChallenge) {
    showToast("Please select a challenge first!", "error");
    return;
  }

  const code = codeEditor.value;
  outputContent.innerHTML = "";
  testResults.innerHTML = "";

  // Custom console.log capture
  const logs = [];
  const originalLog = console.log;
  console.log = (...args) => {
    logs.push(
      args
        .map((arg) =>
          typeof arg === "object" ? JSON.stringify(arg) : String(arg)
        )
        .join(" ")
    );
  };

  try {
    // Execute code
    eval(code);

    // Restore console
    console.log = originalLog;

    // Display logs
    if (logs.length > 0) {
      logs.forEach((log) => {
        const line = document.createElement("div");
        line.className = "output-line";
        line.textContent = `> ${log}`;
        outputContent.appendChild(line);
      });
    }

    // Run test cases if requested
    if (withTests && currentChallenge.testCases.length > 0) {
      runTestCases(code);
    } else if (withTests && currentChallenge.testCases.length === 0) {
      const line = document.createElement("div");
      line.className = "output-line info";
      line.textContent = "ℹ No test cases available for this challenge.";
      outputContent.appendChild(line);
    } else {
      const line = document.createElement("div");
      line.className = "output-line success";
      line.textContent = "✓ Code executed successfully!";
      outputContent.appendChild(line);
    }
  } catch (error) {
    console.log = originalLog;
    const line = document.createElement("div");
    line.className = "output-line error";
    line.textContent = `✗ Error: ${error.message}`;
    outputContent.appendChild(line);
    showToast("Oops! There's an error in your code 🐛", "error");
  }
}

// Run test cases
function runTestCases(code) {
  let passed = 0;
  let total = currentChallenge.testCases.length;

  currentChallenge.testCases.forEach((test, index) => {
    try {
      // Create a function from the code and call it with test inputs
      const fn = new Function(`
        ${code}
        return ${test.fn}(...${JSON.stringify(test.input)});
      `)();

      const result = fn;
      const expected = test.expected;

      let isPass = false;
      if (test.compareArrays) {
        isPass =
          JSON.stringify(
            result.sort((a, b) =>
              JSON.stringify(a).localeCompare(JSON.stringify(b))
            )
          ) ===
          JSON.stringify(
            expected.sort((a, b) =>
              JSON.stringify(a).localeCompare(JSON.stringify(b))
            )
          );
      } else if (Array.isArray(expected)) {
        isPass = JSON.stringify(result) === JSON.stringify(expected);
      } else {
        isPass = result === expected;
      }

      const testCase = document.createElement("span");
      testCase.className = `test-case ${isPass ? "pass" : "fail"}`;
      testCase.textContent = `Test ${index + 1}: ${isPass ? "✓" : "✗"}`;
      testCase.title = `Input: ${JSON.stringify(
        test.input
      )}\nExpected: ${JSON.stringify(expected)}\nGot: ${JSON.stringify(
        result
      )}`;
      testResults.appendChild(testCase);

      if (isPass) passed++;
    } catch (error) {
      const testCase = document.createElement("span");
      testCase.className = "test-case fail";
      testCase.textContent = `Test ${index + 1}: ✗`;
      testCase.title = `Error: ${error.message}`;
      testResults.appendChild(testCase);
    }
  });

  // Summary
  const summary = document.createElement("div");
  summary.className = `output-line ${passed === total ? "success" : "info"}`;
  summary.textContent = `\n📊 Test Results: ${passed}/${total} passed`;
  outputContent.appendChild(summary);

  // Check if all passed
  if (passed === total && total > 0) {
    markAsSolved();
  }
}

// Show test cases modal
function showTestCases() {
  if (!currentChallenge) {
    showToast("Please select a challenge first!", "error");
    return;
  }

  testCasesList.innerHTML = "";

  if (currentChallenge.testCases.length === 0) {
    testCasesList.innerHTML = `
      <div class="no-tests">
        <p>📝 No test cases available for this challenge.</p>
        <p>This challenge requires manual verification.</p>
      </div>
    `;
  } else {
    currentChallenge.testCases.forEach((test, index) => {
      const testItem = document.createElement("div");
      testItem.className = "test-case-item";
      testItem.innerHTML = `
        <div class="test-case-label">Test Case ${index + 1}</div>
        <div class="test-case-value">
          <strong>Input:</strong> ${JSON.stringify(test.input)}
        </div>
        <div class="test-case-value test-case-expected">
          <strong>Expected Output:</strong> ${JSON.stringify(test.expected)}
        </div>
      `;
      testCasesList.appendChild(testItem);
    });
  }

  testModal.classList.add("active");
}

// Hide test cases modal
function hideTestCases() {
  testModal.classList.remove("active");
}

// Mark challenge as solved
function markAsSolved() {
  if (!solvedChallenges.includes(currentChallenge.id)) {
    solvedChallenges.push(currentChallenge.id);
    localStorage.setItem("solvedChallenges", JSON.stringify(solvedChallenges));

    // Update UI
    const item = document.querySelector(
      `.challenge-item[data-id="${currentChallenge.id}"]`
    );
    if (item) item.classList.add("solved");

    updateStats();
    showToast("🎉 Challenge Solved! You're on fire!", "success");
    launchConfetti();
  }
}

// Update stats display
function updateStats() {
  solvedCount.textContent = solvedChallenges.length;
}

// Reset code
function resetCode() {
  if (currentChallenge) {
    codeEditor.value = currentChallenge.template;
    updateLineNumbers();
    showToast("Code reset to template", "info");
  }
}

// Clear output
function clearOutputContent() {
  outputContent.innerHTML = `
    <div class="output-placeholder">
      <span class="cursor-blink">_</span> Ready to execute...
    </div>
  `;
  testResults.innerHTML = "";
}

// Show toast notification
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// Confetti celebration!
function launchConfetti() {
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#00fff7", "#ff00ff", "#ffd700", "#00ff88", "#ff3366"];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: -20,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * 5 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    });
  }

  let frame = 0;
  const maxFrames = 120;

  function animate() {
    if (frame >= maxFrames) {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      return;
    }

    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 2);
      ctx.restore();
    });

    frame++;
    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize the app
init();
