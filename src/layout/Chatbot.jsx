import React, {useState} from 'react';
import '../style/style.css'

const Chatbot = () => {
    const [active, setActive] = useState(false);

    function clickHandler() {
        console.log("Chat Button Clicked!");
        let newState = !active;
        setActive(newState);
    }

    return (
        <div className="chat-container">
          <input type="image" className="chat-logo" alt="Ask a question" 
          src={require("./images/chatbot-icon.png").default} onClick={clickHandler}/>
        </div>
    )

}

export default Chatbot;