import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllIssues, getIssues } from "../services/issues";
import Home from "../screens/Home";
import Issue from "../screens/Issue";
import Comments from "../screens/Comments";
import IssueCreate from "../screens/IssueCreate";
import "./MainContainer.css";

function MainContainer(props) {
  const [issues, setIssues] = useState([]);
  const { currentUser } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      let issuesArray;
      if (currentUser && !props.all) {
        issuesArray = await getIssues(currentUser.id);
      } else {
        issuesArray = await getAllIssues();
      }
      setIssues(issuesArray.reverse());
      setLoading(false);
    };

    fetchIssues();
  }, [currentUser, props.all]);

  return (
    <Switch>
      <Route path="/newissue">
        <IssueCreate setIssues={setIssues} currentUser={currentUser} />
      </Route>
      <Route path="/issue/:id">
        <div className="MainContainer">
          <Issue />
          <Comments currentUser={currentUser} />
        </div>
      </Route>
      <Route exact path="/all">
        <Home loading={loading} issues={issues} />
      </Route>
      <Route exact path="/">
        <Home loading={loading} issues={issues} />
      </Route>
    </Switch>
  );
}

export default MainContainer;
