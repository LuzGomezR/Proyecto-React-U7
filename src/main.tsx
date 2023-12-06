import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./style/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'/>


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
