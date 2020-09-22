import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./IssueCreate.css";
import { uploadImg } from "../services/imageUpload";
import { createIssue } from "../services/issues";

function IssueCreate(props) {
  const { currentUser } = props;
  const [imageDataType, setImageDataType] = useState("");
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formEdit, setFormEdit] = useState({
    image_url: "",
    title: "",
    location: "",
    description: "",
    resolved: false,
    resolved_notes: "",
    user_id: null,
  });
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      setFormEdit((prevState) => ({
        ...prevState,
        user_id: currentUser.id,
      }));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name } = e.target;
    // needed to check if the field is a checkbox and sets the value accordingly. Boolean wont work without it
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const tempData = formEdit;
    if (imageData !== null) {
      const uploadImage = await uploadImg(imageData);
      if (uploadImage === "failed upload") {
        setLoading(false);
        return;
      }
      tempData.image_url = uploadImage;
    }
    const created = await createIssue(currentUser.id, tempData);
    setLoading(false);
    props.setIssues((prevState) => [created, ...prevState]);
    history.push("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormEdit({
      image_url: "",
      title: "",
      location: "",
      description: "",
      resolved: false,
      resolved_notes: "",
      user_id: null,
    });
  };

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  return (
    <div className="issue-create">
      {loading ? (
        <img
          className="issue-create-img"
          src={require("../img/loading.svg")}
          height="150px"
          alt="adding another view of the issue"
          onError={defaultSrc}
        />
      ) : imageDataType === "video/mp4" ? (
        <video
          className="issue-create-img"
          controls
          onError={defaultSrc}
          src={imageData}
          type="video/mp4"
        ></video>
      ) : (
        imageData && (
          <img
            className="issue-create-img"
            src={imageData}
            alt="adding another view of the issue"
            onError={defaultSrc}
          />
        )
      )}
      <form className="issue-create-form">
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={formEdit.title}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Location:
          <input
            name="location"
            type="text"
            value={formEdit.location}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formEdit.description}
            onChange={handleChange}
          ></textarea>{" "}
        </label>
        <label>
          Resolved:
          <input
            name="resolved"
            type="checkbox"
            value={formEdit.resolved}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Resolved Notes:
          <input
            name="resolved_notes"
            type="text"
            value={formEdit.resolved_notes}
            onChange={handleChange}
          ></input>
        </label>
        {/* <label>
          Enter an Image URL:
          <input
            name="image_url"
            type="text"
            value={formEdit.image_url}
            onChange={handleChange}
          ></input>
        </label> */}
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
        <div className="issue-create-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
        <h3>"There is a 10 MB file size limit"</h3>
      </form>
    </div>
  );
}

export default IssueCreate;
