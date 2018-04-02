import React, { Component } from 'react';
import './App.css';
import RepoCardContainer from './containers/RepoCardContainer.js';
import repoList from './crypto-repo-list.json';
import { Header, Container, Card, Icon, Divider } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-content">
          <Header attached='top'
                  size='medium'
                  inverted />

          <Header as='h2' icon>
            <Icon name='github'
                  color='grey'/>
            Cryptocurrencies on GitHub
            <Header.Subheader>
              Most prominent repositories of the top 6 Cryptocurrencies by market cap.
              <br />
              <i>Source: <a href="https://coinmarketcap.com/">coinmarketcap</a> - current as of 4/1/2018</i>
            </Header.Subheader>
          </Header>

          <Divider hidden />

          <Container>
            <Card.Group centered>
              {repoList.map((obj, index) =>
                <RepoCardContainer queryData={obj} key={index}/>
              )}
            </Card.Group>
          </Container>

          <Divider hidden />
        </div>

      <Header attached='bottom' size='medium' inverted >
        created by <a href="http://www.skeske.com">skeske</a> using <a href="https://reactjs.org/">react</a> and <a href="https://react.semantic-ui.com/">semantic-ui</a>
    </Header>

    </div>
    );
  }
}

export default App;
