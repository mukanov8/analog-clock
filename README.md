# React Analog Clock

[![Netlify Status](https://api.netlify.com/api/v1/badges/373ec502-b486-48bc-b8da-881de8e22fda/deploy-status)](https://app.netlify.com/sites/analog-clock-demo/deploys)

A simple Analog Clock implementation using React, styled-components, and Recoil for state managment.

## Demo

You can check the demo at <https://analog-clock-demo.netlify.app/>

## Features

- Users can check the time from the analog clock and also digital time from the tooltip, by hovering over the clock.

## Built using

- Create React App
- Typescript
- [styled-components](https://styled-components.com/)
- [Recoil](https://recoiljs.org/)
- [ReactTooltip](https://www.npmjs.com/package/react-tooltip)

## Usage

You can customize the clock by passing down the props to AnalogClock component

```JSX
const CLOCK_OPTIONS = {
  baseOptions: {
    baseColor: '#aaaaaa',
    labelColor: '#d97a90',
    showNumbers: false,
    size: 400,
  },
  handColors: {
    second: '#d81c7a',
    minute: '#459cff',
    hour: '#446aaa',
  },
};

<AnalogClock {...CLOCK_OPTIONS} />
```

## Props

- **baseOptions**: `[object]`
  - **baseColor**: `[string]`
    - Background color of a clock body
  - **labelColor**: `[string]`
    - Color of all labels on the clock body, i.e. numbers, borders, ticks/lines.
  - **showNumbers**: `[boolean]`
    - Toggles the hour numbers.
  - **size**: `[integer]`
    - Size of the clock in pixels.
- **handColors**: `[object]`
  - Color of each hand.
  - **hour**: `[string]`
    - Color of the hour hand.
  - **minute**: `[string]`
    - Color of the minute hand.
  - **second**: `[string]`
    - Color of the second hand.

## Structure overview

A quick look at the top-level files and directories of this project.

    .
    ├── node_modules
    ├── src
    |   ├── components
    |       ├── AnalogClock.tsx
    |       ├── AnalogClockBase.tsx
    |   ├── constants
    |       ├── analog-clock.constant.ts
    |   ├── helpers
    |       ├── analog-clock.helper.ts
    |   ├── stores
    |       ├── analog-clock.store.ts
    |   ├── themes
    |       ├── globalStyle.tsx
    |   ├── App.tsx
    |   ├── index.tsx
    ├── .gitignore
    ├── .prettierrc
    ├── .prettierignore
    ├── .eslintrc
    ├── .eslintignore
    ├── tsconfig.json
    ├── yarn.lock
    ├── package.json
    └── README.md

## How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, run:

### `yarn or yarn install`

Installs all dependencies defined in package.json file

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
