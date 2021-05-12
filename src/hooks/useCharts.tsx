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
      textStyle: {
        fontSize: px(12),
        color: '#79839e',
      },
      grid: {
        x: px(40),
        y: 0,
        x2: 0,
        y2: px(40),
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          fontSize: px(12),
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: px(12),
        }
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    })
  }, [])
  useEffect(() => {
    // myChart.current?.setOption(props.options)
  }, [props.options])
  return <div style={{flex: 1, width: '100%'}} ref={chartRef} />
}