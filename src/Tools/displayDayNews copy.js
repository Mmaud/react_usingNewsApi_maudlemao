import React, {Component} from "react";

export class DisplayDayNewsCopy extends Component {
  TrytoDisplay() {
    let jsonResponse;
    console.log("youhou");
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=803fdd9b8517490d89d8c85ade466b8d";
    var req = new Request(url);
    fetch(req).then(function(response) {
      jsonResponse = response.json();
      console.log(jsonResponse);
    });
  }
  render() {
    return <div>{this.TrytoDisplay()}</div>;
  }
}
