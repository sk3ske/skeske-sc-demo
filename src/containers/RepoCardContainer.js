import React, { Component } from 'react';
import RepoCard from '../components/RepoCard.js';

const API_URL = 'https://api.github.com/repos/';

class RepoCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  description: '',
                  avatar_url: '',
                  language: '',
                  open_issues: 0,
                  forks: 0,
                  homepage: '',
                  github_url: ''
                  };
  }

  componentDidMount() {
    var queryString = this.props.queryData.user + '/' + this.props.queryData.repo;
    fetch(API_URL + queryString)
      .then(response => response.json())
      .then(data => this.setState({ name: data.name,
                                    description: data.description,
                                    avatar_url: data.owner.avatar_url,
                                    language: data.language,
                                    open_issues: data.open_issues,
                                    forks: data.forks,
                                    homepage: data.homepage,
                                    github_url: 'http://github.com/' + queryString}));
  }

  render() {
    return (
        <RepoCard data={this.state} />
    );
  }
}

export default RepoCardContainer;
