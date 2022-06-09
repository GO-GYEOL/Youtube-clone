import { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        return (
          setSelectedVideo(null),
          setVideos(videos))
      });
      //오 나 천재! 이렇게해서 검색시 기본형태로 출력되도록 함. 아 이럴 필요도 없네. return() 안써도됨.

  };
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}
export default App;
