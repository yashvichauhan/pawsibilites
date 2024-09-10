import React from "react";
import ReactDOM from "react-dom/client";
import "./chat.css";
import App from "./chatApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Chat() {
    return <App />;
  }
  
  export default Chat;
