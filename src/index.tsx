import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootNode: any = document.getElementById('root');
const root: any = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const moduleNode: any = module;
if (moduleNode?.hot) {
  moduleNode?.hot.accept();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
