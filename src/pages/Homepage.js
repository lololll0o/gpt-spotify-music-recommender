import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css"

function HomePage({ isSidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleBoxClick = (target) => {
    if (target === "input") {
      navigate("/input"); // ✅ 수정된 부분: '/recommendation' → '/input'
    } else if (target === "playlist") {
      navigate("/playlist");
    } else if (target === "music") {
      alert("추후 업데이트 예정입니다.");
    }
  };

  return (
    <div className="main-content">
      <h1>🎧 당신을 위한 오늘의 플레이리스트</h1>

      <div className="box-container">
        <div className="select-box" onClick={() => handleBoxClick("input")}>
          <span>
            AI가 골라주는,<br />너만의 감성 노래
          </span>
        </div>
        <div className="select-box" onClick={() => handleBoxClick("music")}>
          <span>
            지금 시간에<br />어울리는 노래
          </span>
        </div>
        <div className="select-box" onClick={() => handleBoxClick("playlist")}>
          저장된 플레이리스트
        </div>
      </div>
    </div>
  );
}

export default HomePage;
