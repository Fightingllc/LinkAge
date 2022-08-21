/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-21 18:26:14
 * @LastEditTime: 2022-08-21 20:14:44
 * @FilePath: \react-demo\src\pages\testOne\index.tsx
 */

import React, {useEffect, useState} from "react";

import One from "./One";
import Two from "./Two";
import Three from "./Three";

// 父传子 控制数据 实现各个组件的联动

const TestOne: React.FC =  () => {


   const [xAxisData, setXAxisData] = useState(1)

    

    return(
        <>
        <button className="btn" onClick={(() =>{
            setXAxisData(2)
        })} >3</button>
        <button className="btn"  onClick={(() =>{
            setXAxisData(4)
        })}>5</button>
        <button className="btn"  onClick={(() =>{
            setXAxisData(7)
        })}>8</button>
           <One xAxisData = {xAxisData}/>
           <Two xAxisData = {xAxisData} />
           <Three xAxisData = {xAxisData} />
        </>
    );
};

export default TestOne
