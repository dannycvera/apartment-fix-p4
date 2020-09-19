import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllIssues, getIssues } from "../services/isses";

function MainContainer(props) {
  const [issues, setIssues] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchIssues = async () => {
      const issuesArray = await getAllIssues();
      setIssues(issuesArray);
    };
    fetchIssues();
  });
  return <div></div>;
}

export default MainContainer;
