# The projects of the competition

Here's the list of the projects to pick to contribute to our code base and their requirements:

1. Validate the forms with `joi` or `formik`.
2. Make the app `PWA`.
3. Write missing tests.
4. Solve opened issues.

## 1. Validate the form with joi or formik (beginner - intermediate)

Our contact and newsletter forms are validated but the validation is not good and not readable. Also the `name` field accepts special characters.

Another issue of the validation is that the phone number is not validated as it should match the pattern `(002) 01xxxxxxxxx` as x is a number.

Also the error messages should be shown on change not on submit only to give the user immediate feedback.

Head to [Formik docs](https://jaredpalmer.com/formik/docs/overview) or search for `joi` to use it. If you found any package that you think it's more easy and light to use, please mention it in your proposal.

## 2. Make the app PWA (intermediate)

Our app is good, fast and accessible, but we need to improve its accessibility and increase its simplicity by making it `progressive web app`, so that our app can be installed(add to home screen), works offline and faster.

Also it's better to add `Push notifications` so that the user when he install the app can get notifications about new article or event.

To know how to make the app `PWA`, you can read this article [How to Make your React App a Progressive Web App (PWA)](https://felixgerschau.com/how-to-make-your-react-app-a-progressive-web-app-pwa). Also you can read these articles for `push notifications`: [Push Notifications in JavaScript? Yes, you can!](https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce) & [React Push notifications (with hooks)](https://itnext.io/react-push-notifications-with-hooks-d293d36f4836) but we don't use `hooks`, so be careful.

## 3. Write missing tests (advanced)

Our app contains tests for a lot of components, but there's some that doesn't have tests. Write tests for components that doesn't have using `jest` & `react testing library`. The tests should be in the folder `__tests__` of the module and the file should be named like: `[component].test.js` as component is the name of the component you want to test.

## 4. Solve opened issues (beginner)

There's some issues opened in this repo head to it and solve them all by mentioning them in your `pull request`.
