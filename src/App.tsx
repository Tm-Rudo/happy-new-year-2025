// import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ChucTet from "./pages/ChucTet";
import GieoQue from "./pages/GieoQue";

function App() {
  // useEffect(() => {
  //   const audio = new Audio("public/img/img_vd_ms_bg.mp3");
  //   audio.loop = true;
  //   audio.play();
  // }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Video nền */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/img/fireworksLoop.mp4" // Đường dẫn video từ thư mục public
        autoPlay
        loop
        muted
      />
      <audio src="/img/bg.mp3" autoPlay loop />

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/chuc-tet" element={<ChucTet />} />
          <Route path="/gieo-que" element={<GieoQue />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
