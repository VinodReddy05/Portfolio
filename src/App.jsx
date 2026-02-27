import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import { HashLoader } from 'react-spinners';
import confetti from 'canvas-confetti';  // Make sure to import confetti

function App() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  // Handle the 3-second delay before showing the loader and confetti
  
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      // Trigger confetti effect after welcome message
      setShowWelcome(false); // Hide the welcome message after 2 seconds
    }, 2000);

    const loaderTimer = setTimeout(() => {
      setLoading(false); // After 5 seconds, hide the loader and show the content
    }, 5000); // 2 seconds for welcome message + 3 seconds for loading

    // Clean up timers
    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(loaderTimer);
    };
  }, []);  // Empty dependency array ensures this runs only once on page load

  return (
    <div>
      {showWelcome ? (
        <div className="welcome">
          <h1>Welcome to the Website!</h1>
        </div>
      ) : loading ? (
        <div className="loader">
          <HashLoader size={50} color="#36D7B7" />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
