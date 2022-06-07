import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyCh_dw4ZL7OlTOwl063UZFk02eqTuNNkUY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      // 오우 이렇게 fetch로 쓰는구나.... 왜 이생각을 못했지... 계속 뒷부분에 추가하려했었음 바보처럼.
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div>
        <VideoList videos={videos} />
      </div>
    </>
  );
}
export default App;
