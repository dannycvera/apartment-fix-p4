import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllIssues, getIssues } from "../services/issues";
import Home from "../screens/Home";
import Issue from "../screens/Issue";
import Comments from "../screens/Comments";
import IssueCreate from "../screens/IssueCreate";

function MainContainer(props) {
  const [issues, setIssues] = useState([]);
  const { currentUser } = props;

  useEffect(() => {
    const fetchIssues = async () => {
      let issuesArray;
      if (currentUser && !props.all) {
        issuesArray = await getIssues(currentUser.id);
      } else {
        issuesArray = await getAllIssues();
      }
      setIssues(issuesArray);
    };

    fetchIssues();
  }, [currentUser, props.all]);

  return (
    <Switch>
      <Route path="/newissue">
        <IssueCreate setIssues={setIssues} currentUser={currentUser} />
      </Route>
      <Route path="/issue/:id">
        <Issue />
        <Comments currentUser={currentUser} />
      </Route>
      <Route exact path="/all">
        <Home issues={issues} />
      </Route>
      <Route exact path="/">
        <Home issues={issues} />
      </Route>
    </Switch>
  );
}

export default MainContainer;
