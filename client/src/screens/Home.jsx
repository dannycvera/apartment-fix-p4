import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home(props) {
  const { issues } = props;

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  const issueImages = issues.map((issue) => {
    if (issue.image_url && issue.image_url.slice(-3) === "mp4") {
      return (
        <Link to={`/issue/${issue.id}`} key={issue.id}>
          <video
            className="home-img"
            key={issue.id}
            controls
            onError={defaultSrc}
          >
            <source src={issue.image_url} type="video/mp4" />
          </video>
        </Link>
      );
    } else {
      return (
        <Link to={`/issue/${issue.id}`} key={issue.id}>
          <img
            className="home-img"
            key={issue.id}
            src={issue.image_url}
            alt={issue.title}
            onError={defaultSrc}
          />
        </Link>
      );
    }
  });

  return <div className="home-gallery">{issueImages}</div>;
}

export default Home;
