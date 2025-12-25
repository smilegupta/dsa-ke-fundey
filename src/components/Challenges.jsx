import { useState } from 'react'
import CodeEditor from './CodeEditor'

function Challenges({ 
  set, 
  currentChallenge, 
  onSelectChallenge, 
  onBack, 
  onSolved,
  isChallengeSolved,
  showToast,
  onViewTests
}) {
  const [filter, setFilter] = useState('all')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState([])
  const [testResults, setTestResults] = useState([])
  
  // Collapsible sections
  const [problemExpanded, setProblemExpanded] = useState(true)
  const [solutionExpanded, setSolutionExpanded] = useState(true)
  const [outputExpanded, setOutputExpanded] = useState(true)

  const filteredChallenges = filter === 'all' 
    ? set.questions 
    : set.questions.filter(c => c.difficulty === filter)

  const handleSelectChallenge = (challenge) => {
    onSelectChallenge(challenge)
    setCode(challenge.template)
    setOutput([])
    setTestResults([])
    setProblemExpanded(true)
    setSolutionExpanded(true)
    setOutputExpanded(true)
    showToast('Challenge loaded! Good luck! 🎯', 'info')
  }

  const resetCode = () => {
    if (currentChallenge) {
      setCode(currentChallenge.template)
      showToast('Code reset to template', 'info')
    }
  }

  const clearOutput = () => {
    setOutput([])
    setTestResults([])
  }

  const formatValue = (val) => {
    if (val === null) return 'null'
    if (val === undefined) return 'undefined'
    if (typeof val === 'object') {
      try {
        return JSON.stringify(val)
      } catch {
        return String(val)
      }
    }
    return String(val)
  }

  const runCode = (withTests = false) => {
    if (!currentChallenge) {
      showToast('Please select a challenge first!', 'error')
      return
    }

    setOutput([])
    setTestResults([])

    const logs = []
    const originalLog = console.log
    console.log = (...args) => {
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '))
    }

    try {
      eval(code)
      console.log = originalLog

      if (logs.length > 0) {
        setOutput(logs.map(log => ({ type: 'log', message: log })))
      }

      if (withTests && currentChallenge.testCases.length > 0) {
        runTestCases()
      } else if (withTests && currentChallenge.testCases.length === 0) {
        setOutput(prev => [...prev, { type: 'info', message: 'ℹ No test cases available for this challenge.' }])
      } else {
        setOutput(prev => [...prev, { type: 'success', message: '✓ Code executed successfully!' }])
      }
    } catch (error) {
      console.log = originalLog
      setOutput([{ type: 'error', message: `✗ Error: ${error.message}` }])
      showToast('Oops! There\'s an error in your code 🐛', 'error')
    }
  }

  const runTestCases = () => {
    let passed = 0
    const total = currentChallenge.testCases.length
    const results = []

    currentChallenge.testCases.forEach((test, index) => {
      try {
        const fn = new Function(`
          ${code}
          return ${test.fn}(...${JSON.stringify(test.input)});
        `)()

        const result = fn
        const expected = test.expected

        let isPass = false
        if (test.compareArrays) {
          isPass = JSON.stringify(result.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))) ===
                   JSON.stringify(expected.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))))
        } else if (Array.isArray(expected)) {
          isPass = JSON.stringify(result) === JSON.stringify(expected)
        } else {
          isPass = result === expected
        }

        results.push({
          index: index + 1,
          pass: isPass,
          input: test.input,
          expected,
          result
        })

        if (isPass) passed++
      } catch (error) {
        results.push({
          index: index + 1,
          pass: false,
          error: error.message
        })
      }
    })

    setTestResults(results)
    setOutput(prev => [...prev, { 
      type: passed === total ? 'success' : 'info', 
      message: `📊 Test Results: ${passed}/${total} passed` 
    }])

    if (passed === total && total > 0) {
      onSolved(set.id, currentChallenge.id)
    }
  }

  return (
    <main className="challenges-mode active">
      <aside className="challenge-panel">
        <div className="panel-header-row">
          <button className="back-to-sets-btn" onClick={onBack} title="Back to Sets">
            ← Back
          </button>
          <h2 className="panel-title">
            <span className="glitch" data-text="CHALLENGES">CHALLENGES</span>
          </h2>
        </div>

        <div className="difficulty-filter">
          {['all', 'easy', 'medium', 'hard'].map(diff => (
            <button
              key={diff}
              className={`filter-btn ${diff} ${filter === diff ? 'active' : ''}`}
              onClick={() => setFilter(diff)}
            >
              {diff.toUpperCase()}
            </button>
          ))}
        </div>

        <ul className="challenge-list">
          {filteredChallenges.length === 0 ? (
            <li className="no-challenges">No challenges found</li>
          ) : (
            filteredChallenges.map((challenge, index) => (
              <li
                key={challenge.id}
                className={`challenge-item ${currentChallenge?.id === challenge.id ? 'active' : ''} ${isChallengeSolved(set.id, challenge.id) ? 'solved' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleSelectChallenge(challenge)}
              >
                <div className="challenge-name">{challenge.id}. {challenge.name}</div>
                <div className="challenge-meta">
                  <span className={`challenge-difficulty ${challenge.difficulty}`}>
                    {challenge.difficulty}
                  </span>
                  {challenge.category && (
                    <span className="challenge-category">{challenge.category}</span>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </aside>

      <section className="workspace">
        {/* Problem Section */}
        <div className={`collapsible-section ${problemExpanded ? 'section-expanded' : 'section-collapsed'}`}>
          <div 
            className={`section-header ${!problemExpanded ? 'collapsed' : ''}`}
            onClick={() => setProblemExpanded(!problemExpanded)}
          >
            <div className="section-title-row">
              <span className="expand-icon">▼</span>
              <h3 className="section-title">PROBLEM</h3>
              {currentChallenge && (
                <span className={`difficulty-badge ${currentChallenge.difficulty}`}>
                  {currentChallenge.difficulty}
                </span>
              )}
            </div>
            <span className="problem-name">
              {currentChallenge ? `${currentChallenge.id}. ${currentChallenge.name}` : 'Select a Challenge'}
            </span>
          </div>
          <div className={`section-content ${problemExpanded ? 'expanded' : ''}`}>
            <div className="problem-description">
              {currentChallenge ? (
                <p dangerouslySetInnerHTML={{ __html: currentChallenge.description }} />
              ) : (
                <p>👈 Pick a challenge from the left panel to begin your DSA journey!</p>
              )}
            </div>
            {currentChallenge && (
              <div className="problem-examples">
                {currentChallenge.examples.map((ex, i) => (
                  <div key={i} className="example-block">
                    <strong>Example {i + 1}:</strong>
                    <pre>
                      Input: {ex.input}{'\n'}
                      Output: {ex.output}
                      {ex.explanation && `\nExplanation: ${ex.explanation}`}
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Solution Section */}
        <div className={`collapsible-section ${solutionExpanded ? 'section-expanded' : 'section-collapsed'}`}>
          <div 
            className={`section-header ${!solutionExpanded ? 'collapsed' : ''}`}
            onClick={(e) => {
              if (!e.target.closest('.action-btn')) {
                setSolutionExpanded(!solutionExpanded)
              }
            }}
          >
            <div className="section-title-row">
              <span className="expand-icon">▼</span>
              <h3 className="section-title">SOLUTION</h3>
              <span className="tab-label">solution.js</span>
            </div>
            <div className="editor-actions">
              <button className="action-btn reset-btn" onClick={resetCode} title="Reset Code">
                ↺ Reset
              </button>
            </div>
          </div>
          <div className={`section-content ${solutionExpanded ? 'expanded' : ''}`}>
            <div className="editor-container">
              <CodeEditor 
                code={code} 
                onChange={setCode}
                onKeyDown={(e) => {
                  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    runCode(false)
                  }
                  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Enter') {
                    runCode(true)
                  }
                }}
                placeholder="// Write your solution here..."
              />
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className={`collapsible-section ${outputExpanded ? 'section-expanded' : 'section-collapsed'}`}>
          <div 
            className={`section-header ${!outputExpanded ? 'collapsed' : ''}`}
            onClick={(e) => {
              if (!e.target.closest('.action-btn') && !e.target.closest('.clear-btn')) {
                setOutputExpanded(!outputExpanded)
              }
            }}
          >
            <div className="section-title-row">
              <span className="expand-icon">▼</span>
              <h3 className="section-title">OUTPUT</h3>
            </div>
            <div className="output-actions">
              <button className="action-btn run-btn" onClick={() => runCode(false)}>▶ RUN</button>
              <button className="action-btn test-btn" onClick={() => runCode(true)}>⚡ RUN TESTS</button>
              <button className="action-btn view-tests-btn" onClick={onViewTests}>👁 VIEW TESTS</button>
              <button className="clear-btn" onClick={clearOutput}>CLEAR</button>
            </div>
          </div>
          <div className={`section-content ${outputExpanded ? 'expanded' : ''}`}>
            <div className="output-content">
              {output.length === 0 ? (
                <div className="output-placeholder">
                  <span className="cursor-blink">_</span> Ready to execute...
                </div>
              ) : (
                output.map((item, index) => (
                  <div key={index} className={`output-line ${item.type}`}>
                    {item.type === 'log' && '> '}{item.message}
                  </div>
                ))
              )}
            </div>
            {testResults.length > 0 && (
              <div className="test-results">
                {testResults.map(result => (
                  <span 
                    key={result.index} 
                    className={`test-case ${result.pass ? 'pass' : 'fail'}`}
                    title={result.error || `Input: ${JSON.stringify(result.input)}\nExpected: ${JSON.stringify(result.expected)}\nGot: ${JSON.stringify(result.result)}`}
                  >
                    Test {result.index}: {result.pass ? '✓' : '✗'}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Challenges

