class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
    // key가 브라우저에 보안상 이유로 표시 안되도록 하는 방법 강의에서 설명한다.
    // 8-14강 8:30부터.
  }


  // fetch는 유용하지만, queryparams를 섞어서 해야하고, 받은 response를 json으로 만드는 등 번거로운 작업이 있어서, axios라는 라이브러리를 사용하면 간편하게 할 수 있다.
  // fetch와 같이 json으로 변환하지 않아도, 라이브러리 자체에서 json으로 변환을 해주기 때문에 그부분 생략된다.

  async mostPopular(){
    const response = await this.youtube.get('videos', {
      params:{
        part:'snippet',
        chart:'mostPopular',
        maxResults:25,
      }
    })
    return response.data.items;
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
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
