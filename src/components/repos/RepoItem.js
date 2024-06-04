import React from "react";

export const RepoItem = (props) => {
  const { name, html_url } = props.repo;
  return (
    <div className="card">
      <a href={html_url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
};