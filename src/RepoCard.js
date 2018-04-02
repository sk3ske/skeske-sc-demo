import React from 'react';

const RepoCard = ({data}) =>
      <div key={data.repo}>
        <br />
        <br />
        {data.name}<br />
        {data.description}<br />
        {data.avatar_url}<br />
        {data.language}<br />
        {data.open_issues}<br />
        {data.forks}<br />
        {data.homepage}<br />
      </div>

export default RepoCard;
