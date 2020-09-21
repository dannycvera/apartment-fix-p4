import React from "react";
import "./Comment.css";

function Comment(props) {
  const { currentUser } = props;
  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };
  return (
    <div className="comment">
      {props.image !== "" &&
        (props.image.slice(-3) === "mp4" ? (
          <video className="comment-img" controls onError={defaultSrc}>
            <source src={props.image} type="video/mp4" />
          </video>
        ) : (
          <img
            className="comment-img"
            src={props.image}
            alt={`${props.name} added a different view`}
            onError={defaultSrc}
          />
        ))}
      <div>
        {props.userImg !== "" && <img src={props.userImg} alt={props.name} />}
        <p>{`${props.name} wrote:`}</p>
        <p>{props.commentText}</p>
      </div>
      {currentUser.username === props.name && (
        <button
          onClick={() => {
            props.handleEdit(props.comment);
          }}
        >
          {" "}
          Edit Comment
        </button>
      )}
    </div>
  );
}

export default Comment;
