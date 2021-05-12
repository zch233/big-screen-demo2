import { px, useCharts } from '../hooks/useCharts';

export const Chart8 = () => {
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
  return useCharts({options: {
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        show: true,
        bottom: px(0),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            fill: '#33a4fa',
            text: '年龄段',
            font: 'bold 26px sans-serif',
          }
        }
      ],
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['55%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
            formatter(options: {value: number}) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.07, name: '10-20'},
            {value: 0.10, name: '20-30'},
            {value: 0.23, name: '30-40'},
            {value: 0.28, name: '40-50'},
            {value: 0.32, name: '50-60'},
          ]
        }
      ]
    }})
}