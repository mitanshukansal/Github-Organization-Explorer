import React from 'react';
import RepoDisplay from "./RepoDisplay.js"

export default function Repos(props) {
  return (
    <>
    <div className="accordion container ml-5" id="accordionPanelsStayOpenExample">
    <RepoDisplay/>
    </div>
    </>
  );
}
