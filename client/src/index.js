import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if(window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'){
    switch (true){
        case window.location.hostname === 'evening-beach-49814.herokuapp.com':
            window.location.replace('https://www.craigwright2048.com');
            break;
        case window.location.protocol !== 'https:':
            window.location.protocol = 'https:'
            break;
        default:
            return;
    };
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
