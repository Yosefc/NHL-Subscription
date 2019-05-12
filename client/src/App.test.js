import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SubscrtionRoute } from "./Router/RouterControler";
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render with Subscrtion route component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SubscrtionRoute /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Router module should render.', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SubscrtionRoute /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});