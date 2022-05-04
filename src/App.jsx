import { useState } from "react";
import IssueCard from "./issue-card/issue-card";
import IssueForm from "./issue-form/issue-form";
import "./App.css";
import Navbar from "./navbar/navbar";
function App() {
  const [issuelist, setissuelist] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <h2 data-tag="create-issue-header">Create Issue</h2>
      <IssueForm setissuelist={setissuelist}></IssueForm>
      <h2> Issues </h2>
      {issuelist.length > 0 ? (
        issuelist.map((issue) => (
          <IssueCard
            issue={issue}
            key={issue.issueId}
            issuelist={issuelist}
            setissuelist={setissuelist}
          />
        ))
      ) : (
        <h1> No issues </h1>
      )}
    </div>
  );
}

export default App;
