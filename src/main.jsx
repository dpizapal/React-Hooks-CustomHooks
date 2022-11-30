import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
import './index.css';
//import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
)
