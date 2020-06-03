# IEEE Al-Azhar Official Website

The source code of `IEEE Al-Azhar` student branch's website. The website built to provide some of organization's services and represent information about it with accessibility, performance and simplicity in mind. Also it provides an opportunity for students to collaborate and contribute to enhance their programming and train to contribute to open source community.

![IEEE Logo](./src/assets/images/logo.png)

## Table of contents

1. [Installation](#install)
1. [Usage](#use)
1. [Dependencies](#dependencies)
1. [Structure](#structure)
1. [Run the tests](#tests)
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

1. [react-video](https://video-react.js.org/) - to make an interactive video.

1. [react-lazy-load](https://www.npmjs.com/package/react-lazy-load) - to lazy load images to improve performance.

1. [react-content-loader](https://www.npmjs.com/package/react-content-loader) - to render facebook like loading components.

1. [cloudinary-react](https://github.com/cloudinary/cloudinary-react) - to resize images and get it in the appropriate size to improve performance.

## Structure

The folder structure of the application. The app is modular, every module encapsulates its own components and services. Each module contains `components` folder which has the presentational components and also pages, also the module contains the `services` folder if it's dynamic which has all the services that integrate with the `API`. Beside that there's the `__tests__` folder that contains the tests of all the components inside that module.

```
.
├── CONTRIBUTING.md
├── jsconfig.json - contains configurations of the app
├── LICENSE
├── package.json
├── package-lock.json
├── public
├── README.md
├── src
│   ├── App.js - contains the setup of the routes
│   ├── assets - all the static files like images, videos and fonts
│   ├── globals
│   │   ├── contexts - contexts of React context API
│   │   │   └── theme.context.js - the context that controls the switching between light and dark theme
│   │   ├── core.service.js - the core service of the crud operations (the base class)
│   │   ├── cssVarsPonyfill.js - support css variables usage
│   │   └── routes.js - the routes of the app to be used in APP.js
│   ├── index.js - the entry point of the app
│   ├── modules - all the business logic of the app (components, services, ...etc)
│   │   ├── blog
│   │   │   ├── components
│   │   │   │   ├── blogCard
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── blogListPage
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── CategoriesFilter
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── SearchFilter
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   └── singleBlogPage
│   │   │   │       ├── index.js
│   │   │   │       └── style.module.css
│   │   │   ├── services
│   │   │   │   ├── blog.service.js
│   │   │   │   └── category.service.js
│   │   │   └── __tests__
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
│   │   │   ├── services
│   │   │   │   └── contact.service.js
│   │   │   └── __tests__
│   │   ├── events
│   │   │   ├── components
│   │   │   │   ├── ApplyButton
│   │   │   │   │   ├── ApplyButton.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── eventCard
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── EventDetails
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── eventsListPage
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── eventsSection
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── Gallery
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.module.css
│   │   │   │   ├── PopupContent
│   │   │   │   │   ├── PopupContent.js
│   │   │   │   │   └── style.module.css
│   │   │   │   └── singleEventPage
│   │   │   │       ├── index.js
│   │   │   │       └── style.module.css
│   │   │   ├── services
│   │   │   │   └── events.service.js
│   │   │   └── __tests__
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
│   │   │   │       ├── section
│   │   │   │       │   ├── index.js
│   │   │   │       │   └── style.module.css
│   │   │   │       └── video
│   │   │   │           └── index.js
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
│   │   │       ├── services
│   │   │       │   └── members.service.js
│   │   │       └── __tests__
│   │   └── teamServices
│   │       ├── components
│   │       │   ├── singleServicePage
│   │       │   │   ├── index.js
│   │       │   │   └── style.module.css
│   │       │   └── teamServicesSection
│   │       │       ├── index.js
│   │       │       └── style.module.css
│   │       ├── store
│   │       │   └── services.json
│   │       └── __tests__
│   │           ├── singleServiceSection.test.js
│   │           └── __snapshots__
│   ├── serviceWorker.js
│   ├── shared
│   │   ├── footer
│   │   │   ├── index.js
│   │   │   └── style.module.css
│   │   ├── header
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Image-loader
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Input.js
│   │   ├── layout
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── lazy-image
│   │   │   └── index.js
│   │   ├── loading
│   │   │   └── index.js
│   │   ├── newsletterForm
│   │   │   ├── index.js
│   │   │   └── style.module.css
│   │   ├── notFoundPage
│   │   │   ├── index.js
│   │   │   └── style.module.css
│   │   ├── services
│   │   │   ├── date.service.js
│   │   │   ├── image.service.js
│   │   │   ├── language.service.js
│   │   │   ├── newsletter.service.js
│   │   │   └── validation.service.js
│   │   ├── sideDrawer
│   │   │   ├── index.js
│   │   │   └── style.module.css
│   │   ├── __tests__
│   │   │   ├── footer.test.js
│   │   │   ├── header.test.js
│   │   │   ├── newsLetter.test.js
│   │   │   ├── sideDrawer.test.js
│   │   │   └── themeBtn.test.js
│   │   └── theme-button
│   │       ├── index.js
│   │       └── style.css
│   └── styles.css
├── style-guide.md - contains our code convention and its style and the css colors, fonts, spaces, ...etc
└── TODOs.md
```

## Run the tests

To run all the tests: `$ npm run test` and solve the broken tests.

## Contribution

Follow the guides mentioned in the [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
