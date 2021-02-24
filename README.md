# Front-End-Capstone

Set up of repo - webpack
- npm init -y
- add build and start scripts to package json
- npm install dependencies
  - axios
  - react, react-dom
  - nodemon
  - path
  - express
  - webpack, webpack-cli
  - babel-loader, @babel/preset-react, @babel/preset-env, @babel/core
    - (npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli react react-dom --save)
  - style- components
    - (npm install --save styled-components)
  - maybe mongo, mongoose, morgan
- make webpack.config.js file
  - module.exports with input, output(path, filename), module with rules, mode, resolve
