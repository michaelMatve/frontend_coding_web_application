import React from 'react';
import CodeList from "./components/CodeList";
import "./Lobby.css"
const Lobby = ()=> {
    return (
      <div>
        <h1>Choose code block:</h1>
        <CodeList />
      </div>
    );
  }
  
  export default Lobby;