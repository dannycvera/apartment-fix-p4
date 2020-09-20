import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../services/comments";
import Comment from "../components/Comment";

function Comments(props) {
  const { currentUser } = props;
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsData = await getComments(id);
      console.log(commentsData);
      setComments(commentsData);
    };
    fetchComments();
  }, []);

  const commentCards = comments.map((comment) => {
    return (
      <Comment
        key={comment.id}
        _id={comment.id}
        userImg={comment.user.image_url}
        name={comment.user.username}
        image={comment.image_url}
        commentText={comment.comment}
      />
    );
  });
  return <div className="comments">{commentCards}</div>;
}

export default Comments;
