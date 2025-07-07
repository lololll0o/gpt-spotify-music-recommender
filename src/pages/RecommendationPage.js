import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import TrackCard from "../components/TrackCard";

function RecommendationPage({ addToPlaylist }) {
  const { state } = useLocation();
  const { input, tracks } = state || {};
  const [savedIds, setSavedIds] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  if (!tracks || tracks.length === 0) {
    return <p>추천 결과가 없습니다. 홈에서 다시 시도해주세요.</p>;
  }

  const handleSave = (track) => {
    addToPlaylist(track);
    setSavedIds([...savedIds, track.id]);
    setShowSidebar(true);
  };

  return (
    <div className="recommendation-page">
      <h2>🎧 “{input}” 분위기의 추천 곡</h2>
      <ul className="recommendation-list">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            isSaved={savedIds.includes(track.id)}
            onSave={handleSave}
          />
        ))}
      </ul>

      {showSidebar && (
        <div className="sidebar">
          <p>🎶 저장 완료!</p>
          <button onClick={() => navigate("/playlist")}>
            👉 내 플레이리스트 보러가기
          </button>
        </div>
      )}
    </div>
  );
}

export default RecommendationPage;
