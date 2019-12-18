import React, {useState, useEffect} from "react";

const ArticleView = props => {
  // FOR QUICK VIEW
  // IF THERE'S A PICTURE DISPLAY IT WITH TITLE
  // IF NOT JUST DISPLAY TITLE WITH FIRST SENTENCES
  return (
    <div className="articleView">
      {props.picture === undefined ? (
        <p>{props.description}</p>
      ) : (
        <img src={props.picture} />
      )}
      <h3>{props.title}</h3>
    </div>
  );
};

export default ArticleView;
