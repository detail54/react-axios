import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <RecoilizeDebugger /> */}
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
)
