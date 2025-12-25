function TestModal({ isOpen, onClose, challenge }) {
  if (!isOpen) return null

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>📋 Test Cases</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {!challenge ? (
            <div className="no-tests">
              <p>📝 Please select a challenge first.</p>
            </div>
          ) : challenge.testCases.length === 0 ? (
            <div className="no-tests">
              <p>📝 No test cases available for this challenge.</p>
              <p>This challenge requires manual verification.</p>
            </div>
          ) : (
            challenge.testCases.map((test, index) => (
              <div key={index} className="test-case-item">
                <div className="test-case-label">Test Case {index + 1}</div>
                <div className="test-case-value">
                  <strong>Input:</strong> {JSON.stringify(test.input)}
                </div>
                <div className="test-case-value test-case-expected">
                  <strong>Expected Output:</strong> {JSON.stringify(test.expected)}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TestModal

