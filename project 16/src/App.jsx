import { useState } from 'react'
import './App.css'

function App() {
  const [clickSequence, setClickSequence] = useState([]);
  const [showFinal, setShowFinal] = useState(false);
  const [boxes, setBoxes] = useState(Array(9).fill(false));

  const handleBoxClick = (index) => {
    if (showFinal || boxes[index]) return;

    const newBoxes = [...boxes];
    newBoxes[index] = true;
    setBoxes(newBoxes);
    
    const newSequence = [...clickSequence, index];
    setClickSequence(newSequence);

    if (newSequence.length === 9) {
      setShowFinal(true);
      animateSequence(newSequence);
    }
  };

  const animateSequence = (sequence) => {
    setBoxes(Array(9).fill(false));
    sequence.forEach((index, i) => {
      setTimeout(() => {
        setBoxes(prev => {
          const newBoxes = [...prev];
          newBoxes[index] = true;
          return newBoxes;
        });
      }, i * 500);
    });
  };

  return (
    <div className="App">
      <h1>Matrix Game</h1>
      <div className="matrix-container">
        {Array(9).fill(null).map((_, index) => (
          <div
            key={index}
            className={`box ${boxes[index] ? (showFinal ? 'orange' : 'green') : ''}`}
            onClick={() => handleBoxClick(index)}
          />
        ))}
      </div>
      {showFinal && (
        <button 
          onClick={() => {
            setShowFinal(false);
            setClickSequence([]);
            setBoxes(Array(9).fill(false));
          }}
        >
          Reset Game
        </button>
      )}
    </div>
  );
}

export default App