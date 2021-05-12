import { px, useCharts } from '../hooks/useCharts';

export const Chart11 = () => {
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];

  return useCharts({options: {
      legend: {
        show: true,
        bottom: px(0),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          startAngle: -20,
          type: 'pie',
          radius: ['25%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
            distanceToLabelLine: 0,
            formatter(options: {value: number}) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: [
            {value: 0.36, name: '刑事'},
            {value: 0.20, name: '民事'},
            {value: 0.18, name: '经济'},
            {value: 0.24, name: '其他'},
          ]
        }
      ]
    }})
}