import React from "react";

export default function Article({article}) {
  const {urlToImage, author, title, source, url} = article;
  const replaceIfNoImg = require("../Imgs/noimage.jpg");

  const handleShowInfo = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card">
        {urlToImage === null ? (
          <img
            src={replaceIfNoImg}
            alt="article"
            className="img-card-top"
            style={{height: "14rem"}}
          />
        ) : (
          <img
            src={urlToImage}
            alt="article"
            className="img-card-top"
            style={{height: "14rem"}}
          />
        )}
        <div className="card-body text-capitalize">
          <h6>{title}</h6>
          {author === null ? (
            <h6 className="text-warning">Author: unknown</h6>
          ) : (
            <h6 className="text-warning">Author: {author}</h6>
          )}
        </div>
        <div className="card-footer">
          <button
            type="button"
            style={{margin: `13px`}}
            className="btn btn-primary text-center"
            data-id={source.id}
            onClick={handleShowInfo}
          >
            Go to article
          </button>
        </div>
      </div>
    </div>
  );
}
