import React, { useState } from "react";
import "./issue-card.css";
export default function IssueCard({ issue, setissuelist, issuelist }) {
  const [isClose, setisClose] = useState(issue.close);
  const kary = [
    ["A", "Low"],
    ["B", "Medium"],
    ["C", "Hard"],
  ];
  const map1 = new Map(kary);
  const handleClose = () => {
    setisClose(!isClose);
    issue.close = isClose;
  };

  const handleDelete = () => {
    setissuelist((pre) =>
      pre.filter((element) => element.issueId !== issue.issueId)
    );
  };

  return (
    <div className="card-container" data-tag="card-container">
      {issue !== undefined && (
        <ul classname="issue-form-list">
          <li className="issue-id"> Issue ID : {issue.issueId}</li>
          {isClose ? (
            <li>
              <div className="close-tag" data-tag="close-tag">
                Closed
              </div>
            </li>
          ) : (
            <br></br>
          )}
          <h2 data-tag="issue-description">{issue.description}</h2>

          <p className="severity-name" data-tag="assigned-to">
            {map1.get(issue.severity)} {"  "} <img src="../person.png"></img>
            {issue.assigned_to}
          </p>

          <li>
            {!isClose && (
              <button
                className="close-btn"
                data-tag="close-btn"
                onClick={handleClose}
              >
                Close
              </button>
            )}
            {"  "}
            <button
              className="delete-btn"
              data-tag="delete-btn"
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
