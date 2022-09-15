import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import { px } from '../shared/px';
export const Chart9 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        myChart.setOption(createEchartOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            tooltip: {
                trigger: 'item'
              },
              legend: {
                top: '5%',
                left: 'center',
                textStyle: {
                    fontSize: px(15),
                    color: 'white'
                },
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: false,
                  itemStyle: {
                    borderRadius: 8,
                    borderColor: '#0e325f',
                    borderWidth: 2
                  },
                  label: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: px(30),
                      fontWeight: 'bold'
                    }
                  },
                  labelLine: {
                    show: false
                  },
                  data: [
                    { value: 400, name: '8:00-10:00' },
                    { value: 1048, name: '10:00-12:00' },
                    { value: 650, name: '12:00-15:00' },
                    { value: 484, name: '15:00-17:00' },
                    { value: 230, name: '17:00-20:00' }
                  ]
                }
            ]
        }))
    }, [])
    return (
        <div className="bordered pie">
            <h2>访问数据时间段</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}