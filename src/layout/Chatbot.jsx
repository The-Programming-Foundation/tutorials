import React, {useState} from 'react';
import '../style/style.css'

const Chatbot = () => {
    const [active, setActive] = useState(false);
    
    function chatClickHandler() {
        console.log("Chat Button Clicked!");
        let newState = !active;
        setActive(newState);
    }

    /*function askClickHandler() {
        console.log("Question Asked!");
    }*/

    return (
        <div className="chat-container">
            {active ? <div className="chat-window">
                <input type="text" className="question"/>
                <input type="text" className="answer" readOnly/>
                {/*<button type="button" onClick={askClickHandler}>Ask</button>*/}
            </div> : null}
            <input type="image" className="chat-button" alt="Ask a question" 
            src={require("./images/chatbot-icon.png").default} onClick={chatClickHandler}/>
        </div>
    )

}

export default Chatbot;