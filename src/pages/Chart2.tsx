import { px, useCharts } from '../hooks/useCharts';
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';

export const Chart2 = () => {
  const initData = [
    {name: '城关区公安局', 2011: 2, 2012: 3},
    {name: '七里河区公安局', 2011: 2, 2012: 3},
    {name: '西固区公安局', 2011: 2, 2012: 3},
    {name: '安宁区公安局', 2011: 2, 2012: 3},
    {name: '红古区公安局', 2011: 2, 2012: 3},
    {name: '永登县公安局', 2011: 2, 2012: 3},
    {name: '皋兰县公安局', 2011: 2, 2012: 3},
    {name: '榆中县公安局', 2011: 2, 2012: 3},
    {name: '新区公安局', 2011: 2, 2012: 3},
  ];
  const [data, setData] = useState(initData)
  useEffect(() => {
    const timer = setInterval(() => {
      const newData = [
        {name: '城关区公安局', 2011: 2, 2012: Math.random() * 10},
        {name: '七里河区公安局', 2011: 2, 2012: 3},
        {name: '西固区公安局', 2011: 2, 2012: 3},
        {name: '安宁区公安局', 2011: 2, 2012: 3},
        {name: '红古区公安局', 2011: 2, 2012: 3},
        {name: '永登县公安局', 2011: 2, 2012: 3},
        {name: '皋兰县公安局', 2011: 2, 2012: 3},
        {name: '榆中县公安局', 2011: 2, 2012: 3},
        {name: '新区公安局', 2011: 2, 2012: 3},
      ];
      setData(newData);
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  })
  return useCharts({options: {
      grid: {
        x: px(70),
        y: px(40),
        x2: px(10),
        y2: px(50),
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false,fontSize: px(12)}
      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data: data.map(i => i.name),
        axisLabel: {
          fontSize: px(12),
          formatter(val: string) {
            return val.replace('公安局', '\n公安局');
          }
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: data.map(i => i[2011]),
          itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034F9'
              }, {
                offset: 1,
                color: '#04A1FF'
              }]),
            }
        },
        {
          name: '2012年',
          type: 'bar',
          data: data.map(i => i[2012]),
          itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#B92AE8'
              }, {
                offset: 1,
                color: '#6773E7'
              }]),
          }
        }
      ]
    }})
}