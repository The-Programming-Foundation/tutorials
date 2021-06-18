import React, {useState} from 'react';
import '@tensorflow/tfjs';
import '../style/style.css'

const Chatbot = ({passage}) => {
    const [active, setActive] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const qna = require("@tensorflow-models/qna")
    
    function chatClickHandler() {
        console.log("Chat Button Clicked!");
        let newState = !active;
        setActive(newState);
    }

    function questionHandler(event) {
        console.log("Question Changed!");
        let newQuestion = event.target.value;
        setQuestion(newQuestion);
    }

    async function getAnswer() {
        // Hardcoded passage to test Q&A
        let passage = "Unix was developed in 1970";
        console.log("Getting answer...");

        // Model should only be loaded once - will make this change soon
        const model = await qna.load();

        // Try the question "When was Unix developed?"
        console.log("Question: ", question);
        console.log("Passage: ", passage);
        const answers = await model.findAnswers(question, passage);

        if (answers[0] === undefined) {
            console.log("No answer found");
            return;
        }

        console.log("Answer: ", answers[0].text);
        setAnswer(answers[0].text);
    }

    function submitHandler(event) {
        console.log("Submitted!");
        getAnswer();
    }

    return (
        <div className="chat-container">
            {active ? <div className="chat-window">
                <label>
                    Ask a question:
                    <input type="text" className="question" onChange={questionHandler} value={question}/>
                </label>
                <button type="button" className="submit" onClick={submitHandler}>Submit</button>        
                <input type="text" className="answer" defaultValue={answer} readOnly/>
            </div> : null}
            <input type="image" className="chat" alt="Ask a question" 
            src={require("./images/chatbot-icon.png").default} onClick={chatClickHandler}/>
        </div>
    )

}

export default Chatbot;