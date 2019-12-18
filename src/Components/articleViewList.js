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
      />
    );
  }
  return <div className="articleViewList">{viewList}</div>;
  //return <div>{console.log('art')}</div>
};

export default ArticleViewList;
