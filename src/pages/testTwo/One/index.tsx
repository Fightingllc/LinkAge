/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-21 19:31:53
 * @LastEditTime: 2022-08-21 20:48:33
 * @FilePath: \react-demo\src\pages\testTwo\One\index.tsx
 */

import React, { useEffect, useState } from "react";
import * as echarts from 'echarts';


const One = (props: any) => {
    // const [xAxisData, setXAxisData] = useState(1)
    const { xAxisData, setXAxisData } = props
    const [check, setCheck] = useState(false)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)

    let initChart = () => {
        let element = document.getElementById('main');
        let myChart = echarts.init(element as HTMLDivElement);
        let option = {

            title: {
                text: '联动-柱状图',
            },
            // 触发提示框
            tooltip: {
                trigger: 'axis',
                // 触发类型 item: 只显示出触发转折点的内容、使用{a} {b}显示内容即可
                // axis: 按X轴显示，该轴上的转折点都会被触发、使用{a0} b{0} {a1} {b1}
                // 提示框内容格式器 参数根据trigger不同而不同
                // 折线、柱状、K线图：{a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
                // 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
                formatter: "名称：{a} <br>X轴： {b} <br>Y轴： {c}"
            },
            // legend: {
            //     data: ['销量', '利润', '比率']
            // },
            xAxis: {
                // splitLine//分割线（网格线）
                show: true, //是否显示坐标刻度标签
                axisLine: {
                    show: true, // 是否显示作坐标轴线
                },

                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']

            },
            yAxis: {

                inverse: true,
                type: 'value',

                show: true, //是否显示坐标刻度标签
                axisLine: {
                    show: true, // 是否显示作坐标轴线
                },
            },
            series: [
                {
                    name: 'XX',
                    smooth: true,
                    barWidth: 20,
                    showSymbol: false,
                    type: 'bar',
                    data: ['14', '15', '20', '22', '23', '24', '25', '37', '50', '70', '100', '90', '86', '68', '52', '30', '28', '27', '26', '25', '24', '23', '22', '20']

                }]
        };

        myChart.setOption(option);
        // 如果要高亮系列：
        myChart.dispatchAction({
            type: 'showTip',
            // 用 index 或 id 或 name 来指定系列。
            // 可以使用数组指定多个系列。
            seriesIndex: 0,
            // seriesId?: string | string[],
            // seriesName?: string | string[],

            // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
            dataIndex: xAxisData,
            // 可选，数据项名称，在有 dataIndex 的时候忽略
            // name?: string | string[],
        });


    };

    useEffect(() => {
        initChart();
    });


    return (
        <>
            <button className={check ? "btns" : "btn"} onClick={(() => {
                setXAxisData(2)
                setCheck(true)
                setCheck1(false)
                setCheck2(false)
            })} >3</button>
            <button className={check1 ? "btns" : "btn"} onClick={(() => {
                setXAxisData(4)
                setCheck(false)
                setCheck1(true)
                setCheck2(false)
            })}>5</button>
            <button className={check2 ? "btns" : "btn"} onClick={(() => {
                setXAxisData(7)
                setCheck(false)
                setCheck1(false)
                setCheck2(true)
            })}>8</button>
            <div id={'main'} style={{ height: 400 }} />
            {xAxisData}
        </>
    );
};

export default One
