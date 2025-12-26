function Header({ mode, onModeSwitch, currentSet, solvedCount }) {
  const isChallengeModeActive = mode === 'set-selector' || mode === 'challenges'

  return (
    <header>
      <div className="logo-section">
        <div className="logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">DSA</span>
          <span className="logo-accent">Ke Funde</span>
          <span className="logo-bracket">]</span>
        </div>
        <div className="branding">
          <span className="by-text">by</span>
          <span className="author-name">Smile Gupta</span>
        </div>
      </div>

      <div className="mode-toggle">
        <button
          className={`mode-btn ${mode === 'playground' ? 'active' : ''}`}
          onClick={() => onModeSwitch('playground')}
          title="Simple JS Playground"
        >
          <span className="mode-icon">⚡</span>
          <span className="mode-label">Playground</span>
        </button>
        <button
          className={`mode-btn ${isChallengeModeActive ? 'active' : ''}`}
          onClick={() => onModeSwitch('challenges')}
          title="DSA Challenges"
        >
          <span className="mode-icon">🎯</span>
          <span className="mode-label">Challenges</span>
        </button>
      </div>

      {isChallengeModeActive && (
      <div className="stats" id="stats-panel">
        {currentSet && (
          <div className="stat-item">
            <span className="stat-label">SET</span>
            <span className="stat-value set-name">{currentSet.name}</span>
          </div>
        )}
        <div className="stat-item">
          <span className="stat-label">SOLVED</span>
          <span className="stat-value">{solvedCount}</span>
        </div>
      </div>
      )}
    </header>
  )
}

export default Header

