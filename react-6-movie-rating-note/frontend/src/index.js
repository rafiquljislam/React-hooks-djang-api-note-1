import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login.jsx';
import { CookiesProvider } from 'react-cookie'
import Register from './components/Register.jsx';

const routing = (
  <BrowserRouter>
    <CookiesProvider>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/movies" component={App} />
    </CookiesProvider>
  </BrowserRouter>
)


ReactDOM.render(routing,document.getElementById('root')
);

