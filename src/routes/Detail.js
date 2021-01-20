import React from "react";

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
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
