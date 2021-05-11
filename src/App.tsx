import React from 'react';
import './App.scss'
import { useInitSize } from './hooks/useInitSize';

function App() {
  const Wrapper = useInitSize()
  return (
    <div className="App">
      <Wrapper>
        <>
          <div className={'content-main'}>
            <section className={'section1'}>1</section>
            <section className={'section2'}>2</section>
            <section className={'section3'}>3</section>
            <section className={'section4'}>4</section>
            <section className={'section5'}>5</section>
          </div>
          <div className={'content-footer'}>2222</div>
        </>
      </Wrapper>
    </div>
  )
}

export default App
