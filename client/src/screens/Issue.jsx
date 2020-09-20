import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIssue } from "../services/issues";
import "./Issue.css";

function Issue(props) {
  console.log("reached issue screen");
  const [issue, setIssue] = useState(null);
  const { currentUser } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchIssue = async () => {
      const issueData = await getIssue(id);
      setIssue(issueData);
    };
    fetchIssue();
  }, []);

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  return (
    <div className="issue">
      {issue && (
        <>
          {issue.image_url.slice(-3) === "mp4" ? (
            <video
              className="issue-img"
              key={issue.id}
              controls
              onError={defaultSrc}
            >
              <source src={issue.image_url} type="video/mp4" />
            </video>
          ) : (
            <img
              className="issue-img"
              key={issue.id}
              src={issue.image_url}
              onError={defaultSrc}
            />
          )}
          <div>
            <p>{issue.description}</p>
            <p>
              {!issue.resolved
                ? "Currently Unresolved"
                : `Resolved: 
            ${issue.resolved_notes}`}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Issue;
