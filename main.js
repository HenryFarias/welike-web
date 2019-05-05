import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './app/App.js';
import Login from './app/views/Login.js';

if(localStorage.getItem('token')){
    render(<App />, document.getElementById('app'))
}else{
    render(<Login />, document.getElementById('app'))
}