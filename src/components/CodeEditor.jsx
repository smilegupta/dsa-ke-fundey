import { useRef, useEffect, useState } from 'react'

function CodeEditor({ code, onChange, onKeyDown, placeholder }) {
  const textareaRef = useRef(null)
  const lineNumbersRef = useRef(null)
  const [lineCount, setLineCount] = useState(1)

  useEffect(() => {
    const lines = code.split('\n').length
    setLineCount(lines)
  }, [code])

  const handleScroll = () => {
    if (lineNumbersRef.current && textareaRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }

  const handleKeyDown = (e) => {
    // Handle Tab key
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd
      const newValue = code.substring(0, start) + '  ' + code.substring(end)
      onChange(newValue)
      // Set cursor position after state update
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2
      }, 0)
    }
    
    // Pass other key events up
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  return (
    <div className="playground-editor-container">
      <div className="line-numbers" ref={lineNumbersRef}>
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i + 1}>{i + 1}</div>
        ))}
      </div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        placeholder={placeholder || '// Write your code here...'}
      />
    </div>
  )
}

export default CodeEditor

