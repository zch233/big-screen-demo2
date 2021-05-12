import { useCharts } from '../hooks/useCharts';

export const Chart1 = () => {
  return useCharts({options: {
      series: [{
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        type: 'bar'
      }]
    }})
}