import "./App.scss";
import { Route, Routes } from "react-router-dom";

import { AppHeader } from "./cmp/app-header";
import { HomePage } from "./cmp/home";
import { SlideShow } from "./cmp/slideshow";
import { MainImgChat } from "./cmp/main-img-chat";
function App() {
  return (

    
    <div className="App-contianer main-layout">
        <AppHeader /> 

      <div className="main-layout">
      <main className="container  ">
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/blogger" element={<SlideShow />}/>
      <Route path="/img-generation" element={ <MainImgChat/>}/>
      </Routes>
      </main>
      </div>
    </div>
  );
}

export default App;
