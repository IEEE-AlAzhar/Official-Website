# Our Style Guide

Make sure to read these guidelines to be in sync with us in our process and to make a great experience. We're using [css variables](https://www.w3schools.com/css/css3_variables.asp).

## Table of contents

1. `Layout`
1. `Colors`
1. `Typography`
1. `General Rules`
1. `Naming Convention`

## Layout

- We'll rely on `Bootstrap`'s `container`, `grid` & `devices breakpoints`
- Each `section` in the home page should have padding-y(top & bottom) 6rem - 8rem
  - `--section-y-spacing: 8rem;`
- Each `heading` of a section should have space between it and the content of the section 4rem - 5rem
  - `--section-heading-spacing: 5rem;`

## Colors

### light-theme:

- `--layout-primary`: #fff; `// used for main background`
- `--layout-secondary`: #0a111a; `// used for buttons, borders and cards' background`
- `--text-primary`: #242627; `// used for paragraphs text`
- `--text-secondary`: #0a111a; `// used for headings and side notes text`
- `--background-secondary`: #0a111a; `// used for cards background`
- `--btn-hover`: #024b88; `// used for hover on buttons`

### dark-theme:

- `--layout-primary`: #0a111a; `// used for main background`
- `--layout-secondary`: #1c7fd0; `// used for buttons, borders and cards' background`
- `--text-primary`: #fff; `// used for paragraphs text`
- `--text-secondary`: #1c7fd0; `// used for headings and side notes text`
- `--background-secondary`: #343a40; `// used for cards background`
- `--btn-hover`: #fff; `// used for hover on buttons`

> To test the dark mode, add `dark-theme` class to the container of the component you are working on and use the above variables.

## Typography

### Family

- `--heading-font-family`: 'Rubik', sans-serif;
- `--body-font-family`: 'PT Sans', sans-serif;

### Size

- `--main-font-size`: 1.2rem; `// used for paragraphs, buttons`
- `--heading-2-font-size`: 2rem;
- `--heading-3-font-size`: 1.8rem;

## General rules

- Paragraphs `line-height`: 1.5;
- `letter-spacing`: 0.12rem;
- `word-spacing`: 0.16rem;
- All styles should have one line space between each other

```
.class1 {
  some: style;
}
// There should a space here
.class2 {
  some: style;
}
```

## Naming Conventions

- Class names should follow [BEM](https://en.bem.info/methodology/quick-start/) Methodology. You can also read this [Cheat sheet](https://9elements.com/bem-cheat-sheet/).
- Variable, Functions, Methods & components names' should be in `camelCase`.
