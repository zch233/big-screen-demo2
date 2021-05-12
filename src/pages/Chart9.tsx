import { px, useCharts } from '../hooks/useCharts';
import * as echarts from 'echarts';

export const Chart9 = () => {
  return useCharts({options: {
      color: '#F7A110',
      title: {top: px(5), show: true, text: '犯罪年龄趋势图', textStyle: {color: '#fff', fontSize: px(16)}},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 18, 28, 38, 48, 58, 68, 78],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      grid:{
        x: px(50),
        y: px(50),
        x2: px(20),
        y2: px(50),
      },
      yAxis: {
        type: 'value',
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val: number) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: [
          0.19, 0.20, 0.26,
          0.35, 0.26, 0.20,
          0.08, 0.06
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
          }]),
        }
      }]
    }})
}