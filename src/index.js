// Im using this project for leanring purposes. Creadit: James Q Quick
// Github Repo: https://github.com/jamesqquick/JAMstack-Crash-Course-Build-a-Fullstack-App-with-React-Serverless-and-FaunaDB
// the following tutorial.
// https://www.youtube.com/watch?v=73b1ZbmB96I


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
