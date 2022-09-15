import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartOptions({
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
            axisTick: {show: false},
          
          axisLabel: {
            textStyle: {fontSize: px(15)},
            formatter(value) {
                if (value.length > 2) {
                    const array = value.split('')
                    array.splice(2, 0, '\n')
                    return array.join('')
                } else {
                    return value
                }
            }
        },
    },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
    }));
  }, []);

  return (
    <div className="bordered trend">
      <h2>数据趋势</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};