import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage";
import InputPage from "./pages/InputPage";
import RecommendationPage from "./pages/RecommendationPage";
import PlaylistPage from "./pages/PlaylistPage";
import "./styles/App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [isPlaylistPopupOpen, setPlaylistPopupOpen] = useState(false);

  const addToPlaylist = (track) => {
    if (!playlist.find((t) => t.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
    setPlaylistPopupOpen(true);
    setTimeout(() => {
      setPlaylistPopupOpen(false);
    }, 3000);
  };

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((t) => t.id !== id));
  };

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {!isSidebarOpen && (
          <button className="hamburger" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
        )}

        <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <button className="close-button" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
          <ul>
            <li>
              <Link to="/" onClick={() => setSidebarOpen(false)}>홈</Link>
            </li>
            <li>
              <Link to="/playlist" onClick={() => setSidebarOpen(false)}>내 플레이리스트</Link>
            </li>
          </ul>

        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/input" element={<InputPage />} />
            <Route
              path="/recommendation"
              element={<RecommendationPage addToPlaylist={addToPlaylist} />}
            />
            <Route
              path="/playlist"
              element={<PlaylistPage playlist={playlist} removeFromPlaylist={removeFromPlaylist} />}
            />
          </Routes>
        </main>
        {isPlaylistPopupOpen && (
          <div className="playlist-popup">
            <p>✅ 플레이리스트에 곡을 담았습니다!</p>
            <Link to="/playlist" onClick={() => setPlaylistPopupOpen(false)}>
              ▶ 내 플레이리스트 바로가기
            </Link>
            <button
              className="close-popup-btn"
              onClick={() => setPlaylistPopupOpen(false)}
            >
              ✕ 닫기
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
