import React, { useState, useEffect, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MicNoneIcon from "@mui/icons-material/MicNone";
import PauseIcon from "@mui/icons-material/Pause";
import { TheStoryAi } from "./the-story-ai";



export const MainImgChat = ({}) => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("ada");
  const [transcription, setTranscription] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [gptMsg, setGptMsg] = useState("");
  const [userMsg, setUserMsg] = useState("");


  

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setInput(transcription);
    // getModels();
  }, [transcription, inputRef]);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        setTranscription(transcript);
      };
      setRecognition(recognition);
    }
  }, []);


  function clearChat() {
    setChatLog([]);
  }

  // async function getModels() {
  //   try {
  //     const response = await fetch("http://localhost:3080/models");
  //     const data = await response.json();
  //     console.log(data);
  //     if (response.status !== 200) {
  //       throw new Error(data.message);
  //     }
  //     setModels(data.models.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    setInput("");
    const newMessage = { user: "me", message: input };
    setUserMsg(input)
    try {
      const chatLogNew = [...chatLog, newMessage];
      setChatLog(chatLogNew);
      const messages = chatLogNew.map(({ message }) => message).join("");
      const response = await fetch("https://ai-bot-back.onrender.com", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: messages, currentModel }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const gptMessage = { user: "gpt", message: data.message };
      setGptMsg(gptMessage.message);
      console.log(":gptMessage", gptMessage.message);

      setChatLog([...chatLogNew, gptMessage]);
    } catch (error) {
      console.error(error);
    }
  }

  function updateInput() {
    setInput(input, transcription);
    stopRecording();
    inputRef.current.focus();
  }
  const startRecording = () => {
    if (recognition) {
      recognition.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-btn" onClick={clearChat}>
          <AddIcon />
          <span >New Img Topic</span>
        </div>
      </aside>
      <section className="chatbox">
        {/* <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMsg key={index} message={message} />
          ))}
        </div> */}
        <div className="chat-log"> 
         {/* <div className="chat-msg chatgpt">
            <div className="chat-msg-center" />
          </div>  */}
         </div>
        <div className="headeline">
          <span>Inspiration is limitless as you create images that</span>
          <span> bring your stories to life in a whole new way.</span>
          <span className="span-three">You can write Dog and you will get a stroy and image about a dog.</span>
        </div>
        <div className="chat-input-holder">
          <form id="form-id" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a story topic."
              value={input}
              ref={inputRef}
              onClick={() => console.log("Input clicked")}
              onChange={(event) => setInput(event.target.value)}
              className="text-input-area"
            />
            <button form="form-id" onClick={updateInput} className="my-button">
              <NavigateNextIcon />
            </button>
            <div className="next-icon">
              {isRecording ? (
                <div onClick={stopRecording}>
                  <PauseIcon fontSize="medium" />
                </div>
              ) : (
                <div onClick={startRecording}>
                  <MicNoneIcon fontSize="medium" />
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
      <div className="">  
        <TheStoryAi gptMsg={gptMsg} userMsg={userMsg} input={input}/>
      </div>

    </div>
  );
};
