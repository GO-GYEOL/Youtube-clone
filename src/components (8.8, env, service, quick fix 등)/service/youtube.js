// 필요한 네트워크 처리 여기서 할 것이다.
class Youtube {
  constructor(key) {
    // constructor에 key를 받아옴.
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${this.key}`,
      this.requestOptions
      //this.request로 바꿈.
      // key부분도 보안관련 이슈때문에 this.key로 바꿈.
    )
      .then((response) => response.json())
      .then((result) => result.items);
    // 기존엔 .then((result) => setVideos(result.items)) 였지만 state설정하는거 없애고 그냥 result.items 리턴하도록 함.
    // 최종적으로 promise를 return한것.
    // 와 여기 함수명 mostPopular 밑에 ... 그려져있는데, 함수명에 마우스 대보면, promise로 리턴되니 async로 쓰는게 어때? 라고 제안을 하고있다. Quick fix하면 async로 바꿀 수 있다.
    // 엘리 생각에도 async가 더 좋다고 생각한다고 한다. async 키워드가 앞에오면 여기에서 promise를 리턴하는걸 알 수 있으니까.
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&=${query}&type=video&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
    //   .then((items) => setVideos(items));
  }
}

export default Youtube;
