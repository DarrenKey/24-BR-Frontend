import subpagestyle from '../styles/Subpages.module.css'
import styles from '../styles/Game.module.css'
import React, { useCallback, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

const Game = () => {
  const socketUrl = "ws://localhost:5000";
  
  const [chat, setChat] = useState([]);

  const {
    sendMessage,
    lastMessage,
    lastJsonMessage,
    readyState
  } = useWebSocket(socketUrl, {
    onOpen: () => handleClickSendMessage("on_connect"),
    onMessage : (event) => console.log(event),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => false,
  });



  const [isAcceptingCommands, setIsAcceptingCommands] = useState(Boolean);

  useEffect(() => {
    if (lastMessage?.data == "Msg") {
      setIsAcceptingCommands(true)
    }
    else if (isAcceptingCommands){
      setChat((prev) => prev.concat(lastMessage?.data));
      setIsAcceptingCommands(false)
    }
  }, [lastMessage, setChat, isAcceptingCommands]);

  const handleClickSendMessage =  useCallback((c : string) => {
    console.log("test!");
    sendMessage(c)}, []);

  const handleSubmit = async (event : React.SyntheticEvent) => {

    const target = event.target as typeof event.target & {
      console: { value: string };
    };

    event.preventDefault()

    console.log(target.console.value)
    handleClickSendMessage("msg " + target.console.value);
    

  }

    return (
    <div className={subpagestyle.main}>
        <div className={subpagestyle.title}>
            Game
        </div>


        <div className={styles.chat}>
          {chat.map((e, index) => 
              <p key={index}>{e}</p>
            )}
        
        </div>

        <form onSubmit={handleSubmit} className={styles.chatroom}>
          <input type="text" id="console" name="console"/>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default Game