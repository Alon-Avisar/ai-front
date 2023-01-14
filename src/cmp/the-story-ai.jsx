import { DalleImg } from "./dall-e";

export const TheStoryAi = ({ gptMsg , userMsg , input}) => {


  return (
    <div className="the-story-main-container">
      <div className="story-img-container">
        <DalleImg userMsg={userMsg} gptMsg={gptMsg} input={input}/>
      </div>
      <div className="story-text-container">{gptMsg}</div>
    </div>
  );
};
