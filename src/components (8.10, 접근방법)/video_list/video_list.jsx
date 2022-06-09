import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css"

const VideoList = ({videos, onVideoClick, display}) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>
        // 한단계 더 전달해줘야함 onVideoClick
        // display도 전달했다. 
      ))}
    </ul>
  );
};

export default VideoList;
