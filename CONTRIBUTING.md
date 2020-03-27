# Contribution Guidelines

We are very grateful for your contribution and your time you spend to help us enhance the application and we are excited to welcome you. Make sure to understand the file structure before any edit.

## Here are the ways you can help

1. Improve existing features.
1. Add a new feature.
1. Test for issues and report them.
1. Help in code reviewing and provide feedback.

## Required Steps to follow to make your PR accepted and merged

Here are some cases you'll encounter while contributing:

### Add a new component

To add a new component, think about it and its functionality. Is this component used on different parts of the application? if so, put it in the `shared` folder. Is this component attached to a specific part? if so, think for what module it belongs and add it to the `components` folder in the module you found the component belongs to.

The component should consists of `index.js` & `style.module.css` files.

### Add a new service

If you found that there's a module lacks for integration with back-end or some functionality that depends on something outside the module, add it to the `services` folder in that module.

The service should be written like that `[serviceName].service.js` as the `[serviceName]` is the meaningful name of your service that describes what your service does.

### Add a new module

If you see that there's a new module suitable for the application, write a proposal first that describes the following:

1. What the module is ? and what does it do ?
1. Why you think it's required ?
1. What are the requirements you want to finish this module ?
1. What is the time expected to finish it ?
1. What are the tools you will use to build it ?
1. What are the components and services you'll add ? (specify the name of the component and the function of this component).

After your proposal accepted, make a new folder in the `modules` folder. The folder should contains `components` folder that contains all the components used on this module & `services` folder that contains all the services provided to the module.

Make the name of the components helpful and meaningful that describes the functionality of the components. Don't forget to make the component as we described before.

### Found a critical bug

If you found a critical bug, open an `issue` on the issues tab and provide a detailed description about what you found.

## Frequently Asked Questions

### I found a typo, should I report an issue before I can make a pull request?

For typos and other wording changes, you can directly open pull requests without first creating an issue. Issues are more for discussing larger problems associated with code or structural aspects of the curriculum.

When in doubt, you can reach out to our platform dev team to help you with this:

| Name          | GitHub                                             |
| :------------ | :------------------------------------------------- |
| Samaa Mohamed | [`@samaaMohamed`](https://github.com/samaaMohamed) |
| Lina Ahmed    | [`@leenaAhmed`](https://github.com/leenaAhmed)     |
| Mohamed Saad  | [`@dvmhmdsd`](https://github.com/dvmhmdsd)         |

> **Email: `ieeeaztechnicalcommittee@gmail.com`**
