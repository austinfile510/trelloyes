import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store';

ReactDOM.render(<App lists={STORE.lists} allCards={STORE.allCards}/>, document.getElementById('root'));