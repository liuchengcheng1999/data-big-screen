import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';
export const Chart5 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        let base = +new Date(2021, 0, 0);
        let oneDay = 24 * 3600 * 1000;
        let date = [];

        let data = [Math.random() * 300];

        for (let i = 1; i < 400; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
        myChart.setOption(createEchartOptions({
            grid: {
                y: px(20),
                y2: (70),
                x: px(50),
                x2: px(50)
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                axisTick: {show: false},
            },
              yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
            },
              dataZoom: [
                {
                  type: 'inside',
                  start: 0,
                  end: 10
                },
                {
                  start: 0,
                  end: 10
                }
            ],
              series: [
                {
                  name: 'Fake Data',
                  type: 'line',
                  symbol: 'none',
                  sampling: 'lttb',
                  areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: '#2034f9'
                      },
                      {
                        offset: 1,
                        color: '#04a1ff'
                      }
                    ])
                  },
                  data: data
                }
            ]
        }))
    }, [])
    return (
        <div className="bordered yearData">
            <h2>总体数据</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}