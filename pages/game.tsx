import subpagestyle from '../styles/Subpages.module.css'
import styles from '../styles/Game.module.css'
import React, { useCallback, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'



const Game = () => {
  const socketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_ADDR;
  
  const [chat, setChat] = useState<string[]>([]);
  const [problem, setProblem] = useState<string[]>([]);
  const [time, setTime] = useState("");
  const [numLobby, setNumLobby] = useState("");
  const [score, setScore] = useState("");
  const [alert, setAlert] = useState("Connecting...");
  const {
    sendMessage,
    lastMessage,
    lastJsonMessage,
    readyState
  } = useWebSocket(socketUrl, {
    onOpen: () => handleClickSendMessage("on_connect"),
    onMessage : (event) => console.log(event),
    onClose: (event) => handleClickSendMessage("/quit"),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => false,
  });
  
  useEffect(() => {
    if (lastMessage == null){
      return  
    }

    const msgFromWebsocket : string = lastMessage?.data
    const commandSeperator = msgFromWebsocket.indexOf("|") ; 
    if (commandSeperator < 0){
      return 
    }
    
    const commandFromWebsocket = msgFromWebsocket.substring(0, commandSeperator)
    const actualMsg = msgFromWebsocket.substring(commandSeperator + 1)

    switch(commandFromWebsocket){
      case "Msg":
        setChat((prev) => [(actualMsg), ...prev]);
        break
      case "Alert":
        setAlert(actualMsg) 
        break
      case "Quit":
        setAlert(actualMsg) 
        break
      case "Problem": 
        setProblem((prev) => [("Problem: " + actualMsg), ...prev]);
        break
      case "Time": 
        setTime(actualMsg)
        break
      case "Score":
        setScore(actualMsg)
        break
      case "Num_in_lobby":
        setNumLobby(actualMsg)
        break
    }
    console.log(actualMsg, commandFromWebsocket)
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


  const handleProblem = async (event : React.SyntheticEvent) => {

    const target = event.target as typeof event.target & {
      chat: { value: string };
    };

    event.preventDefault()

    console.log(target.chat.value)
    handleClickSendMessage( target.chat.value);
    

  }

    return (
    <div className={subpagestyle.main}>
        <div className={subpagestyle.title}>
            Game
        </div>
        <div className={styles.main}>

        <div className = {styles.alertSection}>
        <h1 className={styles.header}>Alert</h1>
        <div className={styles.alert}>{alert}</div>
        </div>

        {/* <button type="submit" className={styles.startButton}>Start</button> */}

        <div className={styles.numInLobby}>Number currently in lobby: {numLobby}</div>
        <div className={styles.score}>Score: {score}</div>
        <div className={styles.time}>Time: {time}</div>
        
        <h1 className={styles.header}>Problem</h1>
        <div className={styles.websocketResponse}>
          {problem.map((e, index) => 
              <p key={index}>{e}</p>
            )}
        
        </div>


        <h1 className={styles.header}>Submit answer</h1>

        <form onSubmit={handleProblem} className={styles.sendWebsocketForm}>
          <input type="text" id="chat" name="chat" className={styles.sendWebsocketTextarea}/>
          <button type="submit" className={styles.sendWebsocketButton}>Submit</button>
      </form>
      </div>

        <h1 className={styles.header}>Chat</h1>
        <div className={styles.websocketResponse}>
          {chat.map((e, index) => 
              <p key={index}>{e}</p>
            )}
        
        </div>



        <form onSubmit={handleSubmit} className={styles.sendWebsocketForm}>
          <input type="text" id="chat" name="chat" className={styles.sendWebsocketTextarea}/>
          <button type="submit" className={styles.sendWebsocketButton}>Chat</button>
      </form>
    </div>
    )
}

export default Game