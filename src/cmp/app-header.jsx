import { Link } from "react-router-dom";
import AiImg from "../assets/imgs/ai.png";
import TemporaryDrawer from "./side-bar";

export const AppHeader = () => {
  return (
    <header className="app-header main-layout">
      <div className="sub-header">
        <Link to="/">
          <img src={AiImg} alt="" />
        </Link>
        <nav>
          <div className="sub-header-section">
          <Link to="/">Home</Link>
          {/* <Link to="/blogger">Blogger</Link> */}
          <Link to="/img-generation">Story.ai</Link>
          </div>
          <div>
            <TemporaryDrawer  fontSize="large" />
          </div>
        </nav>
      </div>
    </header>
  );
};

