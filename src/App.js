import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React, {useContext} from "react";
import ArticleList from "./Components/ArticleList";
import {ArticleContext} from "./Context/Context";
import "./App.css";

function App() {
  const appContext = useContext(ArticleContext);
  const {loading, search} = appContext;
  return (
    <div>
      <Header />
      {loading ? (
        <h1 className="text-center">...loading {search} article</h1>
      ) : (
        <ArticleList />
      )}
      <Footer />
    </div>
  );
}

export default App;
