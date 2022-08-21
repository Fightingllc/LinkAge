/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-21 18:26:45
 * @LastEditTime: 2022-08-21 20:05:35
 * @FilePath: \react-demo\src\pages\testTwo\Two\index.tsx
 */
import React, { useEffect, useState } from "react";
import * as echarts from 'echarts';
import IXasis from "../../../types";



const Two = (props: IXasis) => {

    const { xAxisData } = props
    let initChart = () => {

        let element2 = document.getElementById('main2');
        let myChart2 = echarts.init(element2 as HTMLDivElement);
        let option2 = {
            title: {
                text: '联动-点图',
            },
            tooltip: {
                // 触发类型 item: 只显示出触发转折点的内容、使用{a} {b}显示内容即可
                // axis: 按X轴显示，该轴上的转折点都会被触发、使用{a0} b{0} {a1} {b1}
                trigger: 'axis',
                // 提示框内容格式器 参数根据trigger不同而不同
                // 折线、柱状、K线图：{a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
                // 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
                formatter: "名称：{a} <br>X轴： {b} <br>Y轴： {c}"
            },
            // legend: {
            //     data: ['销量', '利润', '比率']
            // },
            xAxis: {
                // axisLine: {
                //     show: true, // 是否显示作坐标轴线
                // },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']

            },
            yAxis: {
                axisLine: {
                    show: true, // 是否显示作坐标轴线
                },
            },
            series: [
                {
                    name: 'XX',
                    showSymbol: false,
                    smooth: true,
                    type: 'scatter',
                    data: ['14', '15', '20', '22', '23', '24', '25', '37', '50', '70', '100', '90', '86', '68', '52', '30', '28', '27', '26', '25', '24', '23', '22', '20']

                },]
        };

        myChart2.setOption(option2);
        // echarts.connect([myChart, myChart1,myChart2]);
        myChart2.dispatchAction({
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
        <div>

            <div id={'main2'} style={{ height: 400 }} />
        </div>
    );
};

export default Two
