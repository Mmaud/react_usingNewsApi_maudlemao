import React, {useState, useEffect} from "react";
import ArticleView from "./articleView";

const ArticleViewList = datas => {
  // FOR QUICK VIEW
  // DISPLAY ALL THE ARTICLES VIEW
  let articlesList = datas.datas;
  let viewList = [];
  // here we fix to 1 the list begining because first article
  // will be separate
  for (let i = 1; i < 5; i++) {
    viewList.push(
      <ArticleView
        key={i}
        description={articlesList[i].description}
        picture={articlesList[i].urlToImage}
        title={articlesList[i].title}
        url={articlesList[i].url}
      />
    );
  }
  return (
    // <div className="container-fluid articleViewList">
    //   <h1 className="text-center mb-3">Bootstrap Multi-Card Carousel</h1>
    //   <div id="myCarousel" class="carousel slide" data-ride="carousel">
    //     <div className="carousel-inner row w-100 mx-auto">

    //       {/* {this.props.question.answers.map((answer, i) => {
    //         console.log("Entered");
    //         // Return the element. Also pass key
    //         return (<Answer key={i} answer={answer} />)
    //       })} */}
    <div class="container">
      <div className="card-deck">
        {articlesList.map((article, i) => {
          return (
            <ArticleView
              key={i}
              description={article.description}
              picture={article.urlToImage}
              title={article.title}
              url={article.url}
            />
          );
        })}
      </div>
    </div>

    // {/*
    //           <div>{viewList}</div> */}
    //         </div>
    //         <a className="carousel-control-prev" href="#myCarousel" role="button" role="button" data-slide="prev">
    //           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //           <span classNaùe="sr-only">Previous</span>
    //         </a>
    //         <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    //           <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //           <span className="sr-only">Next</span>
    //         </a>
    //       </div>
    //     </div>
  );
  //return <div>{console.log('art')}</div>
};

export default ArticleViewList;
