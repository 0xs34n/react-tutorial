# Pre-requisites

## 1. Install Node.js with NPM

[Node.js](https://nodejs.org/en/download/current/)

## 2. Install Create React App

`npm i -g create-react-app`

`create-react-app my-app-name`

## 3. Running the app

`npm run start`

# Components

## 1. What's a component?

A react component can be thought of a user interface component in your application.

![what-is-a-comp](img/what-is-component.png)

## 2. First Component

### a. import react 

```
import React, { Component } from 'react';
```

### b. inherit the Component class from react

```js
class App extends Component {
  
}
```

this will give you the helper functions, `render()` and other lifecycle methods like `componentDidMount`, `componentWillMount` and other lifecycle methods.

