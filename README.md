🎧 GPT-Spotify 음악 추천 플레이어 ([gpt-spotify-music-recommender])
AI가 사용자의 감성적인 텍스트를 분석하여 가장 어울리는 노래를 OpenAI (GPT) 모델로 추천받고, Spotify API를 통해 실제 음악 정보를 사용자에게 제공하는 웹 애플리케이션입니다.

✨ 주요 기능 (Features)
감성 기반 음악 추천: 사용자가 입력한 분위기나 상황에 맞는 10곡의 노래를 AI가 추천합니다.

실시간 Spotify 연동: 추천받은 곡의 앨범 이미지, 아티스트 정보, 미리듣기(Preview) 기능을 제공합니다.

플레이리스트 관리: 추천된 곡을 사용자의 개인 플레이리스트에 추가하고 관리할 수 있습니다.

🛠️ 기술 스택 (Tech Stack)
Frontend: React, JavaScript (ES6+), CSS

APIs:

OpenAI API: 사용자 입력 분석 및 음악 추천 목록 생성

Spotify Web API: 음악 정보 검색, Track ID 및 미리듣기 URL 제공

🚀 시작하기 (Getting Started)
프로젝트를 로컬 환경에서 실행하려면 두 가지 API 키를 발급받아 환경 변수로 설정해야 합니다.

1. 환경 변수 설정
프로젝트 루트 디렉토리에 .env 파일을 생성하고, 발급받은 키를 아래와 같은 형식으로 입력합니다.

코드 스니펫

# --- OpenAI API Key 설정 (GPT 추천용) ---
REACT_APP_OPENAI_API_KEY="개인의 Secret Key 입력"

# --- Spotify API Key 설정 (음악 정보 검색용) ---
# Spotify Developer Dashboard에서 애플리케이션을 생성하고 발급받아야 합니다.
REACT_APP_SPOTIFY_CLIENT_ID="[개인의 Spotify Client ID]"
REACT_APP_SPOTIFY_CLIENT_SECRET="[개인의 Spotify Client Secret]"
2. 설치 및 실행
Bash

# 종속성 설치
npm install

# 개발 서버 실행
npm start
⚠️ 문제 해결 및 개발 노하우 (Troubleshooting & Insights)
이 프로젝트를 개발하며 발생했던 주요 이슈와 해결 방법을 공유합니다.

A. OpenAI API 인증 오류 (401 Unauthorized)
OpenAI API 호출 시 401 Unauthorized 오류가 발생하면, 이는 단순히 키가 잘못되었거나 만료되어서가 아니라 OpenAI 계정의 결제 상태 때문일 가능성이 높습니다.

해결: OpenAI API는 무료 크레딧을 소진하거나 받지 못했더라도, API 사용 권한(Tier 1)을 활성화하기 위해 결제 수단 등록을 요구합니다.

OpenAI Platform Billing 페이지에 접속하여 신용카드 정보를 등록하면, API 키가 활성화되어 오류 없이 호출이 가능해집니다.

B. GPT의 추천 중복 문제
AI가 같은 감성 입력에 대해 항상 동일한 노래 목록만 추천하여 중복이 발생하는 현상이 있었습니다.

원인 분석: GPT의 기본 temperature 설정이 너무 낮아(0.0) 응답의 무작위성(다양성)이 부족했기 때문입니다. Spotify API는 GPT가 준 동일한 텍스트 검색 결과만 충실히 반복했습니다.

해결책 (코드 수정):

src/utils/gpt.js 파일에서 API 호출 시 temperature 매개변수를 0.7 또는 0.8로 높여 GPT의 응답 다양성을 증가시켰습니다.

프롬프트에 **"이전에 추천했던 곡과 중복되지 않도록 다양한 아티스트에서 섞어서 추천해줘"**라는 명시적 지시를 추가하여 문제 해결의 정확도를 높였습니다.

💻 사용 가능한 스크립트 (Available Scripts)
기존 Create React App 스크립트는 그대로 유지됩니다.

npm start
npm test
npm run build
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
