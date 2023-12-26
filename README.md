# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

### Links

- Solution URL: [here](https://your-solution-url.com)
- Live Site URL: [here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr)

### What I learned

- How to use Typescript in React, React Router, Styled-Components and Vite

### Continued development

### Useful resources

#### HTML Related

- [Window: location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [7 Alternatives to the <div> HTML Tag](https://medium.com/@zac_heisey/7-alternatives-to-the-div-html-tag-7c888c7b5036)

#### CSS Related

- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [place-items](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)
- [:where()](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)
- [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
- [Character issue with the Bellefair Google font](https://stackoverflow.com/questions/72577560/character-issue-with-the-bellefair-google-font)

#### Typescript Related

- [React Typescript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [React, passing state setter (useState) to child component with TypeScript](https://stackoverflow.com/questions/72383412/react-passing-state-setter-usestate-to-child-component-with-typescript)
- [How to write the correct type for useLoaderData()? (Typescript) #9792](https://github.com/remix-run/react-router/discussions/9792)

#### Vite Related

- [Static Asset Handling](https://vitejs.dev/guide/assets)

## Author

- Website - [Zun Liang](https://zunldev.com/)
- GitHub - [@zun-liang](https://github.com/zun-liang)
- Frontend Mentor - [@zun-liang](https://www.frontendmentor.io/profile/zun-liang)
- freeCodeCamp - [@zun-liang](https://www.freecodecamp.org/zun-liang)

## Acknowledgments

- [Build a Space Travel Website](https://scrimba.com/learn/spacetravel)
  I learned some pretty cool css skills in Kevin Powell's course and utilized them in this solution.
