import subpagestyle from '../styles/Subpages.module.css'
import React, { useCallback, useEffect, useState } from 'react'
import Script from 'next/script'
import useWebSocket from 'react-use-websocket'

const Game = () => {
  const socketUrl = "ws://localhost:5000";

  const [command, setCommand] = useState("on_connect");

  const {
    sendMessage,
    lastMessage,
    lastJsonMessage,
    readyState
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log("opened!"),
    onMessage : (event) => console.log(event),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => false,
  });


  const handleClickSendMessage =  useCallback((c : string) => {
    console.log("test!");
    sendMessage(c)});

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(event.target.console.value)
    handleClickSendMessage(event.target.console.value);
    

  }

    return (
    <div className={subpagestyle.main}>
        <div className={subpagestyle.title}>
            Game
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" id="console" name="console" />
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default Game