import React from 'react';
import Cat from './features/Cat';
import SelectCategory from './features/SelectCategory';
import Button from './features/Button';
import './App.css';

function App() {
  return (
    <div>
      <Cat />
      <div className='select-button'>
        <SelectCategory />
        <Button />
      </div>
    </div>
  );
}

export default App;
