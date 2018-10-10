import React, { Component } from 'react';
import './App.css';
import Parser from 'rss-parser';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed : { 
        title : null,
        items : [] 
      } 
    };
  }

  componentWillMount() {
    let parser  = new Parser();
    const CORS = "https://cors-anywhere.herokuapp.com/";
    const RSSFEED = "http://www.nwb-campus-blog.de/feed";
    parser.parseURL(CORS + RSSFEED, (err,feed) =>  {
       this.setState({feed: feed}); 
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.feed.title}</h1>
        {this.state.feed.items.map(item => <p>{item.title}</p>) }
     </div>
    );
  }
}

export default App;
