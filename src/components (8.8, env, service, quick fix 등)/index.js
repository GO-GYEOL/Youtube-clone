import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./components/service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
// 여기서 youtube를 import 해야한다.
// key를 여기서 전달해줬다. 보안문제때문에 CRA에 기본적으로 설치되어있는 .env를 이용했다.
// key가 제대로 전달이 안될때 npm 껐다가 다시켜보자. 그럼됨.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
    {/* App에 전달을 해줬다. */}
  </React.StrictMode>
);
