import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CircularIndeterminate } from "./loader";

export const DalleImg = ({ gptMsg, userMsg }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    fetchImage();
    setPrompt(userMsg);
  }, [userMsg, prompt]);

  const fetchImage = async () => {
    const response = await axios.get(
      `https://ai-bot-back.onrender.com/image?prompt=${prompt}`
    );
    setImageUrl(response.data.data[0].url);
  };

  const handleChange = async () => {
    setPrompt(userMsg);
    setIsLoading('Your image will b e heer')
    await fetchImage();
  };

  return (
    <div className="delle-img main-layout">
      <form onKeyUp={handleChange}>
        <label>
          <input
            type="text"
            value={prompt + "Sigma 24 mm f/8, 1/10 sec"}
            onChange={handleChange}
            ref={inputRef}
          />
        </label>
      </form>
    <div>

      { isLoading ?  <CircularIndeterminate/> : 
        <img className="story-img-container"   src={imageUrl} /> }
    </div>
  
    </div>
  );
};
