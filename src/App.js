import React from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Provider from './components/Provider';


function App() {
  return (
    
<Provider>
  <div className='app'>
<Calculator/>
</div>
</Provider>
  );
}



export default App;
