// import react for building the component
import React from 'react';
// import the app stylesheet for styling
import './App.css';
// import the counter component to use in this app
import Counter from './Counter';

// define the main app component
function App() {
  return (
    // define the main div with a class for styling
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

// export the app component for use in index.js
export default App;
