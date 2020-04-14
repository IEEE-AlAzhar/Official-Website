# IEEE Al-Azhar Official Website

The source code of `IEEE Al-Azhar` student activity's website. The website built to provide some of organization's services and represent information about it with simplicity in mind. Also it provides an opportunity for students to collaborate and contribute to enhance their programming and train to contribute to open source community.

![IEEE Logo](./src/assets/images/logo.png)

## Table of contents

1. [Installation](#install)
1. [Usage](#use)
1. [Dependencies](#dependencies)
1. [Structure](#structure)
1. [Contribution](#contribution)
1. [License](#license)

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

1. [Bootstrap](https://getbootstrap.com/) - to add visual designs to the app and helps making css better and easier.

1. [react-helmet](https://github.com/nfl/react-helmet) - to add titles and meta tags to the pages and improve seo of the page.

1. [css modules](https://github.com/css-modules/css-modules) - to scope the css and reduce unexpected visual results. See [this](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet) for simplified explanation and how we use it in our app.

1. [axios](https://github.com/axios/axios) - to consume APIs and integrate with the `back-end`.

1. [fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) - to add descriptive icons.

1. [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel) - to make a responsive carousel.

## Structure

The folder structure of the application. The app is modular, every module encapsulates its own components and services. Each module contains `components` folder which has the presentational components and also pages, also the module contains the `services` folder if it's dynamic which has all the services that integrate with the `API`.

```
.
├── CONTRIBUTING.md
├── jsconfig.json
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── globals
│   │   ├── contexts
│   │   │   └── theme.context.js
│   │   └── routes.js
│   ├── index.js
│   ├── modules
│   │   ├── blog
│   │   │   ├── components
│   │   │   │   ├── blogCard
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── blogListPage
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   └── singleBlogPage
│   │   │   │       ├── index.js
│   │   │   │       └── style.module.css
│   │   │   └── services
│   │   │       └── blog.service.js
│   │   ├── contact
│   │   │   ├── components
│   │   │   │   ├── form
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── icon
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   └── page
│   │   │   │       ├── index.js
│   │   │   │       └── style.module.css
│   │   │   └── services
│   │   │       ├── contact.service.js
│   │   │       └── validation.service.js
│   │   ├── events
│   │   │   ├── components
│   │   │   │   ├── eventCard
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── eventsListPage
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   └── singleEventPage
│   │   │   │       ├── index.js
│   │   │   │       └── style.module.css
│   │   │   └── services
│   │   │       └── events.service.js
│   │   ├── static-pages
│   │   │   ├── about
│   │   │   │   └── components
│   │   │   │       ├── page
│   │   │   │       │   ├── components
│   │   │   │       │   │   ├── header
│   │   │   │       │   │   │   ├── index.js
│   │   │   │       │   │   │   └── style.module.css
│   │   │   │       │   │   ├── IEEEAZHARSection
│   │   │   │       │   │   │   ├── index.js
│   │   │   │       │   │   │   └── style.module.css
│   │   │   │       │   │   ├── IEEESection
│   │   │   │       │   │   │   ├── index.js
│   │   │   │       │   │   │   └── style.module.css
│   │   │   │       │   │   └── structure
│   │   │   │       │   │       ├── index.js
│   │   │   │       │   │       └── style.module.css
│   │   │   │       │   ├── index.js
│   │   │   │       │   └── style.module.css
│   │   │   │       └── section
│   │   │   │           ├── index.js
│   │   │   │           └── style.module.css
│   │   │   └── home
│   │   │       ├── components
│   │   │       │   ├── bestMembers
│   │   │       │   │   ├── index.js
│   │   │       │   │   └── style.module.css
│   │   │       │   ├── intro
│   │   │       │   │   ├── index.js
│   │   │       │   │   └── style.module.css
│   │   │       │   └── page
│   │   │       │       ├── index.js
│   │   │       │       └── style.module.css
│   │   │       └── services
│   │   │           └── members.service.js
│   │   └── teamServices
│   │       ├── components
│   │       │   ├── serviceCard
│   │       │   │   ├── index.js
│   │       │   │   └── style.module.css
│   │       │   ├── servicesList
│   │       │   │   ├── index.js
│   │       │   │   └── style.module.css
│   │       │   └── singleServicePage
│   │       │       ├── index.js
│   │       │       └── style.module.css
│   │       └── store
│   │           └── services.json
│   ├── serviceWorker.js
│   ├── shared
│   │   ├── footer
│   │   │   ├── index.js
│   │   │   └── style.module.css
│   │   ├── header
│   │   │   ├── index.js
│   │   │   └── style.module.css
│   │   └── layout
│   │       ├── index.js
│   │       └── style.module.css
│   └── styles.css
└── style-guide.md
│   │   │   └── style.css
│   │   ├── layout
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── newsletterForm
│   │   │   ├── index.js
│   │   │   └── style.module.css
│   │   └── services
│   │       ├── newsletter.service.js
│   │       └── validation.service.js
│   └── styles.css
├── style-guide.md
└── yarn.lock
```

## Contribution

Follow the guides mentioned in the [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
