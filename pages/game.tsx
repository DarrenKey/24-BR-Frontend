import subpagestyle from '../styles/Subpages.module.css'
import styles from '../styles/Game.module.css'
import React, { useCallback, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

const Game = () => {
  const socketUrl = "ws://localhost:5000";
  
  const [chat, setChat] = useState<string[]>([]);
  const [alert, setAlert] = useState("Connecting...");

  enum commands {
    Msg = "Msg",
    Alert = "Alert",
    Quit = "Quit",
    Problem = "Problem",
    None = "None"
  }

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



  const [isAcceptingCommands, setIsAcceptingCommands] = useState(commands.None);

  
  useEffect(() => {
    if (isAcceptingCommands == commands.None) {
      switch (lastMessage?.data){
        case "Msg":
          setIsAcceptingCommands(commands.Msg)
          break
        case "Alert":
          setIsAcceptingCommands(commands.Alert)
          break
        case "Problem":
          setIsAcceptingCommands(commands.Problem)
          break
        case "Quit":
          setIsAcceptingCommands(commands.Quit)
          break
      }
    }
    else {
      switch (isAcceptingCommands){
        case commands.Msg:
          setChat((prev) => [(lastMessage?.data), ...prev]);
          setIsAcceptingCommands(commands.None)
          break
        case commands.Alert:
          setAlert(lastMessage?.data)
      }
    } 
  }, [lastMessage]);

  const handleClickSendMessage =  useCallback((c : string) => {
    console.log("test!");
    sendMessage(c)}, []);

  const handleSubmit = async (event : React.SyntheticEvent) => {

    const target = event.target as typeof event.target & {
      chat: { value: string };
    };

    event.preventDefault()

    console.log(target.chat.value)
    handleClickSendMessage("msg " + target.chat.value);
    

  }

    return (
    <div className={subpagestyle.main}>
        <div className={subpagestyle.title}>
            Game
        </div>

        <h1 className={styles.header}>Alert</h1>
        <div className={styles.alert}>{alert}</div>

        <h1 className={styles.header}>Chat</h1>
        <div className={styles.chat}>
          {chat.map((e, index) => 
              <p key={index}>{e}</p>
            )}
        
        </div>

        <form onSubmit={handleSubmit} className={styles.chatroom}>
          <input type="text" id="chat" name="chat" className={styles.chatBox}/>
        <button type="submit" className={styles.chatButton}>Chat</button>
      </form>
    </div>
    )
}

export default Game