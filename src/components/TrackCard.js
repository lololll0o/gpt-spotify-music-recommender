import React from "react";

function TrackCard({ track, isSaved, onSave }) {
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(track.title + " " + track.artist)}`;

  return (
    <li
      className="track-item"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "12px",
        background: "#fff",
      }}
    >
      <img src={track.image} alt={track.title} width="100" style={{ marginBottom: "10px" }} />

      <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
        {track.title} - {track.artist}
      </div>

      {track.preview_url ? (
        <audio controls src={track.preview_url} />
      ) : (
        <div style={{ marginBottom: "8px" }}>
          <div style={{ fontSize: "0.85em", color: "#999" }}>🎧 미리듣기 없음</div>

          <a
            href={youtubeSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.85em",
              color: "#007bff",
              textDecoration: "underline",
              marginBottom: "8px",
            }}
          >
            🔎 유튜브에서 찾아보기
          </a>
        </div>
      )}

      <button
        onClick={() => onSave(track)}
        disabled={isSaved}
        style={{
          padding: "10px 14px",
          backgroundColor: isSaved ? "#bbb" : "#d48b33",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "6px",
          cursor: isSaved ? "default" : "pointer",
        }}
      >
        {isSaved ? "✅ 담기 완료!" : "📌 담기"}
      </button>
    </li>
  );
}

export default TrackCard;
