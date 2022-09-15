import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import china from '../geo/china.json';
export const Chart6 = () => {
    const divRef = useRef(null)
    const colors = {'广东省': '#BB31F7', '上海市': '#15B8FD', '北京市': '#06E1EE'}
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                type: 'map',
                mapType: 'CN', // 自定义扩展图表类型
                data: [
                    {name: '广东省', value: 1},
                ],
                label: {show: false, color: 'white'},
                itemStyle: {
                    areaColor: '#010D3D',
                    color: colors['广东省'],
                    borderColor: '#01A7F7',
                    emphasis: {
                    label: {color: 'white'},
                    areaColor: '#5470C6',
                    },
                }
                },
                {
                type: 'map',
                mapType: 'CN', // 自定义扩展图表类型
                data: [
                    {name: '上海市', value: 100},
                ],
                itemStyle: {
                    areaColor: '#010D3D',
                    color: colors['上海市'],
                    borderColor: 'blue',
                    emphasis: {
                    label: {color: 'white'},
                    areaColor: '#5470C6',
                    },
                }
                },
                {
                type: 'map',
                mapType: 'CN', // 自定义扩展图表类型
                data: [
                    {name: '北京市', value: 100},
                ],
                itemStyle: {
                    areaColor: '#010D3D',
                    color: colors['北京市'],
                    borderColor: '#01A7F7',
                    emphasis: {
                    label: {color: 'white'},
                    areaColor: '#5470C6',
                    },
                }
                },
            ]
        }))
    }, [])
    return (
        <div className="bordered dataMap">
            <h2>数据地图</h2>
            <div className="wrapper">
            <div ref={divRef} className="chart"/>
            <div className="legend bordered">
                <span className="icon" style={{background: colors['广东省']}}/>深圳市
                <span className="icon" style={{background: colors['上海市']}}/>上海市
                <span className="icon" style={{background: colors['北京市']}}/>北京市
            </div>
            <div className="point">
            ※ 标点为数据访问多发地
            </div>
            <div className="notes">
            此地图仅显示了中国的部分区域
            </div>
        </div>
        </div>
    )
}