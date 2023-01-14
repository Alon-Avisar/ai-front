import { DalleImg } from "./dall-e";

export const TheStory = ({ gptMsg , userMsg , input}) => {


  return (
    <div className="the-story-main">
      <div className="story-img">
        <DalleImg userMsg={userMsg} gptMsg={gptMsg} input={input}/>
      </div>
      <div className="story-text">{gptMsg}</div>
    </div>
  );
};
