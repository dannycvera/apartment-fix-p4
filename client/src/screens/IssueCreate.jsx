import React, { useState } from "react";
import "./IssueCreate.css";
import {
  // getComments,
  // updateComment,
  // deleteComment,
  createIssue,
} from "../services/issues";

function IssueCreate(props) {
  const { currentUser } = props;
  const [formEdit, setFormEdit] = useState({
    image_url: "",
    title: "",
    location: "",
    description: "",
    resolved: false,
    resolved_notes: "",
    user_id: null,
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    setFormEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createIssue(currentUser.id, formEdit);
    // setIssues((prevState) => [created, ...prevState]);
  };

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   await deleteIssue(formType.issueId);
  //   setComments((prevState) =>
  //     prevState.filter((comment) => comment.id !== formType.commentId)
  //   );
  //   setFormType({ edit: false, commentId: null });
  //   setModalVis("");
  // };

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
      {formEdit.image_url.slice(-3) === "mp4" ? (
        <video className="issue-create-img" controls onError={defaultSrc}>
          <source src={props.image} type="video/mp4" />
        </video>
      ) : (
        formEdit.image_url !== "" && (
          <img
            className="issue-create-img"
            src={formEdit.image_url}
            alt="adding another view of the issue"
            onError={defaultSrc}
          />
        )
      )}
      <form className="issue-create-form">
        <label>
          Image URL:
          <input
            name="image_url"
            type="text"
            value={formEdit.image_url}
            onChange={handleChange}
          ></input>
        </label>
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
        <div className="issue-create-buttons">
          {/* {formType.edit === true && (
            <button onClick={handleDelete}>Delete</button>
          )} */}
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default IssueCreate;
