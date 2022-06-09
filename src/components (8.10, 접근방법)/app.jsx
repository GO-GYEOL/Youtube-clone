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
      .then((videos) => setVideos(videos));
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
            {/* 이런식으로 video클릭시 페이지 만들어줌 */}
          </div>
        )}
        {/* div를 쓰는 이유는 컴포넌트 자체에 className을 지정해서 꾸며줄 수 없기때문에. 왜냐면 props로 전달이 됨. 근데 스타일컴포넌트쓰면 되긴하는데 여기선 div로 그냥 했다. */}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
          {/* 이 차례차례로 onVideoClick을 props로 건내주는 방식, 잘 기억해두면 분명 언젠간 쓸듯 */}
        </div>
      </section>
      {/* 와 근데 이렇게 새로운 페이지 안만들고 이런식으로 할 줄은 상상도 못했다. 멋있다. 코드 진짜 개깔끔하게 만들었다. 각각 기능을 가진 컴포넌트에 여러 컴포넌트에서 props를 전달해줘서 모두 소화해서 되돌려주고있음.*/}
    </div>
  );
}
export default App;
