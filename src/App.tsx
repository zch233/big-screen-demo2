import React from 'react';
import './App.scss'
import { useInitSize } from './hooks/useInitSize';
import header from './assets/header.9d7a7634.png'

function App() {
  const Wrapper = useInitSize()
  return (
    <div className="App">
      <Wrapper>
        <>
          <div className={'content-header'}>
            <img src={header} alt=""/>
          </div>
          <div className={'content-main'}>
            <section className={'border section1'}>1</section>
            <section className={'border section2'}>2</section>
            <section className={'border section3'}>3</section>
            <section className={'border section4'}>4</section>
            <section className={'border section5'}>5</section>
          </div>
          <div className={'content-footer'}>2222</div>
        </>
      </Wrapper>
    </div>
  )
}

export default App
