import axios from "axios";

export const getAccessToken = async () => {
    
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const tokenUrl = "https://accounts.spotify.com/api/token";
  const encoded = btoa(`${clientId}:${clientSecret}`);
  

  try {
    const res = await axios.post(
      tokenUrl,
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${encoded}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    return res.data.access_token;
  } catch (err) {
    console.error("🚨 access_token 요청 실패:", err);
    return null;
  }
};
