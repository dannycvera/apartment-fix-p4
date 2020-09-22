import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home(props) {
  const { issues, loading } = props;

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  const issueImages = issues.map((issue) => {
    return (
      <Link to={`/issue/${issue.id}`} key={issue.id}>
        <h3 className="home-title">{issue.title}</h3>
        {issue.image_url && issue.image_url.slice(-3) === "mp4" ? (
          <video
            className="home-img"
            key={issue.id}
            controls
            onError={defaultSrc}
          >
            <source src={issue.image_url} type="video/mp4" />
          </video>
        ) : (
          <img
            className="home-img"
            key={issue.id}
            src={issue.image_url}
            alt={issue.title}
            onError={defaultSrc}
          />
        )}
      </Link>
    );
  });

  return (
    <div className="home-gallery">
      {loading ? (
        <img src={require("../img/loading.svg")} alt="loading"></img>
      ) : (
        issueImages
      )}
    </div>
  );
}

export default Home;
