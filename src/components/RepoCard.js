import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'

const RepoCard = ({data}) =>
  <Card color='grey'>
    <Card.Content>
      <Image floated='right' size='tiny' src={data.avatar_url} />

      <Card.Header>
        <a href={data.github_url}>{data.name}</a>
      </Card.Header>

      <Card.Meta>
        {data.description}
      </Card.Meta>

    </Card.Content>
    <Card.Content extra>
        <Icon name='code' />
        {data.language}
        &nbsp;&nbsp;&nbsp;&nbsp;

        <Icon name='warning circle' />
        <a href={data.github_url + "/issues"}>{data.open_issues} issues</a>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <Icon name='fork' />
        <a href={data.github_url + "/branches"}>{data.forks} forks</a>

        <br />
        <a href={data.homepage}>{data.homepage}</a>
      </Card.Content>
  </Card>

export default RepoCard;
