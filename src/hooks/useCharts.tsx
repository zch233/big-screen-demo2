import React, { useRef } from 'react';
import { useEffect } from 'react';
import * as echarts from 'echarts';
import { ECharts, EChartsOption } from 'echarts';
import { appWidth } from './useInitSize';

const px = (size: number) => size / 2420 * appWidth

export const useCharts = (props: {options: EChartsOption}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const myChart = useRef<ECharts>()
  useEffect(() => {
    myChart.current = echarts.init(chartRef.current!)
    myChart.current?.setOption({
      title: {show: false},
      legend: {show: false},
      textStyle: {
        fontSize: px(12),
        color: '#79839e',
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(10),
        y2: px(50),
      },
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val: string) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
        }
      },
    })
  }, [])
  useEffect(() => {
    myChart.current?.setOption(props.options)
  }, [props.options])
  return <div style={{flex: 1, width: '100%'}} ref={chartRef} />
}