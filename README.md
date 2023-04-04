# React Styled Guide

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![npm version](https://img.shields.io/npm/v/react-styled-guide.svg?style=flat)](https://www.npmjs.com/package/react-styled-guide)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=react-styled-guide&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=react-styled-guide)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-styled-guide?style=flat-square)](https://bundlephobia.com/package/react-styled-guide@latest)
[![npm downloads](https://img.shields.io/npm/dm/react-styled-guide.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-styled-guide)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)
[![Known Vulnerabilities](https://snyk.io/test/npm/react-styled-guide/badge.svg)](https://snyk.io/test/npm/react-styled-guide)

React Styled Guide is a package that offers you an easy way to configure your own style guide and handle theme state in a React application build with Styled-Components.

- [React Styled Guide](#react-styled-guide)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Configure provider](#configure-provider)
  - [Examples](#examples)
    - [Style](#style)
    - [Theme](#theme)
    - [Application](#application)
  - [API](#api)
    - [Schemes/Types](#schemestypes)
      - [StyledGuideProps](#styledguideprops)
      - [ThemeType](#themetype)
      - [StyleGuide](#styleguide)
      - [Colors](#colors)
      - [ColorTokens](#colortokens)
      - [FontSizes](#fontsizes)
      - [FontWeights](#fontweights)
      - [Sizes](#sizes)
      - [UseThemeType](#usethemetype)
    - [Style helpers](#style-helpers)
      - [getStyleGuide()](#getstyleguide)
      - [getColor()](#getcolor)
      - [getColorByTheme()](#getcolorbytheme)
      - [getFontSize()](#getfontsize)
      - [getFontWeight()](#getfontweight)
      - [getSize()](#getsize)
    - [Theme hook](#theme-hook)
      - [useTheme()](#usetheme)
  - [Contributing](#contributing)
    - [Cloning repository](#cloning-repository)
    - [Installing dependencies](#installing-dependencies)
    - [Developing](#developing)
    - [Testing](#testing)
    - [Linting](#linting)
    - [Example Application](#example-application)
  - [LICENSE](#license)

## Requirements

- `react: >=18.2`
- `styled-components: >=5.3`

## Installation

Using npm:

```bash
$ npm install react-styled-guide
```

Using yarn:

```bash
$ yarn add react-styled-guide
```

## Usage

### Configure provider

Once the package is installed, you can import the library using import or require approach:

- **Step 1**: Import package provider (`StyledGuideProvider`) according to your JavaScript environment;

CommonJS

```jsx
// index.jsx
const { StyledGuideProvider } = require('react-styled-guide');
```

ECMAScript

```jsx
// index.jsx
import { StyledGuideProvider } from 'react-styled-guide';
```

TypeScript

```tsx
// index.tsx
import { StyledGuideProvider, StyledGuideProps } from 'react-styled-guide';
```

- **Step 2**: Create your own StyleGuide using `StyledGuideProps` schema/type;

CommonJS/ECMAScript:

```jsx
// index.jsx
const initialStyleGuide = {
  ...
};
```

TypeScript:

```tsx
// index.tsx
const initialStyleGuide: StyledGuideProps = {
  ...
};
```

- **Step 3**: wrap your components with `<StyledGuideProvider />` passing the initial state you have just created in previous step;

```tsx
 // index.tsx
...

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StyledGuideProvider value={initialStyleGuide}>
    {/* add your components here */}
  </StyledGuideProvider>
);

```

## Examples

### Style

Set a color of a text:

```tsx
// text.styles.jsx
import { styled } from 'styled-components';
import { getColor } from 'react-styled-guide';

export const Text = styled.p`
  color: ${getColor(colors => colors.primary.medium)}; // '#01c4e7'
`;
```

### Theme

Set theme to 'dark':

```tsx
// my-component.jsx
const MyComponent = () => {
  const { setDarkTheme } = useTheme();

  return <Button onClick={setDarkTheme}>SET DARK THEME</Button>;
};
```

### Application

You can also check an entire application in `example/` folder:

```bash
$ cd example
$ npm i # or yarn to install dependencies
$ npm start # or yarn start
```
now open live server at [http://localhost:1234](http://localhost:1234).

> That page is deployed in [luizclr.github.io/react-styled-guide](https://luizclr.github.io/react-styled-guide/).

## API

### Schemes/Types

#### StyledGuideProps

| key        | type                      | required | default |
| ---------- | ------------------------- | :------: | :-----: |
| theme      | [ThemeType](#themetype)   |  false   |    -    |
| styleGuide | [StyleGuide](#styleguide) |   true   |    -    |

#### ThemeType

| key    | value     |
| ------ | --------- |
| dark   | `'DARK'`  |
| light  | `'LIGHT'` |

#### StyleGuide

| key         | type                        | required | default |
| ----------- | --------------------------- | :------: | :-----: |
| colors      | [Colors](#colors)           |   true   |    -    |
| fontSizes   | [FontSizes](#fontsizes)     |   true   |    -    |
| fontWeights | [FontWeights](#fontweights) |   true   |    -    |
| sizes       | [Sizes](#sizes)             |   true   |    -    |

#### Colors

| key       | type                        | required | default |
| --------- | --------------------------- | :------: | :-----: |
| primary   | [ColorTokens](#colortokens) |   true   |    -    |
| secondary | [ColorTokens](#colortokens) |   true   |    -    |
| neutral   | [ColorTokens](#colortokens) |   true   |    -    |
| success   | [ColorTokens](#colortokens) |   true   |    -    |
| warning   | [ColorTokens](#colortokens) |   true   |    -    |
| error     | [ColorTokens](#colortokens) |   true   |    -    |

#### ColorTokens

| key       |   type   | required | default |
| --------- | :------: | :------: | :-----: |
| darkest   | `string` |   true   |    -    |
| darker    | `string` |   true   |    -    |
| dark      | `string` |   true   |    -    |
| tinyDark  | `string` |   true   |    -    |
| medium    | `string` |   true   |    -    |
| tinyLight | `string` |   true   |    -    |
| light     | `string` |   true   |    -    |
| lighter   | `string` |   true   |    -    |
| lightest  | `string` |   true   |    -    |

#### FontSizes

| key  |   type   | required | default |
| ---- | :------: | :------: | :-----: |
| xxxl | `string` |   true   |    -    |
| xxl  | `string` |   true   |    -    |
| xl   | `string` |   true   |    -    |
| l    | `string` |   true   |    -    |
| m    | `string` |   true   |    -    |
| s    | `string` |   true   |    -    |
| xs   | `string` |   true   |    -    |
| xxs  | `string` |   true   |    -    |
| xxxs | `string` |   true   |    -    |

#### FontWeights

| key     |   type   | required | default |
| ------- | :------: | :------: | :-----: |
| bold    | `string` |   true   |    -    |
| medium  | `string` |   true   |    -    |
| regular | `string` |   true   |    -    |
| light   | `string` |   true   |    -    |

#### Sizes

| key   |   type   | required | default |
| ----- | :------: | :------: | :-----: |
| giant | `string` |   true   |    -    |
| huge  | `string` |   true   |    -    |
| xxxl  | `string` |   true   |    -    |
| xxl   | `string` |   true   |    -    |
| xl    | `string` |   true   |    -    |
| l     | `string` |   true   |    -    |
| m     | `string` |   true   |    -    |
| s     | `string` |   true   |    -    |
| xs    | `string` |   true   |    -    |
| xxs   | `string` |   true   |    -    |
| xxxs  | `string` |   true   |    -    |
| nano  | `string` |   true   |    -    |
| quark | `string` |   true   |    -    |

#### UseThemeType

| key           | type                    |                    description                    |
| ------------- | ----------------------- | :-----------------------------------------------: |
| theme         | [ThemeType](#themetype) |                         -                         |
| setDarkTheme  | `function`              | dispatch action to change theme state to `dark`.  |
| setLightTheme | `function`              | dispatch action to change theme state to `light`. |

### Style helpers

#### getStyleGuide()

- **Description**: Used to access [StyleGuide](#styleguide) object to get one of its children's value.
- **Arguments**:
  - `function(StyleGuide) => string | number`
- **Returns**: `string` | `number`
- **Example**:

```jsx
import { styled } from 'styled-components';
import { getStyleGuide } from 'react-styled-guide';

export const Text = styled.p`
  color: ${getStyleGuide(
    styleGuide => styleGuide.colors.primary.medium // e.g.: '#01c4e7'
  )};
`;
```

#### getColor()

- **Description**: Used to access [Colors](#colors) object to get one of its value.
- **Arguments**:
  - `function(Colors) => string`
- **Returns**: `string`
- **Example**:

```jsx
import { styled } from 'styled-components';
import { getColor } from 'react-styled-guide';

export const Text = styled.p`
  color: ${getColor(colors => colors.primary.medium)}; // e.g.: '#01c4e7'
`;
```

#### getColorByTheme()

- **Description**: Used to access [Colors](#colors) object to get one of its value according to `Theme` state.
  - The **first** callback function argument will be called if `theme` is `DARK`.
  - The **second** callback function argument will be called if `theme` is `LIGHT`.
- **Arguments**:
  - `function(Colors) => string`
  - `function(Colors) => string`
- **Returns**: `string`
- **Example**:

```jsx
import { styled } from 'styled-components';
import { getColorByTheme } from 'react-styled-guide';

export const Text = styled.p`
  color: ${getColorByTheme(
    colors => colors.primary.darker, // e.g.: '#3F3F3F'
    colors => colors.primary.lighter // e.g.: '#DADADA'
  )};
`;
```

#### getFontSize()

- **Description**: Used to access [FontSizes](#fontsizes) object to get one of its value.
- **Arguments**:
  - `function(FontSizes) => string`
- **Returns**: `string`
- **Example**:

```jsx
import { styled } from 'styled-components';
import { getFontSize } from 'react-styled-guide';

export const Text = styled.p`
  front-size: ${getFontSize(fontSizes => fontSizes.xs)}; // e.g.: '14px'
`;
```

#### getFontWeight()

- **Description**: Used to access [FontWeights](#fontweights) object to get one of its value.
- **Arguments**:
  - `function(FontWeights) => number`
- **Returns**: `number`
- **Example**:

```jsx
import { styled } from 'styled-components';
import { getFontWeight } from 'react-styled-guide';

export const Text = styled.p`
  front-weight: ${getFontWeight(fontWeights => fontWeights.bold)}; // e.g.: 600
`;
```

#### getSize()

- **Description**: Used to access [Sizes](#sizes) object to get one of its value.
- **Arguments**:
  - `function(Sizes) => number`
- **Returns**: `number`
- **Example**:

```jsx
import { styled } from 'styled-components';
import { getSize } from 'react-styled-guide';

export const Card = styled.div`
  height: ${getSize(sizes => sizes.giant)}; // e.g.: '200px'
  padding: ${getSize(sizes => sizes.xxxs)}; // e.g.: '16px'
`;
```

### Theme hook

#### useTheme()

- **Description**: Used to get [UseThemeType](#usethemetype) object to access and manipulate theme state.
- **Arguments**: -
- **Returns**: [UseThemeType](#usethemetype)
- **Example**:

```jsx
import { ThemeTypes, useTheme } from 'react-styled-guide';

export const App = () => {
  const { theme, setDarkTheme, setLightTheme } = useTheme();

  const changeTheme = () => {
    if (theme === ThemeTypes.light) setDarkTheme();
    else setLightTheme();
  };

  return (
    <div>
      <p>
        Current Theme: <span>{theme}</span>
      </p>
      <button onClick={changeTheme}>CHANGE THEME</button>
    </div>
  );
};
```

## Contributing

This package welcomes all constructive contributions. Feel free to add contributions from the following items (but not only) :

- bug fixes and enhancements
- new features
- additions and fixes to documentation
- additional tests
- triaging incoming pull requests and issues

### Cloning repository

```bash
$ git clone https://github.com/luizclr/react-styled-guide.git
$ cd react-styled-guide
```

### Installing dependencies

```bash
$ yarn install
```

### Developing

Start development server on watch mode:

```bash
$ yarn start
```

### Testing

Run test suite:

```bash
$ yarn test
```

### Building

Run build script:

```bash
$ yarn build
```

> Check `dist/` folder to see parsing resulte.

### Linting

Run lint script:

```bash
$ yarn lint
```

### Example Application

Enter in `example/` foder and start development server on watch mode:

```bash
$ cd example
$ yarn install
$ yarn start
```

Open a browser and access [localhost:1234](http://localhost:1234).

## LICENSE

[MIT](https://github.com/luizclr/react-styled-guide/blob/main/LICENSE)
