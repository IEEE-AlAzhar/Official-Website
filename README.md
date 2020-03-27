# IEEE Al-Azhar Official Website

The source code of `IEEE Al-Azhar` student activity's website. The website built to provide some of organization's services and represent information about it with simplicity in mind. Also it provides an opportunity for students to collaborate and contribute to enhance their programming and train to contribute to open source community.

![IEEE Logo](IEEE-final.png)

## Table of contents

1. [Installation](#install)
1. [Usage](#use)
1. [Dependencies](#dependencies)
1. [Structure](#structure)
1. [Contribution](#contribution)
1. [Style Guide](#style-guide)
1. [License](#license)

<a name="install"></a>

## Installation

Make sure to have [Node.js](https://nodejs.org/en/download/) & [yarn](https://classic.yarnpkg.com/en/docs/install/) installed on your machine.

1. Clone this repo `$ git clone https://github.com/IEEE-AZHAR/Official-website.git` or using `ssh`.

2. `$ cd Official-website`.

3. Run `$ yarn install` or just `yarn` or run `$ npm install` to install dependencies and packages.

<a name="install"></a>

## Usage

Run `$ yarn start` or `$ npm start` to start serving the app, then go to `https://localhost:3000` to view the app. `Yarn` is recommended.

## Dependencies

This app uses some dependencies:

1. [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - to implement routing in the app.

1. [Materia UI](https://material-ui.com/) - to add visual designs to the app and helps making css better and easier.

1. [css modules](https://github.com/css-modules/css-modules) - to scope the css and reduce unexpected visual results.

## Structure

```
.
├── App.js
├── globals
├── index.js
├── modules
│   ├── blog
│   │   ├── components
│   │   │   ├── blogCard
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   ├── blogListPage
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   └── singleBlogPage
│   │   │       ├── index.js
│   │   │       └── style.css
│   │   └── services
│   ├── contact
│   │   ├── components
│   │   │   ├── contactPage
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   └── form
│   │   │       ├── index.js
│   │   │       └── style.css
│   │   └── services
│   ├── events
│   │   ├── components
│   │   │   ├── eventCard
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   ├── eventForm
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   ├── eventsListPage
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   └── singleEventPage
│   │   │       ├── index.js
│   │   │       └── style.css
│   │   └── services
│   ├── handbooks
│   ├── static-pages
│   │   ├── About
│   │   │   ├── page
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   └── section
│   │   │       ├── index.js
│   │   │       └── style.css
│   │   └── Home
│   │       ├── components
│   │       │   ├── bestMembers
│   │       │   │   ├── index.js
│   │       │   │   └── style.css
│   │       │   ├── intro
│   │       │   │   ├── index.js
│   │       │   │   └── style.css
│   │       │   └── page
│   │       │       ├── index.js
│   │       │       └── style.css
│   │       └── services
│   ├── teamServices
│   │   ├── components
│   │   │   ├── serviceCard
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   └── servicesList
│   │   │       ├── index.js
│   │   │       └── style.css
│   │   └── store
│   └── vlog
├── serviceWorker.js
├── shared
└── styles.css
```

## Contribution



<a name="license"></a>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
