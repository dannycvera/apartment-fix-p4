import React from "react";

function Comment(props) {
  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };
  return (
    <div className="comment">
      {props.image.slice(-3) === "mp4" ? (
        <video
          className="comment-img"
          key={props.id}
          controls
          // onError={defaultSrc}
        >
          <source src={props.image} type="video/mp4" />
        </video>
      ) : (
        <img
          className="comment-img"
          key={props.id}
          src={props.image}
          // onError={defaultSrc}
        />
      )}
      <div>
        <img src={props.userImg} />
        <p>{`${props.name} wrote:`}</p>
        <p>{props.commentText}</p>
      </div>
    </div>
  );
}

export default Comment;
