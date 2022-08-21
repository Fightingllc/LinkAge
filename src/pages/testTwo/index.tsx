/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-21 18:26:45
 * @LastEditTime: 2022-08-21 20:49:34
 * @FilePath: \react-demo\src\pages\testTwo\index.tsx
 */
import {useEffect, useState} from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

// 控制组件 在One组件中

const TestTwo = (props:any) => {
    const [xAxisData, setXAxisData] = useState(1)



    // useEffect(()=> {
    //         console.log(xAxisData);
            
    // },[xAxisData])


    return(
        <>
        
           <One xAxisData = {xAxisData} setXAxisData={setXAxisData} />
           <Two xAxisData={xAxisData}  />
           <Three xAxisData = {xAxisData} />
        </>
    );
};

export default TestTwo
