import React, {useState, useEffect} from "react";

const CallingApiNews = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(props.url + "apiKey=803fdd9b8517490d89d8c85ade466b8d");

      const datas = await response.json();
      setData(datas.articles);
    }
    fetchData();
  }, [props.url]);

  return <div>{console.log(data)}</div>;
};

export default CallingApiNews;
