# Issue Tracker

Data attributes are like data-\* , we can put anything after dash, to uniquely identify html elements like id.

```html
<!-- They don't need a value -->
<div data-tag></div>

<!-- ...but they can have a value -->
<div data-tag="large"></div>
<div data-tag="navbar"></div>
```

### Some attributes to be used for this assignment

| Component / Element      | data-tag            | Must have text |
| ------------------------ | ------------------- | -------------- |
| Top Nav Bar              | navbar              | Issue Tracker  |
| Create Issue - Heading   | create-issue-header | Create Issue   |
| Form Description Input   | description         |                |
| From Assigned-To Input   | assigned_to         |                |
| Form Severity Input      | severity            |                |
| Form Submit Button       | submit              |                |
| Issue Card Component     | card-container      |                |
| Issue Card Description   | issue-description   |                |
| Issue Card Assigned To   | assigned-to         |                |
| Issue Card Close Tag     | close-tag           |                |
| Issue Card Close Button  | close-btn           |                |
| Issue Card Delete Button | delete-btn          |                |

### Test File : issue-tracker.spec.test.js

### To run tests :

     npx cypress open
