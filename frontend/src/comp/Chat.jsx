import React from 'react'
  
  function Chat({onLogout}) {
    return (
        <div>
        <h2>Welcome to the Home Page !</h2>
        <button onClick={onLogout}>Logout</button>
      </div>
    )
  }
  
  export default Chat
  