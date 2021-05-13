import { px, useCharts } from '../hooks/useCharts';
import * as echarts from 'echarts';
import china from '../lib/china.json';

export const Chart6 = () => {
  // @ts-ignore
  echarts.registerMap('china', china);
  return useCharts({
    options: {
      xAxis: { show: false },
      yAxis: { show: false },
      tooltip : {
        trigger: 'item',
        formatter: (param: {data: {name: string; value: number;};name: string;}) => {
          if (param.data) {
            return `${param.data.name}：${param.data.value}例`
          } else {
            return `${param.name}：暂无数据`
          }
        }
      },
      visualMap: {//地图左下角视觉映射
        textStyle: { color: '#fff' },
        show: true,
        type: 'piecewise',
        max: 100000,
        inRange: {
          color: ['#A5DCF4', '#006edd'],
        },
        pieces: [
          {
            gt: 800,
          },
          {
            gt: 600,
            lte: 800,
          },
          {
            gt: 400,
            lte: 600,
          },
          {
            gt: 200,
            lte: 400,
          }, {
            lt: 200,
          },
        ],
        padding: [0, 0, 0, 40],
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          zoom: 4.5,//地图大小
          label: {
            show: false,
            color: 'white',
          },
          itemStyle: { // 地图线条颜色、粗细，块颜色
            borderColor: '#01A7F7',
            borderWidth: 1,
            areaColor: '#010D3D',
          },
          layoutCenter: ['50%', '50%'],//地图位置
          layoutSize: px(174),
          data: [
            {
              name: '河北省',
              value: 900,
            },
            {
              name: '河南省',
              value: 700,
            },
            {
              name: '四川省',
              value: 500,
            },
            {
              name: '江西省',
              value: 100,
            },
          ], // 地图数据
        },
      ],
    },
  });
};