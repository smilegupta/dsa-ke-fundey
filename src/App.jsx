import { useState, useEffect } from 'react'
import Header from './components/Header'
import Playground from './components/Playground'
import SetSelector from './components/SetSelector'
import Challenges from './components/Challenges'
import TestModal from './components/TestModal'
import Toast from './components/Toast'
import Confetti from './components/Confetti'
import { questionSets } from './data/questionSets'

function App() {
  // App modes: 'playground', 'set-selector', 'challenges'
  const [mode, setMode] = useState('playground')
  const [currentSet, setCurrentSet] = useState(null)
  const [currentChallenge, setCurrentChallenge] = useState(null)
  const [solvedChallenges, setSolvedChallenges] = useState(() => {
    const saved = localStorage.getItem('solvedChallenges')
    return saved ? JSON.parse(saved) : {}
  })
  
  // Toast notifications
  const [toasts, setToasts] = useState([])
  
  // Test modal
  const [showTestModal, setShowTestModal] = useState(false)
  
  // Confetti
  const [showConfetti, setShowConfetti] = useState(false)

  // Save solved challenges to localStorage
  useEffect(() => {
    localStorage.setItem('solvedChallenges', JSON.stringify(solvedChallenges))
  }, [solvedChallenges])

  // Show toast notification
  const showToast = (message, type = 'info') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }

  // Handle mode switch
  const handleModeSwitch = (newMode) => {
    if (newMode === 'challenges') {
      setMode('set-selector')
    } else {
      setMode(newMode)
    }
  }

  // Select a question set
  const handleSelectSet = (set) => {
    setCurrentSet(set)
    setCurrentChallenge(null)
    setMode('challenges')
    showToast(`Loaded "${set.name}" - ${set.questions.length} problems 🎯`, 'success')
  }

  // Go back to set selector
  const handleBackToSets = () => {
    setCurrentSet(null)
    setCurrentChallenge(null)
    setMode('set-selector')
  }

  // Mark challenge as solved
  const handleSolved = (setId, challengeId) => {
    const setKey = `set_${setId}`
    setSolvedChallenges(prev => {
      const setProgress = prev[setKey] || []
      if (!setProgress.includes(challengeId)) {
        return {
          ...prev,
          [setKey]: [...setProgress, challengeId]
        }
      }
      return prev
    })
    showToast('🎉 Challenge Solved! You\'re on fire!', 'success')
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  // Get solved count for a set
  const getSolvedCount = (setId) => {
    const setKey = `set_${setId}`
    return (solvedChallenges[setKey] || []).length
  }

  // Check if challenge is solved
  const isChallengeSolved = (setId, challengeId) => {
    const setKey = `set_${setId}`
    return (solvedChallenges[setKey] || []).includes(challengeId)
  }

  return (
    <div className="app">
      {/* Background effects */}
      <div className="scanlines" />
      <div className="grid-bg" />

      {/* Header */}
      <Header 
        mode={mode}
        onModeSwitch={handleModeSwitch}
        currentSet={currentSet}
        solvedCount={currentSet ? getSolvedCount(currentSet.id) : 0}
      />

      {/* Main Content */}
      {mode === 'playground' && (
        <Playground showToast={showToast} />
      )}

      {mode === 'set-selector' && (
        <SetSelector 
          sets={questionSets}
          onSelectSet={handleSelectSet}
          getSolvedCount={getSolvedCount}
        />
      )}

      {mode === 'challenges' && currentSet && (
        <Challenges
          set={currentSet}
          currentChallenge={currentChallenge}
          onSelectChallenge={setCurrentChallenge}
          onBack={handleBackToSets}
          onSolved={handleSolved}
          isChallengeSolved={isChallengeSolved}
          showToast={showToast}
          onViewTests={() => setShowTestModal(true)}
        />
      )}

      {/* Test Cases Modal */}
      <TestModal
        isOpen={showTestModal}
        onClose={() => setShowTestModal(false)}
        challenge={currentChallenge}
      />

      {/* Toast Container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && <Confetti />}
    </div>
  )
}

export default App

