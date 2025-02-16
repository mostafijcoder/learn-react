//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import Proptypes from 'prop-types';
import ReactDOM from "react-dom";
import React, { Component } from 'react';
import { render } from 'react-dom';

//createRoot(document.getElementById('root')).render(
  /*<StrictMode>
    <App />
  </StrictMode>,
  
 )*///;
 const node=document.getElementById('root');
 class CreateComment extends React.Component{
    constructor(props){
      super(props);
      this.state={
        content:'',
        user:''
      };
      this.handleUserChange=this.handleUserChange.bind(this);
      this.handleTextChange=this.handleTextChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleUserChange(event){
      const val=event.target.value;
      this.setState(()=>{
        return{
          user:val
        };
      });
    }
    handleTextChange(event){
      const val=event.target.value;
      this.setState(()=>{
        return{
          content:val
        };
      });
    }
    handleSubmit(){
      event.preventDefault();
      this.props.onCommentSubmit({
        user:this.state.user,
        content:this.state.content.trim()
      });
      this.setState(()=>{
        return{
          user:'',
          content:''
        };
      });
    }
    render(){
      return React.createElement('form',{
        className:'createComment',
        onSubmit:this.handleSubmit
      },
      React.createElement('input',{
        type:'text',
        placeholder:'Your name',
        value:this.state.user,
        onChange:this.handleUserChange
      }),
      React.createElement('input',{
        type:'text',
        placeholder:'Thoughts?',
        value:this.state.content,
        onChange:this.handleTextChange
      }),
      React.createElement('input',{
        type:'submit',
        value:'Post'
      })
      );
    }
  }
  ReactDOM.render(React.createElement(CreateComment),node);






/*
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


*/


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