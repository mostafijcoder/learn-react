//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import Proptypes from 'prop-types';
import React, { Component } from 'react';
import { render } from 'react-dom';

//createRoot(document.getElementById('root')).render(
  /*<StrictMode>
    <App />
  </StrictMode>,
  
 )*///;
 const node=document.getElementById('root');
 class Post extends React.Component{
   render(){
     return React.createElement('div',
      {
        className:'post'
      },
      React.createElement('h2',{
        className:'postAuthor',
        id:this.props.id,
      },
      this.props.user,
      React.createElement('span',{
        className:'postBody'
      },
      this.props.content
      ),
      this.props.children
      )
      );
    }
  }

  class Comment extends React.Component{
    render(){
      return React.createElement('div',
      {
        className:'comment'
      },
      React.createElement('h2',{
        className:'commentAuthor'
      },
      this.props.user,
      React.createElement('span',{
        className:'commentContent'
      },
      this.props.content
      )
      )
      );
    }
  }
  Comment.propTypes={
    id:Proptypes.number.isRequired,
    content:Proptypes.string.isRequired,
    user:Proptypes.string.isRequired
  };
  Post.propTypes={
    user:Proptypes.string.isRequired,
    content:Proptypes.string.isRequired,
    id:Proptypes.number.isRequired
  };
  const App=React.createElement(Post,{
    id:1,
    content:'said: This is a post',
    user:'mark'
  },
  React.createElement(Comment,{
    id:2,
    user:'bob',
    content:'commented: wow! how cool'
  })
  );

  ReactDOM.render(App,node);





/*
 const root=React.createElement('div',{},
  React.createElement('h1',{},'Hello World'),
  React.createElement('p',{},'This is a paragraph'),
  React.createElement('ul',{},
  React.createElement('li',{},'Item 1'),
  React.createElement('li',{},'Item 2'),
  React.createElement('li',{},'Item 3')
  )
  );
  render(root,node);

*/