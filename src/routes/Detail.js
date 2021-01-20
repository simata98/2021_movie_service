import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    // movie-detail이 클릭이 아닌 url을 통한 접근 시 home으로 리다이렉트 시킴
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie_description">
          <div className="background">
            <img
              src={
                "https://image.tmdb.org/t/p/w500" +
                location.state.backposter.toString()
              }
              alt={location.state.title}
              title={location.state.title}
            />
          </div>
          <div className="poster">
            <img
              src={
                "https://image.tmdb.org/t/p/w500" +
                location.state.poster.toString()
              }
              alt={location.state.title}
              title={location.state.title}
            />
            <div className="movie_result">
              <div className="movie_title">
                <h1>{location.state.title}</h1>
                <div className="movie_content">
                  <h2>개봉 날짜 : {location.state.release_date}</h2>
                  <h2>관객 평점 : {location.state.vote_average}</h2>
                  <h2>관객 투표 수 : {location.state.vote_count}</h2>
                  <h6>{location.state.overview}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
