// src/utils/spotify.js
import { getAccessToken } from "./getAccessToken";

export async function getSpotifyTracksByKeyword(keyword) {
    const token = await getAccessToken();
    if (!token) return [];

    const query = new URLSearchParams({
        q: keyword,
        type: "track",
        limit: 10
    });

    const url = `https://api.spotify.com/v1/search?${query.toString()}`;

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        console.error("❌ Spotify Search 오류:", res.status, await res.text());
        return [];
    }

    const data = await res.json();
    console.log("📦 Spotify 응답 전체:", data);
    if (!data.tracks || !Array.isArray(data.tracks.items)) {
        console.error("❌ Spotify 응답 오류: items가 배열이 아님", data.tracks);
        return [];
    }

    const uniqueTracks = Array.from(
        new Map(data.tracks.items.map((track) => [track.id, track])).values()
    );


    return uniqueTracks.map((track) => ({
        id: track.id,
        title: track.name,
        artist: track.artists.map((a) => a.name).join(", "),
        image: track.album.images?.[1]?.url || "",
        preview_url: track.preview_url,
        spotify_url: track.external_urls.spotify
    }));

}
