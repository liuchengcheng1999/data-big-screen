import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartOptions } from '../shared/create-echart-options';
import { px } from '../shared/px';
export const Chart1 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        {name: '1区', 2022:10},
        {name: '2区', 2022:20},
        {name: '3区',2022:36},
        {name: '4区',2022:41},
        {name: '5区',2022:15},
        {name: '6区',2022:26},
        {name: '7区',2022:37},
        {name: '8区',2022:18},
        {name: '9区',2022:29}
    ]
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '1区', 2022:Math.random() * 10},
                {name: '2区', 2022:Math.random() * 10},
                {name: '3区', 2022:Math.random() * 10},
                {name: '4区', 2022:Math.random() * 10},
                {name: '5区', 2022:Math.random() * 10},
                {name: '6区', 2022:Math.random() * 10},
                {name: '7区', 2022:Math.random() * 10},
                {name: '8区', 2022:Math.random() * 10},
                {name: '9区', 2022:Math.random() * 10}
            ]
            x(newData)
        }, 1000)
    }, [])   
    const x = (data) => {
    // 绘制图表
    myChart.current.setOption(createEchartOptions({
        xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
            lineStyle: {color: '#083B70'}
        },
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
        splitLine: {show: false},
        axisLine: {
            show: true,
            LineStyle: {color: '#083B70'},
        }
    },
        series: [{
            type: 'bar',
            data: data.map(i => i[2022])
        }]
    }));
}
useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    x(data)
}, [])
    return (
    <div className="bordered statistics">
        <h2>数据统计</h2>
        <div ref={divRef} className="chart">
        </div>
    </div>
    )
}