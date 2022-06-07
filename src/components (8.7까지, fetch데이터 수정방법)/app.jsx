import { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css"

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&=${query}&type=video&key=AIzaSyCh_dw4ZL7OlTOwl063UZFk02eqTuNNkUY`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item=>({...item, id:item.id.videoId})))
      .then(items => setVideos(items))
      // 오 이런식으로 videos state 자체를 업데이트했구나. 나는 새로운 state를 만들어서 해줬었는데 그럴 필요가 없네. 나는 새로운 state를 만들었기 때문에 새로운 state를 map배열로 다시 찍어주는 코드까지 만들었었음. 물론 리액트라우터써서 다른 페이지로 만들었긴했지만, 이렇게 하는 것도 간단하게 할 땐 좋을 것 같다.
      // 아 그리고 이 fetch 함수 자체를 header에 props로 넘겨버리는구나!

      // 근데 문제 발생, 이 search result에서는 id가 오브젝트형태로 되어있고, 내부에 kind, videoId 두 개의 엘리먼트가 존재해서, kind가 같은 비디오들이 존재하게 된다. 그래서 콘솔창에 아이디가 같은 컴포넌트가 있다고 오류 나온다. 해결하기 위해, ...item으로 item 그대로 가져오되, id만 item.id.videoId 라는 primitive 형태의 데이터를 넣어서 item을 수정했다. 그래서 기존의 mostpopular 데이터와 id형태가 일치하게 되어 통용이 가능해진다.
  }
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
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      {/* search fetch 자체를 header로 넘겨버리는구나 */}
      <VideoList videos={videos} />
    </div>
  );
}
export default App;
