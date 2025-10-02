import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractKeywordFromText } from "../utils/gpt";
import { getSpotifyTracksByKeyword } from "../utils/spotify";
import "../styles/App.css"

function InputPage() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!input.trim()) return;

        const keyword = await extractKeywordFromText(input);
        const tracks = await getSpotifyTracksByKeyword(keyword);

        navigate("/recommendation", {
            state: { input, keyword, tracks },
        });
    };

    return (
        <div className="main-content">
            <h1>🎧 지금 듣고 싶은 그 음악</h1>
            <p>듣고 싶은 음악 스타일을 자유롭게 입력해주세요</p>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="예: 포근한 햇살 같은 노래 추천해줘"
                rows={4}
                className="input-box"
            />
            <br />
            <button className="submit-button" onClick={handleSubmit}>
                노래 추천 받기
            </button>
        </div>
    );
}

export default InputPage;
