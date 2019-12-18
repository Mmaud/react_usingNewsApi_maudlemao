import React, {useState, useEffect} from "react";
import CallingApiNews from "./callingApiNews";
import useFetchArticles from "./useFetchArticles";
import ArticleViewList from "../Components/articleViewList";

const DisplayDayNews = () => {
  const url = "https://newsapi.org/v2/top-headlines?" + "country=us&";
  const {data, loading, error} = useFetchArticles(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {data && data.length > 0 && <ArticleViewList datas={data} />}
      <div>{console.log(data)}</div>
    </div>
  );
};

export default DisplayDayNews;
