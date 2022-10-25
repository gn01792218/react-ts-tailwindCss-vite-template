import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'

//react 18 用法
ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
