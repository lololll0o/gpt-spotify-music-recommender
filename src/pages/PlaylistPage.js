// pages/PlaylistPage.js
import React from "react";

function PlaylistPage({ playlist = [], removeFromPlaylist = () => {} }) {
  if (!Array.isArray(playlist)) {
    console.warn("❗ playlist prop이 배열이 아닙니다.");
    return <p>잘못된 데이터입니다.</p>;
  }

  if (playlist.length === 0) {
    return <p>❤️ 저장된 곡이 없습니다.</p>;
  }

  return (
    <div>
      <h2>❤️ 내 플레이리스트</h2>
      <ul className="playlist-list">
        {playlist.map((track) => (
          <li key={track.id} className="track-item">
            <img src={track.image} alt={track.title} width="64" />
            <div>
              <strong>{track.title}</strong> - {track.artist}
              <br />
              {track.preview_url && (
                <audio controls src={track.preview_url} />
              )}
              <br />
              <button onClick={() => removeFromPlaylist(track.id)}>❌ 삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistPage;
