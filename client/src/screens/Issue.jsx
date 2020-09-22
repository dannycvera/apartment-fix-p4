import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIssue } from "../services/issues";
import "./Issue.css";

function Issue() {
  const [issue, setIssue] = useState(null);
  // const { image_url, description, resolved, resolved_notes } = issue;
  // const { currentUser } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchIssue = async () => {
      const issueData = await getIssue(id);
      setIssue(issueData);
    };
    fetchIssue();
  }, [id]);

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  return (
    <div className="issue-parent">
      {issue && (
        <div className="issue">
          <h3>{issue.title}</h3>
          <p>{issue.user.address}</p>
          {issue.image_url.slice(-3) === "mp4" ? (
            <video
              className="issue-img"
              key={id}
              controls
              src={issue.image_url}
              type="video/mp4"
              onError={defaultSrc}
            ></video>
          ) : (
            <img
              className="issue-img"
              key={issue.id}
              src={issue.image_url}
              alt={issue.title}
              onError={defaultSrc}
            />
          )}
          <div>
            <p>{`${issue.user.first_name}'s issue details below:`}</p>
            <p>{issue.location}</p>
            <p>{issue.description}</p>
            <p>
              {!issue.resolved
                ? "Currently Unresolved"
                : `Resolved: 
            ${issue.resolved_notes}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Issue;
