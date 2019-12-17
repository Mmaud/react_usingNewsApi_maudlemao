import React, {useState, useEffect} from "react";

const DisplayDayNews = () => {
  const [data, setData] = useState(null);

  // CALLING API
  // useEffect(
  //     async() => {
  //         const response = await fetch('https://newsapi.org/v2/top-headlines?' +
  //         'country=us&' +
  //         'apiKey=803fdd9b8517490d89d8c85ade466b8d');
  //         const datas = await response.json()
  //         setData(datas);
  //     },[]
  // )

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=803fdd9b8517490d89d8c85ade466b8d"
      );

      const datas = await response.json();
      setData(datas.articles);
    }
    fetchData();
  }, []);
  // TrytoDisplay() {
  //     let jsonResponse;
  //     console.log("youhou")
  //     var url = 'https://newsapi.org/v2/top-headlines?' +
  //         'country=us&' +
  //         'apiKey=803fdd9b8517490d89d8c85ade466b8d';
  //     var req = new Request(url);
  //     fetch(req)
  //         .then(function (response) {
  //             jsonResponse = response.json();
  //             console.log(jsonResponse)
  //         })
  // }
  return <div>{console.log(data)}</div>;
};

export default DisplayDayNews;
