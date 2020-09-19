import React from "react";
import "./Home.css";
function Home(props) {
  const { issues } = props;

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  const issueImages = issues.map((issue) => {
    if (issue.image_url.slice(-3) === "mp4") {
      return (
        <video
          className="home-img"
          key={issue.id}
          controls
          onError={defaultSrc}
        >
          <source src={issue.image_url} type="video/mp4" />
        </video>
      );
    } else {
      return (
        <img
          className="home-img"
          key={issue.id}
          src={issue.image_url}
          onError={defaultSrc}
        />
      );
    }
  });

  return <div className="home-gallery">{issueImages}</div>;
}

export default Home;
