import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import store from './store'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
// 除以几视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
