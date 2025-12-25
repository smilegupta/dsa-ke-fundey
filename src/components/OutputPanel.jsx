function OutputPanel({ output }) {
  if (output.length === 0) {
    return (
      <div className="playground-output-content">
        <div className="output-placeholder">
          <span className="cursor-blink">_</span> Ready to execute...
        </div>
      </div>
    )
  }

  return (
    <div className="playground-output-content">
      {output.map((item, index) => {
        if (item.type === 'placeholder') {
          return (
            <div key={index} className="output-placeholder">
              <span className="cursor-blink">_</span> {item.message}
            </div>
          )
        }

        const className = `output-line ${item.type === 'error' ? 'error' : ''} ${item.type === 'success' ? 'success' : ''} ${item.type === 'warn' ? 'info' : ''}`
        const prefix = item.prefix || (item.type === 'log' ? '>' : item.type === 'error' ? '✗' : '>')

        return (
          <div key={index} className={className}>
            <span className="output-prefix">{prefix}</span> {item.message}
          </div>
        )
      })}
    </div>
  )
}

export default OutputPanel

