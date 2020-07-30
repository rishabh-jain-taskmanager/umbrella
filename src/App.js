import React from 'react';
import Umbrella from './component/Umbrella/Umbrella';
import UContextProvider from './context/UmbrellaContext';
import './App.css';
function App() {
  return (
    <div className="App">
      <UContextProvider>
        <Umbrella />
      </UContextProvider>
    </div>
  );
}

export default App;
