import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// var element = React.createElement("h1", { className: "greeting"}, "Hello, World!");
// ReactDOM.render(element, document.getElementById("root"));
const user = {
  name: 'Harry'
};

const myElement = (
  <div>
    <h1>
      Hello, {user.name}!
    </h1>
    <h2>
      Welcome to the the React Tutorial!
    </h2>
  </div>
);

ReactDOM.render(
  myElement,
  document.getElementById('root')
);
// reportWebVitals();
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

