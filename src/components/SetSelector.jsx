function SetSelector({ sets, onSelectSet, getSolvedCount }) {
  if (sets.length === 0) {
    return (
      <main className="set-selector-mode active">
        <div className="set-selector-container">
          <div className="set-empty-state">
            <div className="empty-icon">📦</div>
            <h3>No Question Sets Found</h3>
            <p>Add question sets to the <code>data/questionSets.js</code> file to get started.</p>
            <p className="hint">Check the README for instructions on creating question sets.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="set-selector-mode active">
      <div className="set-selector-container">
        <div className="set-selector-header">
          <h1 className="set-selector-title">
            <span className="glitch" data-text="SELECT A SET">SELECT A SET</span>
          </h1>
          <p className="set-selector-subtitle">Choose a question pack to practice</p>
        </div>
        
        <div className="set-grid">
          {sets.map((set, index) => {
            const solved = getSolvedCount(set.id)
            const total = set.questions.length
            const progress = total > 0 ? Math.round((solved / total) * 100) : 0

            return (
              <div
                key={set.id}
                className="set-card"
                style={{ 
                  '--set-color': set.color || '#00fff7',
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => onSelectSet(set)}
              >
                <div className="set-card-header">
                  <span className="set-icon">{set.icon || '📦'}</span>
                  <div className="set-info">
                    <div className="set-name">{set.name}</div>
                    <div className="set-difficulty">{set.difficulty || 'Mixed'}</div>
                  </div>
                </div>
                <p className="set-description">{set.description || 'Practice problems'}</p>
                <div className="set-stats">
                  <div className="set-stat">
                    <span>📝</span>
                    <span className="set-stat-value">{total}</span> problems
                  </div>
                  <div className="set-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="progress-text">{solved}/{total}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default SetSelector

