import React, {useContext} from "react";
import Article from "./Article";
import ArticleSearch from "./ArticleSearch";
import {ArticleContext} from "../Context/Context";

export default function ArticleList() {
  const appContext = useContext(ArticleContext);
  const {showHomeButton, articles, handleReturnHome} = appContext;

  return (
    <>
      <ArticleSearch />
      <div className="container my-5 home-button">
        {showHomeButton && (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleReturnHome()}
          >
            Last published articles
          </button>
        )}
        <div className=" d-flex d-flex justify-content-center mb-3">
          <h1 className="text-slaned ">Last news</h1>
        </div>

        <div className="row article-list">
          {articles.map((article, index) => {
            return <Article key={index} article={article} />;
          })}
        </div>
      </div>
    </>
  );
}
