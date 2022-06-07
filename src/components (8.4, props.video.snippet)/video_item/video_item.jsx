import React from "react";
import styles from "./video_item.module.css";

// const VideoItem = (props) => {
const VideoItem = ({ video: { snippet } }) => {
  // props의 video 내부의 snippet, 즉 한번에 props.video.snippet을 받아오는 방법
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video Thumbnail"
        />
        <div class={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
