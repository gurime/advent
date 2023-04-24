
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [editingMessageIndex, setEditingMessageIndex] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [editInputValue, setEditInputValue] = useState('');
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    setMessages([...messages, { text: message, sender: 'user' }]);
    setInputValue('');
    // Send message to chatbot API
    axios.post('/api/chatbot', { message }, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        setMessages([...messages, { text: response.data.message, sender: 'bot' }]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleDelete = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };
  
  const handleEditSubmit = (e, index) => {
    e.preventDefault();
    const newMessages = [...messages];
    newMessages[index].text = editInputValue;
    setMessages(newMessages);
    setEditingMessageIndex(null);
  };
  
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Welcome to my chatbot</h1>
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`${message.sender}`}>
              <div className="message-text">
                {editingMessageIndex === index ? (
                  <form onSubmit={(e) => handleEditSubmit(e, index)}>
                    <input
                      type="text"
                      name="message"
                      placeholder="Edit message"
                      value={editInputValue}
                      onChange={(e) => setEditInputValue(e.target.value)}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditingMessageIndex(null)}>
                      Cancel
                    </button>
                  </form>
                ) : (
                  message.text
                )}
              </div>
              <div>
                {editingMessageIndex === index ? (
                  <></>
                ) : (
                  <>
                    <button className='delete-button ' onClick={() => setEditingMessageIndex(index)}>Edit</button>
                    <button className='edit-btn' onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <form className="message-input" onSubmit={handleMessageSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Type your message here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className={inputValue ? 'submitbtn' : 'submitbtn disabled'}
            type="submit"
            disabled={!inputValue}
          >
            Comment
          </button>
        </form>
      </div>
    </>
  );
};
export default Chat;
