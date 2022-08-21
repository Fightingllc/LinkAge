/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-17 21:42:29
 * @LastEditTime: 2022-08-21 20:13:56
 * @FilePath: \react-demo\src\App.tsx
 */
import { useState } from 'react'
import TestOne from './pages/testOne'
import TestTwo from './pages/testTwo'


import './App.css'

function App() {

  return (
    <div className="App">
      {/* <h2>控制组件在父组件</h2>
      <TestOne /> */}
      <h2>-------------------</h2>
      <h2>控制组件在One(子)组件</h2>
      <TestTwo />
    </div>
  )
}

export default App
