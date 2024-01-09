import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

function App() {
  const [bubbles, setBubbles] = useState([]);
  const maxBubbles = window.innerWidth < 768 ? 10 : 20; // Adjust the number of bubbles for smaller screens

  useEffect(() => {
    const createBubble = () => {
      const minSize = 20;
      const maxSize = 150;
      const size = minSize + Math.random() * (maxSize - minSize);
      const left = Math.random() * window.innerWidth + 'px';

      if (bubbles.length < maxBubbles) {
        const newBubble = {
          size: `${size}px`,
          left: left,
          key: Date.now(),
        };

        setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

        setTimeout(() => {
          setBubbles((prevBubbles) =>
            prevBubbles.map((bubble) =>
              bubble.key === newBubble.key ? { ...bubble, removing: true } : bubble
            )
          );
          setTimeout(() => {
            setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.key !== newBubble.key));
          }, 500); // Adjust the time to match the "bubblePop" animation duration
        }, 4000);
      }
    };

    const bubbleInterval = setInterval(createBubble, 150);

    return () => clearInterval(bubbleInterval);
  }, [bubbles, maxBubbles]);

  return (
    <div className="App">
      <section className="bubbles-background">
        {bubbles.map((bubble) => (
          <span
            key={bubble.key}
            className={`bubble ${bubble.removing ? 'bubblePop' : ''}`}
            style={{ width: bubble.size, height: bubble.size, left: bubble.left }}
          ></span>
        ))}
      </section>
      <div id="home"><Home /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Copyright/>
    </div>
  );
}

export default App;
