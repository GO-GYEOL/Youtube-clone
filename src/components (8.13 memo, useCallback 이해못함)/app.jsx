import { useCallback, useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const search = useCallback(query => {
    // useCallback을 사용하여 메모리상에 보관
    // useCallback과 memo컴포넌트에 대해서 공부를 해봐야 할 것 같다. 전혀 이해를 못했다.
    youtube
      .search(query) //
      .then((videos) => {
        return (
          setSelectedVideo(null),
          setVideos(videos))
      });
      //state, 즉 videos가 바뀔 때마다 const search는 새로운 함수를 가리키게 되는데, 왜냐면 검색어 입력하면 새로운 query를 가지고 새로운 videos가 만들어지는 것이므로. 대충 이해해. 아직몰라도될듯.
  }, []);
  // dependency로 텅 빈 배열을 전달했다. 한번만 만들고 계속 동일한 오브젝트를 사용한다.
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
