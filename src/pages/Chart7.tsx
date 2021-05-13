import { px, useCharts } from '../hooks/useCharts';

export const Chart7 = () => {
  return useCharts({options: {
      color: ['#8D70F8', '#33A4FA'],
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        show: true,
        bottom: px(33),
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
            text: '性别',
            font: `bold 1.6rem sans-serif`,
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
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.2, name: '女'},
            {value: 0.8, name: '男'},
          ]
        }
      ]
    }})
}