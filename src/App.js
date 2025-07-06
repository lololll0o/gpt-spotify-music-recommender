import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage";
import RecommendationPage from "./pages/RecommendationPage";
import PlaylistPage from "./pages/PlaylistPage";
import "./styles/App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (track) => {
    // 중복 방지
    if (!playlist.find((t) => t.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
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
      </div>
    </Router>
  );
}

export default App;
