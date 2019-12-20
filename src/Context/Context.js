/* eslint-disable */
import React, {useState, useEffect} from "react";

const ArticleContext = React.createContext();

//let api = `https://api.myjson.com/bins/t7szj`
const apiKey = `&apiKey=803fdd9b8517490d89d8c85ade466b8d`;

const ArticleProvider = props => {
  let welcomeUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=803fdd9b8517490d89d8c85ade466b8d`;
  //AS API KEY IS AFTER WE NEED TO ONLY DECLARE THE FIRST PART
  // THEN THE SEARCH PART THEN THE API KEY
  //let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=803fdd9b8517490d89d8c85ade466b8d"
  //let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=803fdd9b8517490d89d8c85ade466b8d"
  let url = "https://newsapi.org/v2/";
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchArticle = (async () => {
    try {
      const articleData = await fetch(welcomeUrl);
      const {articles} = await articleData.json();
      setArticles(articles);
      setLoading(false);
      console.log(articles);
    } catch (e) {
      if (e) {
        console.log(e.message, "Try updating the API key in App.js");
      }
    }
  });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      // with set the url with search word
      const searchUrl = `${url}everything?q=${search}${apiKey}`;
      const searchedArticleData = await fetch(searchUrl);
      const {articles} = await searchedArticleData.json();
      setArticles(articles);
      setLoading(false);
      setShowHomeButton(true);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSearchChange = e => {
    // set search word
    setSearch(e.target.value);
  };
  const handleReturnHome = () => {
    fetchArticle();
    setShowHomeButton(false);
  };

  // generate a warning but if we delete the array
  // it renders non stop
  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        loading,
        search,
        showHomeButton,
        articles,
        handleSearchChange,
        handleSubmit,
        handleReturnHome,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};
const ArticleConsumer = ArticleContext.Consumer;
export {ArticleProvider, ArticleConsumer, ArticleContext};
