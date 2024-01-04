import React from 'react';
import CodeList from "./components/CodeList";
import "./Lobby.css"
// Functional component definition for the Lobby page.
// This page displays a list of codes and additional content.
const Lobby = ()=> {
    return (
      <div>
        <h1>Choose code block:</h1>
        <CodeList />
        <h1>stam bdika</h1>
      </div>
    );
  }
  
  export default Lobby;