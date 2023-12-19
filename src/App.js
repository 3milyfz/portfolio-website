import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const minSize = 20;
      const maxSize = 150; // Adjust the maximum size as needed
      const size = minSize + Math.random() * (maxSize - minSize);
      const left = Math.random() * window.innerWidth + 'px';

      const newBubble = {
        size: `${size}px`,
        left: left,
        key: Date.now(),
      };

      setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

      setTimeout(() => {
        setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.key !== newBubble.key));
      }, 4000);
    };

    const bubbleInterval = setInterval(createBubble, 150);

    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <div className="App">
      <section className="bubbles-background">
        {bubbles.map((bubble) => (
          <span
            key={bubble.key}
            className="bubble"
            style={{ width: bubble.size, height: bubble.size, left: bubble.left }}
          ></span>
        ))}
      </section>
      <Home />
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
