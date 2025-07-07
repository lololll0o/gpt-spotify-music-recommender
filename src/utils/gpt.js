// src/utils/gpt.js
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export async function extractKeywordFromText(userInput) {
  const prompt = `
다음 키워드를 기반으로 해당 분위기와 음악적 특징(장르, 악기 구성, 템포, 감성)에 가장 잘 어울리는 음악 10곡을 추천해줘. 
단순히 제목에 키워드가 들어간 곡이 아니라, **실제로 그 분위기와 유사한 곡**이어야 해. 곡 추천은 최대 5곡까지 추천해줘.
장르 다양성도 고려하고, 각 곡의 아티스트도 함께 알려줘.  
같은 질문이더라도 랜덤하게 노래 추천해줘.

키워드: "${userInput}"

결과는 아래 형식으로 알려줘:
- 곡 제목 - 아티스트명
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    })
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || "pop";
}
