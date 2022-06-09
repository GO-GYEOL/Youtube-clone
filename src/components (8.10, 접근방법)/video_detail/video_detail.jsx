import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    // <h1>{video.snippet.title}</h1>
    <section className={styles.detail}>
      <iframe
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
      {/* pre태그 쓰면 문제점, 글 길어지면 원래 공간을 벗어난다. css에서 white-space:pre-wrap 주면 된다. */}
    </section>
  );
};

export default VideoDetail;
