# Electron with TypeScript React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Starts React project on [http://localhost:3000](http://localhost:3000) and then directs Electron window to that URL.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn build:desktop`

1. Sets Electron development environmental variable to false.\
2. Builds the app for production to the `build` folder.\
3. Compiles `electron.ts` and copies it into `build` folder.\
4. Builds Electron application and points the `main` file in package.json to `build/electron.js`.

🎉 **Your app is ready to be deployed!** 🎉
