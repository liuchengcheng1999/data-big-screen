import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import { px } from '../shared/px';
export const Chart8 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        myChart.setOption(createEchartOptions({
          xAxis: {show: false},
          yAxis: {show: false},
              legend: {
                left: 400,
                top: 20,
                data: ['2021', '2022'],
                textStyle: {
                    color: 'white',
                },
              },
              radar: {
                // shape: 'circle',
                indicator: [
                  { name: 'Smart Phone', max: 6500 },
                  { name: 'IE', max: 16000 },
                  { name: 'Safari', max: 30000 },
                  { name: 'Edge', max: 38000 },
                  { name: 'Chrome', max: 52000 },
                  { name: 'Firefox', max: 25000 }
                ],
                radius: 130,
                name: {
                  textStyle: {
                    fontSize: px(17)
                  }
                },
              },
              series: [
                {
                  name: 'Budget vs spending',
                  type: 'radar',
                  data: [
                    {
                      value: [4200, 3000, 20000, 35000, 50000, 18000],
                      name: '2022'
                    },
                    {
                      value: [5000, 14000, 28000, 26000, 42000, 21000],
                      name: '2021'
                    }
                  ],
                }
              ]
        }))
    })
    return (
        <div className="bordered heatMap">
            <h2>访问数据浏览器</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}