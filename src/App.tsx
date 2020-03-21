import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "1",
    message: "Hallo, ich bin <Botname> :) Wie heißt du?",
    trigger: "2",
  },
  {
    id: "2",
    trigger: "3",
    user: true,
  },
  {
    end: true,
    id: "3",
    message: "Hej {previousValue}, schön dich kennenzulernen. Möchtest du lernen, wie man ganz einfach eine Homepage programmiert?",
  },
];

function App() {
  return (
    <div style={{backgroundColor: "gray", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignSelf: "center"}}>
        <div style={{flex: 1}}/>
        <p style={{textAlign: "center", fontWeight: "bold", color: "white", fontSize: 25}}>
          Chatbot test
        </p>
        <div>
        <ChatBot steps={steps} />
        </div>
        <div style={{flex: 1}}/>
      </div>
    </div>
  );
}

export default App;
