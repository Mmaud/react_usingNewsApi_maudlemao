import React, {useState, useEffect} from "react";

const ArticleView = props => {
  // FOR QUICK VIEW
  // IF THERE'S A PICTURE DISPLAY IT WITH TITLE
  // IF NOT JUST DISPLAY TITLE WITH FIRST SENTENCES
  return (
    // <a rel="noopener noreferrer" href={props.url} target="_blank" >
    //     <div className="card articleView" style={{width: "18rem"}}>
    //         {props.picture === null ? (
    //             <p>{props.description}</p>
    //         ) : (
    //                 <img src={props.picture} alt={'article'} />
    //             )}
    //         <h3>{props.title}</h3>
    //     </div>
    // </a>
    // <div class="carousel-item col-md-4 active">
    //     <div class="card">
    //         <img class="card-img-top img-fluid" src="http://placehold.it/800x600/f44242/fff" alt="Card image cap">
    //             <div class="card-body">
    //                 <h4 class="card-title">Card 1</h4>
    //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //             </div>
    // </div>
    //     </div>

    <div className="card articleView mb-4">
      {props.picture === null ? (
        <img
          className="card-img-top img-fluid"
          src={props.description}
          alt={"Card image cap"}
        />
      ) : (
        <img className="card-img-top img-fluid" src={props.picture} alt={"article"} />
      )}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a
          rel="noopener noreferrer"
          href={props.url}
          className="card-text"
          target="_blank"
        >
          <small className="text-muted">Go to article</small>
        </a>
      </div>
    </div>
  );
};

export default ArticleView;
