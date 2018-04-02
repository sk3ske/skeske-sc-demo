import React, { Component } from 'react';
import './App.css';
import RepoCardContainer from './RepoCardContainer.js';
import repoList from './crypto-repo-list.json';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto is COOL</h1>
          <h5>
            Top 6 Cryptocurrencies by market share and their associated largest GitHub repos - <i> current as of 4/1/2018</i>
          </h5>
        </header>
        {repoList.map((obj, index) =>
          <RepoCardContainer queryData={obj} key={index}/>
        )}
      </div>
    );
  }
}

export default App;
