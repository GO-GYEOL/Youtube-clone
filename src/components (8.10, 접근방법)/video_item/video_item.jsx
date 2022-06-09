import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  // video, video.snippet, onVideoClick, display 세 개 props 로 받은거임.

  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${displayType}`} onClick={()=>onVideoClick(video)}>
      {/* 드디어 여기서 onVideoClick 사용했다. props를 전달해줘서 app.jsx의 onVideoClick를 실행함. */}
      {/* 이거 어떻게 한건지 잘 배워둬라. 접근방법 */}
      {/* 와 여기서 먼 또 displayType을 이용해서 styles을 설정을 해버리네... 진짜 한 기능 컴포넌트에 온갖 프롭들 다 전달해줘서 한번에 소화해버린다. 코드 최소화.... */}
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video Thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
