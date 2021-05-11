import React from 'react';
import './App.scss'
import { useInitSize } from './hooks/useInitSize';

function App() {
  const Wrapper = useInitSize()
  return (
    <div className="App">
      <Wrapper>
        123213213213.log
      </Wrapper>
    </div>
  )
}

export default App
