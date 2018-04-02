Simple React app to query the GitHub API for public repo information on the top six cryptocurrencies by market cap (configured manually).

It is built on top of [Create React App](https://github.com/facebookincubator/create-react-app) and utilizes [React Semantic UI](https://react.semantic-ui.com/).

Settings
-
Inside the `src` directory, you'll find `crypto-repo-list.json`. This file contains an array of objects with the `user` and `repo` of the top 6 crypto repos by market cap (as originally determined using https://coinmarketcap.com/). These two parameters are required by the GitHub API /repos/ endpoint.

To add more repos to the page or remove some from the existing display, simply add/remove a corresponding object (with `user` and `repo` name/value pairs) and rebuild the app.

Usage
-
To *install* the app, run the command `npm install` inside the top-level folder. 

To *run* the app in development mode, run the command `npm start` inside the top-level folder. Open http://localhost:3000 to view it in a browser.

To *deploy* the app, use the command `npm run build`, which will build the app to the `build` folder. This will bundle React in production mode and optimize for performance.

For more information, visit the create-react-app docs:
> https://github.com/facebookincubator/create-react-app#npm-start-or-yarn-start
