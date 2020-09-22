import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import { uploadImg } from "../services/imageUpload";
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from "../services/comments";
import "./Comments.css";

function Comments(props) {
  const { currentUser } = props;
  // ID of current issue the comments are attached to
  const { id } = useParams();
  // used for image uploading
  const [imageDataType, setImageDataType] = useState("");
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  // array of comments
  const [comments, setComments] = useState([]);
  // sets the class of the modal so it is visible
  const [modalVis, setModalVis] = useState("");
  // whether the modal is adding a record or editing
  const [formType, setFormType] = useState({ edit: false, commentId: null });
  // holds the changed data for adding or editing a comment
  const [formEdit, setFormEdit] = useState({
    image_url: "",
    comment_text: "",
    issue_id: null,
    user_id: null,
  });

  useEffect(() => {
    const fetchComments = async () => {
      const commentsData = await getComments(id);
      setComments(commentsData);
    };
    fetchComments();
  }, [id]);

  const addComment = () => {
    setFormType({ edit: false, commentId: null });
    handleEdit();
  };

  const handleEdit = (commentData) => {
    if (commentData) {
      console.log("commentData", commentData);
      setFormType({ edit: true, commentId: commentData.id });
      const tempData = { ...commentData };
      delete tempData.created_at;
      delete tempData.updated_at;
      delete tempData.issue;
      delete tempData.user;
      delete tempData.id;
      console.log("comment Data", commentData);

      setFormEdit(tempData);
    } else {
      setFormEdit((prevState) => ({
        ...prevState,
        issue_id: id,
        user_id: currentUser.id,
      }));
    }
    setModalVis("visible");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const tempData = formEdit;
    if (imageData !== "") {
      const uploadImage = await uploadImg(imageData);
      if (uploadImage === "failed upload") {
        setLoading(false);
        return;
      }
      tempData.image_url = uploadImage;
    }

    if (formType.edit) {
      const updated = await updateComment(formType.commentId, tempData);
      console.log(updated);
      setComments((prevState) =>
        prevState.map((comment) =>
          comment.id === formType.commentId ? updated : comment
        )
      );
    } else {
      const created = await createComment(id, tempData);
      setComments((prevState) => [created, ...prevState]);
    }
    setLoading(false);
    setImageData("");
    setImageDataType("");
    setFormType({ edit: false, commentId: null });
    setModalVis("");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteComment(formType.commentId);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== formType.commentId)
    );
    setFormType({ edit: false, commentId: null });
    setModalVis("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setModalVis("");
    setFormEdit({
      image_url: "",
      comment_text: "",
      issue_id: null,
      user_id: null,
    });
  };

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  const commentCards = comments.map((comment, index) => {
    return (
      <Comment
        key={index}
        currentUser={currentUser}
        handleEdit={handleEdit}
        comment={comment}
        _id={comment.id}
        userImg={comment.user.image_url}
        name={comment.user.username}
        image={comment.image_url}
        commentText={comment.comment_text}
      />
    );
  });

  // comment cards followed by the modal for editing cards
  return (
    <div className="comments">
      {currentUser && <button onClick={addComment}>Add Comment</button>}
      {commentCards}{" "}
      <div className={`modal-parent ${modalVis}`}>
        <div className={`modal ${modalVis}`}>
          {loading === false ? (
            imageDataType === "video/mp4" ? (
              <video
                className="modal-img"
                controls
                onError={defaultSrc}
                src={imageData}
                type="video/mp4"
              ></video>
            ) : (
              imageData && (
                <img
                  className="modal-img"
                  src={imageData}
                  alt="adding another view of the issue"
                  onError={defaultSrc}
                />
              )
            )
          ) : (
            <img
              className="modal-img"
              src={require("../img/loading.svg")}
              alt="adding another view of the issue"
              onError={defaultSrc}
            />
          )}
          <form className="modal-form">
            {/* <label>
              Image URL:
              <input
                name="image_url"
                type="text"
                value={formEdit.image_url}
                onChange={handleChange}
              ></input>
            </label> */}
            <label>
              Comment:
              <textarea
                name="comment_text"
                value={formEdit.comment_text}
                onChange={handleChange}
              ></textarea>{" "}
            </label>
            <label htmlFor="file-upload" className="file-button">
              Choose an image or video:
              <input
                id="file-upload"
                type="file"
                name="file"
                accepts=".mp4,.jpg, .jpeg, .png, .gif"
                placeholder="upload an image"
                onChange={(e) => {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setImageData(e.target.result);
                  };
                  setImageDataType(e.target.files[0].type);
                  reader.readAsDataURL(e.target.files[0]);
                }}
              ></input>
            </label>
            <div className="modal-buttons">
              {formType.edit === true && (
                <button onClick={handleDelete}>Delete</button>
              )}
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments;
