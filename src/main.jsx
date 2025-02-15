//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import React, {component} from 'react';
import { render } from 'react-dom';

//createRoot(document.getElementById('root')).render(
  /*<StrictMode>
    <App />
  </StrictMode>,
  
 )*///;
 const node=document.getElementById('root');
 const root=React.createElement('div',{},
  React.createElement('h1',{},'Hello World'),
  React.createElement('p',{},'This is a paragraph'),
  React.createElement('ul',{},
  React.createElement('li',{},'Item 1'),
  React.createElement('li',{},'Item 2')
  )
  );
  render(root,node);
  
