import React, {useState, useEffect} from "react";
import useFetchArticles from "./useFetchArticles";
import ArticleViewList from "../Components/articleViewList";
import Search from "../Components/search";

const DisplayDayNews = () => {
  const [url, setUrl] = useState("https://newsapi.org/v2/top-headlines?" + "country=us");
  // const search = searchValue => {
  //   console.log(searchValue)
  //   setUrl("https://newsapi.org/v2/top-headlines?" + { searchValue })
  // }
  const {data, loading, error} = useFetchArticles(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* <Search search={search} /> */}
      {data && data.length > 0 && <ArticleViewList datas={data} />}
      <div>{console.log(data)}</div>
    </div>
  );
};
export default DisplayDayNews;
