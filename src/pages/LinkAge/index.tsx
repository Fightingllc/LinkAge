import React, {useEffect, useState} from "react";
import * as echarts from 'echarts';

const LinkAge: React.FC =  () => {

    // type optionType = {
    //     title?: {
    //         text: string;
    //     };
    //     tooltip?: {
    //         trigger: string;
    //         formatter: string;
    //     };
    //     legend?: {
    //         data: string[];
    //     };
    //     xAxis?: {
    //         show: boolean;
    //         axisLine: {
    //             show: boolean;
    //         };
    //         data: string[];
    //     };
    //     yAxis?: {
    //         inverse: boolean;
    //         type: string;
    //         show: boolean;
    //         axisLine:object;
    //     };
    //     series?:object[];
    // }


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
            legend: {
                data:['销量', '利润', '比率']
            },
            xAxis: {
                // splitLine//分割线（网格线）
                show:true, //是否显示坐标刻度标签
                axisLine: {
                    show: true, // 是否显示作坐标轴线
                },

                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36']

            },
            yAxis: {
                
                    inverse:true,
                    type : 'value',
                
                show:true, //是否显示坐标刻度标签
                axisLine: {
                    show: true, // 是否显示作坐标轴线
                },
            },
            series: [
                {
                    name: 'XX',
                    smooth: true,
                    barWidth: 20,
                    showSymbol:false,
                    type: 'bar',
                    data: ['14','15', '20', '22', '23', '24', '25', '37','50','70','100','90','86','68','52','30','28','27','26','25','24','23','22','20']

                }]
        };
        let element1 = document.getElementById('main1');
        let myChart1 = echarts.init(element1 as HTMLDivElement);
        let option1 = {
            title: {
                text: '联动-曲线图',
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
            legend: {
                data:['销量', '利润', '比率']
            },
            xAxis: {
                // axisLine: {
                //     show: true, // 是否显示作坐标轴线
                // },
                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36']

            },
            yAxis: {
                axisLine: {
                    show: true, // 是否显示作坐标轴线
                },
            },
            series: [
                {
                    name: 'XX',
                    showSymbol:false,
                    smooth: true,
                    type: 'line',
                    data: ['14','15', '20', '22', '23', '24', '25', '37','50','70','100','90','86','68','52','30','28','27','26','25','24','23','22','20']

                },]
        };
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
            legend: {
                data:['销量', '利润', '比率']
            },
            xAxis: {
                // axisLine: {
                //     show: true, // 是否显示作坐标轴线
                // },
                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36']

            },
            yAxis: {
                axisLine: {
                    show: true, // 是否显示作坐标轴线
                },
            },
            series: [
                {
                    name: 'XX',
                    showSymbol:false,
                    smooth: true,
                    type: 'scatter',
                    data: ['14','15', '20', '22', '23', '24', '25', '37','50','70','100','90','86','68','52','30','28','27','26','25','24','23','22','20']

                },]
        };
        myChart.setOption(option);
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        echarts.connect([myChart, myChart1,myChart2]);
    };

    useEffect(() => {
        initChart();
    });

    return(
        <div>
            <div id={'main'} style={{height: 400}}/>
            <div id={'main1'} style={{height: 400}}/>
            <div id={'main2'} style={{height: 400}}/>
        </div>
    );
};

export default LinkAge
