
[deployed link](https://apartment-fix.netlify.app/)

# APARTMENT FIX 

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Apartment Fix** is a web app to document apartment issues, such as leaking plumbing, broken sheetrock, etc. The building manager will inturn login and leave comments, such as when a contractor will arrive. The contractor can also login and take an image of the resolution. If the tenant approves the work, they can mark the issue as resolved._


<br>

## MVP

_The **Apartment Fix** MVP will allow for the creation of an apartment issues with an image and description. Then full CRUD functionality will be implimented thru the addition, editing, and deletion of comments to the specific issue. Users can also be created with encrypted passwords, who will also be allowed to leave comments on the specific apartment issue._

<br>

### Goals

- _User registration and login,_
- _User creation of apartment issues_
- _include images with each issue_
- _User post comments on a specific issue_
- _Full CRUD on comments_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Javascript library for an interactive UI_ |
|   React Router   | _allows single page apps to behave as a multi page sites_ |
|   React Spring   |        for smooth transition of images     |
|      Axios       | _to make JSON request to the database._ |
|  Ruby on Rails   | _handle SQL queries and routes them to API endpoints_ |

<br>

### Client (Front End)

#### Wireframes

[Desktop-Mobile](https://drive.google.com/file/d/1GsQ6xnSWLgTZS-rfiQtxpX4N5vZpY9OO/view?usp=sharing)

#### Component Tree
``` 
App
|__ MainContainer
     |__ Home
     |__ Issue
        |__ IssueCard
        |__ Comments
            |__ CommentCard
        |__ CommentEdit
     |__ Login
     |__ Register
     |__ Layout
        |__ Header
            |__ Nav
        |__ Footer
        
```
#### Component Hierarchy

``` structure

src
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Footer.jsx
      |__ IssueCard.jsx
      |__ Comments.jsx
      |__ CommentCard.jsx
      |__ CommentEdit.jsx
|__ containers/
      |__ MainContainer.jsx
|__ Layout/
      |__ Layout.jsx
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Home.jsx
      |__ Issue.jsx
      |__ NewIssue.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ issues.js
      |__ comments.js


```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
| Issues Gallery |  class   |   y   |   n   | _The gallery will render the issue images in flexbox._      |
| Issue Card | functional |   n   |   y   | _The cards will render the issue info via props._                 |
| Issue Create | functional |   n   |   y   | _The component will provide fields to create an issue via props._    |
| Comments Gallery |  class   |   y   |   n   | _The gallery will render the comments via cars in flexbox._      |
| Comment Card | functional |   n   |   y   | _The cards will render the comment info via props._                 |
| Comment Edit | functional |   n   |   y   | _The component will provide fields to edit a comment via props._    |
| Registration | functional |   n   |   y   | _The component will provide fields to create a user via props._    |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

| Task  | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| rails auth | H | 4hrs| 0hrs | 0hrs |
| rails issue model | H | 4hrs| 0hrs | 0hrs |
| rails comments table | H | 4hrs| 0hrs | 0hrs |
| react login | H | 4hrs| 0hrs | 0hrs |
| JSX, Modules | H | 4hrs| 0hrs | 0hrs |
| add comments component | H | 8hrs| 0hrs | 0hrs |
| add issue module | H | 8hrs| 0hrs | 0hrs |
| Create CRUD Actions |    H     |     8hrs      |     0hrs     |     0hrs     |
| CSS| H | 8hrs|0hrs | 0hrs |
| PMVP - react-spring for transition effects | L | 3hrs| 0hrs | 0hrs |
| PMVP - full screen image display | L | 3hrs| 0hrs | 0hrs |
| PMVP - image upload | L | 3hrs| 0hrs | 0hrs |
| PMVP - Buildings/Apartments tables | L | 16hrs| 0hrs | 0hrs |
| PMVP - Impliment user permissions | L | 8hrs| 0hrs | 0hrs |
| PMVP - Landlord Screen| L | 8hrs| 0hrs | 0hrs |
| Total | H | 91hrs| 0hrs | 0hrs |


<br>

### Server (Back End)

#### ERD Model

[Database-model](https://drive.google.com/file/d/1B9r9Xa8nE6EDtrtkVGpSP4jLVgAJDX5n/view?usp=sharing)

<br>

***

## Post-MVP

- Impliment React Spring for transition effects of the images.
- Full screen image viewing
- Image upload directly from cellphones
- Add Buildings, apartments tables
- Impliment user type/permissions table
- Add a landlord screen of issues for each building

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
