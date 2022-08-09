import React, { useState } from 'react';
import './App.css';


const Messages = () => {
  const [messages, setMessages] = useState([
    "First Message",
    "Second Message",
    "Third Message",
    "Fourth Message"
  ])
  
  const [newMessage, setNewMessage] = useState<string>()
  

  function RemoveMessage(msg: string){
    // const msg = e.target.value;
    setMessages(messages.filter(item => item !== msg))
    console.log('MSG', msg)
  }

  function EditMessage(msg: string) {
    
  }

  function AddMessage() {
	const addMsg:string = newMessage as string
	setMessages([...messages, addMsg])
  }

  function InputMessage(e: any){
	const msg = e.target.value
	setNewMessage(msg)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Messages
		  <input type="text" onChange={(e) => InputMessage(e)} />
		  <button type="button" onClick={() => AddMessage()}>Save</button>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
        {messages.map(msg => {
            return (
            	<li>{msg} <text onClick={() => RemoveMessage(msg)}>X</text></li>)
        })}
      </header>
    </div>
  );
}

export default Messages;
