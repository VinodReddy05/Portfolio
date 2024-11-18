// import './App.css';
// import React from 'react';
// import Home from './Components/Home/Home';

// function App() {
//   return (
//     <div>
      
//       <Home/>
//     </div>
//   );
// }

// export default App;



import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  // Handle the 3-second delay before showing the loader
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false); // Hide the welcome message after 3 seconds
    }, 2000);

    const loaderTimer = setTimeout(() => {
      setLoading(false); // After 6 seconds, hide the loader and show the content
    }, 5000); // 3 seconds for welcome message + 3 seconds for loading

    // Clean up timers
    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

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
