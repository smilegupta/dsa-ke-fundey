import { useState, useRef, useEffect } from 'react'
import CodeEditor from './CodeEditor'
import OutputPanel from './OutputPanel'

function Playground({ showToast }) {
  const [code, setCode] = useState(`// Write your JavaScript code here...

console.log('Hello, World!');

// Try some DSA:
const arr = [1, 2, 3, 4, 5];
console.log('Sum:', arr.reduce((a, b) => a + b, 0));
`)
  const [output, setOutput] = useState([])
  const [isResizing, setIsResizing] = useState(false)
  const [editorWidth, setEditorWidth] = useState(50)
  const containerRef = useRef(null)

  // Handle resize
  const handleMouseDown = (e) => {
    setIsResizing(true)
    e.preventDefault()
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !containerRef.current) return
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100
      setEditorWidth(Math.max(20, Math.min(80, newWidth)))
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isResizing])

  // Run code
  const runCode = () => {
    setOutput([])
    
    if (!code.trim()) {
      setOutput([{ type: 'placeholder', message: 'Write some code and hit RUN...' }])
      return
    }

    const logs = []
    const originalLog = console.log
    const originalError = console.error
    const originalWarn = console.warn

    console.log = (...args) => {
      logs.push({ type: 'log', message: formatArgs(args) })
    }
    console.error = (...args) => {
      logs.push({ type: 'error', message: formatArgs(args) })
    }
    console.warn = (...args) => {
      logs.push({ type: 'warn', message: formatArgs(args) })
    }

    try {
      const result = eval(code)
      
      console.log = originalLog
      console.error = originalError
      console.warn = originalWarn

      if (logs.length > 0) {
        setOutput(logs)
      } else if (result !== undefined) {
        setOutput([{ type: 'success', message: formatValue(result), prefix: '←' }])
      } else {
        setOutput([{ type: 'success', message: 'Code executed successfully (no output)' }])
      }
    } catch (error) {
      console.log = originalLog
      console.error = originalError
      console.warn = originalWarn
      setOutput([{ type: 'error', message: error.message, prefix: '✗' }])
    }
  }

  const formatArgs = (args) => args.map(formatValue).join(' ')

  const formatValue = (val) => {
    if (val === null) return 'null'
    if (val === undefined) return 'undefined'
    if (typeof val === 'object') {
      try {
        return JSON.stringify(val, null, 2)
      } catch {
        return String(val)
      }
    }
    return String(val)
  }

  const clearCode = () => {
    setCode('')
    showToast('Editor cleared', 'info')
  }

  const clearOutput = () => {
    setOutput([])
  }

  // Handle keyboard shortcut
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      runCode()
    }
  }

  return (
    <main className="playground-mode active">
      <div className="playground-container" ref={containerRef}>
        <div className="playground-editor" style={{ width: `${editorWidth}%` }}>
          <div className="playground-header">
            <div className="playground-title">
              <span className="file-icon">📄</span>
              <span>script.js</span>
            </div>
            <div className="playground-actions">
              <button className="action-btn run-btn" onClick={runCode}>
                ▶ RUN
              </button>
              <button className="action-btn reset-btn" onClick={clearCode}>
                🗑 Clear
              </button>
            </div>
          </div>
          <CodeEditor 
            code={code} 
            onChange={setCode} 
            onKeyDown={handleKeyDown}
          />
        </div>

        <div 
          className={`resize-handle ${isResizing ? 'dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onDoubleClick={() => {
            setEditorWidth(50)
            showToast('Reset to 50/50 split', 'info')
          }}
        >
          <div className="resize-line" />
          <div className="resize-dots">
            <span /><span /><span />
          </div>
          <div className="resize-line" />
        </div>

        <div className="playground-output">
          <div className="playground-header">
            <div className="playground-title">
              <span className="file-icon">📺</span>
              <span>Output</span>
            </div>
            <button className="clear-btn" onClick={clearOutput}>
              CLEAR
            </button>
          </div>
          <OutputPanel output={output} />
        </div>
      </div>
    </main>
  )
}

export default Playground

