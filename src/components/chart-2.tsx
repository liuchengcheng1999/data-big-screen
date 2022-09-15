import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartOptions } from '../shared/create-echart-options';
export const Chart2 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        {name: '巴西', 2021: 2, 2022: 3},
        {name: '印度', 2021: 2, 2022: 3},
        {name: '日本', 2021: 2, 2022: 3},
        {name: '美国', 2021: 2, 2022: 3},
        {name: '中国', 2021: 2, 2022: 3},
        {name: '世界', 2021: 2, 2022: 3},
    ]
    useEffect(() => {
    setInterval(() => {
        const newData = [
            {name: '巴西', 2021: 2, 2022: Math.random() * 10},
            {name: '印度', 2021: 2, 2022: Math.random() * 10},
            {name: '日本', 2021: 2, 2022: Math.random() * 10},
            {name: '美国', 2021: 2, 2022: Math.random() * 10},
            {name: '中国', 2021: 2, 2022: Math.random() * 10},
            {name: '世界', 2021: 2, 2022: Math.random() * 10},
        ]
        x(newData)
    }, 1000)
}, [])
const x = (data) => {
    myChart.current.setOption(createEchartOptions({
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {show: false},
            axisLabel: {show: false}
        },
        yAxis: {
            type: 'category',
            data: data.map(i => i.name),
            axisTick: {show: false},
        },
        series: [
            {
                name: '2021年',
                type: 'bar',
                data: data.map(i => i[2021]),
                itemStyle: {
                    normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#2034F9'
                    }, {
                        offset: 1,
                        color: '#04a1FF'
                    }]),
                    }
                }
            },
            {
                name: '2022年',
                type: 'bar',
                data: data.map(i => i[2022]),
                itemStyle: {
                    normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#B92AE8'
                    }, {
                        offset: 1,
                        color: '#6773E7'
                    }]),
                    }
                }
            }
        ]
    }));
}
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    x(data)
  }, [])
  return (
    <div className="bordered data">
        <h2>数据使用量</h2>
        <div ref={divRef} className="chart"/>
        <div className="legend">
            <span className="first"/>&nbsp;2021
            &nbsp;
            <span className="second"/>&nbsp;2022
        </div>
    </div>
    )
}