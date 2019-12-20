// import React from "react";
// //import logo from './logo.svg';
// import "./App.css";
// import ExConst from "./Containers/exConst";
// import DisplayDayNews from "./Tools/displayDayNews";
// import Search from "./Components/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React, {useContext} from "react";
import ArticleList from "./Components/ArticleList";
import {ArticleContext} from "./Context/Context";

//import RecipeList from './components/RecipeList';
//import { RecipeContext } from './context/index'

function App() {
  // const url = "https://newsapi.org/v2/top-headlines?" + "country=us&";
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <ExConst text="une props" />
  //       <DisplayDayNews />
  //     </header>
  //   </div>
  // );
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
