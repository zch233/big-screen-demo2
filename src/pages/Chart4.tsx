import { px, useCharts } from '../hooks/useCharts';
import * as echarts from 'echarts';

export const Chart4 = () => {
  return useCharts({options: {
      grid: {
        x: px(60),
        y: px(40),
        x2: px(20),
        y2: px(40),
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisLine: {show: true},
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter(val: number) {
            return val * 100 + '%';
          }
        },
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisLine: {show: true},
      },
      series: [{
        type: 'line',
        data: [
          0.15, 0.13, 0.11,
          0.13, 0.14, 0.15,
          0.16, 0.18, 0.21,
          0.19, 0.17, 0.16,
          0.15
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }})
}