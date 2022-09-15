import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';
export const Chart4 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        myChart.setOption(createEchartOptions({
            xAxis: {
                axisTick: {show: false},
                axisLabel: {
                    textStyle: {fontSize: px(15) },
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
                axisTick: {show: false}
            },
            series: [
                {
                symbolSize: 5,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33],
                    [14.0, 8.96],
                    [12.5, 6.82],
                    [9.15, 7.2],
                    [11.5, 7.2],
                    [3.03, 4.23],
                    [12.2, 7.83],
                    [2.02, 4.47],
                    [1.05, 3.33],
                    [4.05, 4.96],
                    [6.03, 7.24],
                    [12.0, 6.26],
                    [12.0, 8.84],
                    [7.08, 5.82],
                    [5.02, 5.68]
                ],
                type: 'scatter'
                }
            ]
        }))
    }, [])
    return (
        <div className="bordered scatter">
            <h2>当日数据</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}