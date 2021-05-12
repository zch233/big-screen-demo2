import React from 'react';
import './App.scss'
import { useInitSize } from './hooks/useInitSize';
import header from './assets/header.9d7a7634.png'
import { Chart1 } from './pages/Chart1';
import { Chart2 } from './pages/Chart2';
import { Chart3 } from './pages/Chart3';
import { Chart4 } from './pages/Chart4';
import { Chart5 } from './pages/Chart5';
import { Chart14 } from './pages/Chart14';
import { Chart12 } from './pages/Chart12';
import { Chart13 } from './pages/Chart13';
import { Chart11 } from './pages/Chart11';
import { Chart10 } from './pages/Chart10';

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
            <section className={'section section1'}>
              <div className="border section-chart section1-chart1">
                <div className="section-title"><h2>案发派出所管辖统计</h2></div>
                <Chart1 />
              </div>
              <div className="border section-chart section1-chart2">
                <div className="section-title"><h2>案件破获排名</h2></div>
                <Chart2 />
              </div>
            </section>
            <section className={'section section2'}>
              <div className="border section-chart section2-chart1">
                <div className="section-title"><h2>发案趋势分析</h2></div>
                <Chart3 />
              </div>
              <div className="border section-chart section2-chart2">
                <div className="section-title"><h2>案发时段分析</h2></div>
                <Chart4 />
              </div>
            </section>
            <section className={'border section section3 section-chart'}>
              <div className="section-title"><h2>往年战果数对比</h2></div>
              <Chart5 />
            </section>
            <section className={'section section4'}>
              <div className="border section-chart section4-chart1">
                <div className="section-title"><h2>全市犯罪人员籍贯分布地</h2></div>
              </div>
              <div className="border section-chart section4-chart2">
                <div className="section-title"><h2>犯罪人员年龄段分布</h2></div>
              </div>
            </section>
            <section className={'section section5'}>
              <div className="border section-chart section5-chart1">
                <div className="section-title"><h2>案发类型统计</h2></div>
                <div style={{flex: 1, display: 'flex', width: '100%'}}>
                  <Chart10 />
                  <Chart11 />
                </div>
              </div>
              <div className="border section-chart section5-chart2">
                <div className="section-title"><h2>案发街道统计</h2></div>
                <div style={{flex: 1, display: 'flex', width: '100%'}}>
                  <Chart12 />
                  <Chart13 />
                </div>
              </div>
              <div className="border section-chart section5-chart3">
                <div className="section-title"><h2>作案手段分析</h2></div>
                <Chart14 />
              </div>
            </section>
          </div>
          <div className={'content-footer'}><a href="https://github.com/zch233/big-screen-demo2" target={'_blank'}>github/@zch233</a></div>
        </>
      </Wrapper>
    </div>
  )
}

export default App
