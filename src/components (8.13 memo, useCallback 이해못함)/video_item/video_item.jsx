import React, { memo } from "react";
import styles from "./video_item.module.css";

// 컴포넌트 memo 컴포넌트로 변경했다. 왜냐면 item은 prop이 업데이트 되지 않는 한 rerender 될 필요 없으니까.
// 근데 업데이트 되는데? useCallback 써줘야한다. search_header참조.
const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
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
  }
);

// const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
//   const displayType = display === 'list' ? styles.list : styles.grid;
//   return (
//     <li className={`${styles.container} ${displayType}`} onClick={()=>onVideoClick(video)}>
//       <div className={styles.video}>
//         <img
//           className={styles.thumbnail}
//           src={snippet.thumbnails.medium.url}
//           alt="video Thumbnail"
//         />
//         <div className={styles.metadata}>
//           <p className={styles.title}>{snippet.title}</p>
//           <p className={styles.channel}>{snippet.channelTitle}</p>
//         </div>
//       </div>
//     </li>
//   );
// };

export default VideoItem;
