import TypeWriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";
import { MyVideo } from "./intro-video";

export const HomePage = () => {
  return (
    <div className="home-page main-layout">
      <div className="type-writer main-layout">
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to Story.ai")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Generative storytelling has arrived.")
              .pauseFor(2000)
              // .deleteAll()
              // .typeString("Enjoy (:")
              .start();
          }}
        />
      </div>
        <div className="spline-main">
          <Spline
            className="spline"
            scene="https://prod.spline.design/JIwHfxfUQMYWegwk/scene.splinecode"
          />
        </div>
    </div>
  );
};
