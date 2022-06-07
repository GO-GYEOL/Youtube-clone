import { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

function App({ youtube }) {
  // 필요한 dependency를 외부로부터 받아와야한다. 그래서 props로 youtube를 받아올 것.
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos))
    // 여기 search는 youtube의 search임. 함수명 search아님. 이렇게 사용하는구만. 신기하다.




    /* const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }; */
    // service로 옮김.

    /* fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&=${query}&type=video&key=AIzaSyCh_dw4ZL7OlTOwl063UZFk02eqTuNNkUY`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item=>({...item, id:item.id.videoId})))
      .then(items => setVideos(items)) */
  };
  useEffect(() => {
    youtube.mostPopular().then((videos => setVideos(videos)));




    /*     const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyCh_dw4ZL7OlTOwl063UZFk02eqTuNNkUY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error)); */
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {/* search fetch 자체를 header로 넘겨버리는구나 */}
      <VideoList videos={videos} />
    </div>
  );
}
export default App;
