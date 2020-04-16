// Only characters are allowed..
export const firstNameValid = (firsName) => /^[A-Za-z]{1,}$/.test(firsName);

// Only characters are allowed..
export const lastNameValid = (lastName) => /^[A-Za-z]{1,}$/.test(lastName);

// Only characters are allowed..
export const EmailValid = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
