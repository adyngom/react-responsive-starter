<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the react-responsive-starter and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** adyngom, react-responsive-starter, adyngom, email
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/adyngom/react-responsive-starter">
    <img src="https://i.imgur.com/qI1Ay0n.png" alt="react responsive starter example">
  </a>

  <h3 align="center">React Responsive Application Starter</h3>

  <p align="center">
    Easily set and capture the breakpoints that will work for your design. 
    <br />
    <a href="https://github.com/adyngom/react-responsive-starter"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://react-responsive-starter.netlify.com">View Demo</a>
    ·
    <a href="https://github.com/adyngom/react-responsive-starter/issues">Bugs</a>
    ·
    <a href="https://github.com/adyngom/react-responsive-starter/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

![React responsive starter grid example](https://i.imgur.com/bs1fsVy.jpg)

Using the **Window.MatchMedia** method, the **`BreakPointState`** module can listen to screen and orientation changes passed in as props via a **`queries`** object. You will then have access to a custom **`useBreakpoint`** hook which is an explicit way of taking advantage of the context API anywhere down the component tree.

### Built With

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- GETTING STARTED -->

## Getting Started

1. Clone the react-responsive-starter

```sh
git clone https://github.com/adyngom/react-responsive-starter.git
```

2. Install NPM packages

```sh
npm install && npm start
```

## Usage

In your **`App.js`** file this would be your basic imports:

```javascript
import React, { Fragment } from "react";
import { BreakpointState } from "./Breakpoint/BreakpointState";
import "./App.scss";
```

then you would specify a `queries` object with the different screen and orientation you may want to match:

```javascript
const queries = {
  "for-phone-only": "(max-width: 559px)",
  "for-tablet-portrait-up": "(min-width: 600px)",
  "for-tablet-landscape-up": "(min-width: 900px)",
  "for-desktop-up": "(min-width: 1200px)",
  "for-big-desktop-up": "(min-width: 1800px)",
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)"
};
```

now you can use the **`BreakpointState`** as a wrapper around your app tree:

```javascript
function App() {
  return (
    <Fragment>
      <BreakpointState queries={queries}>
        {/* Your App Components tree here */}
      </BreakpointState>
    </Fragment>
  );
}
```

## Layout as a wrapper

With this initial setup, you can now have access to your **`queries matches`** inside any component using the context API with the convenient custom hook **`useBreakpoint`**.
Let's look at an example where the **`Layout`** component is used a wrapper that provide global styles to the rest of the application.

```javascript
/** Layout.js **/
import React from "react";
import { useBreakpoint } from "../Breakpoint/BreakpointState";

const Layout = ({ children, showBreakpoints }) => {
  const breakpoints = useBreakpoint();
  return (
    <div className={`wrapper ${breakpoints}`}>
      {!!showBreakpoints ? (
        <div className="meta">
          <small>Breakpoints: {breakpoints}</small>
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  );
};

export default Layout;
```

The two important lines are:

**`const breakpoints = useBreakpoint();`** which gives a space separated set of your queries matches

**`<div className={`wrapper \${breakpoints}`}>`** where you attach those class names to your wrapper div.

Now you can import the `Layout` component and add it to your app:

```javascript
/** App.js **/
import Layout from "./components/Layout";

function App() {
  return (
    <Fragment>
      <BreakpointState queries={queries}>
        <Layout showBreakpoints></Layout>
      </BreakpointState>
    </Fragment>
  );
}
```

you can see this behavior if you run your project and check the console.

![Breakpoints reactive updates](https://i.imgur.com/67CWQl6.gif)

**The **`showBreakpoints`** is simply added for debugging and should not be part of your production code.**

Now that you have access to those dynamic classes, you can either target them directly in your global styles within **`App.scss`** or you could put them within a component specific stylesheet. For this demo, we put them in the **`App.scss`**.

**DUE TO THE NATURE OF CASCADING STYLES, THE ORDER OF THE CLASSES MATTERS SINCE ONE RESOLUTION MIGHT MATCH MULTIPLE CONDITIONS. STACK YOUR CLASSES FROM LOWEST BREAKPOINT TO HIGHEST**

```scss
.wrapper {
  background-color: rgb(56, 17, 17);
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 5vh 5vw;
  box-sizing: border-box;
  position: relative;

  .meta {
    position: absolute;
    top: 1em;
    text-align: center;
    width: 100%;
    font-size: 0.5em;
  }
  &.for-phone-only {
    background-color: #333;
  }
  &.for-tablet-portrait-up {
    background-color: rgb(94, 94, 185);
  }
  &.for-tablet-landscape-up {
    background-color: rgb(243, 40, 74);
  }
  &.for-desktop-up {
    min-height: 100vh;
    overflow: hidden;
    overflow-x: scroll;
    background-color: rgb(11, 161, 236);
    columns: 3 auto;
    header h1 {
      text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
        0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0
          1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px
          rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    }
  }
  &.for-big-desktop-up {
    background-color: rgb(243, 74, 40);
    header h1 {
      text-shadow: -10px 10px 0px #eaeeee, -20px 20px 0px #d2d6d6,
        -30px 30px 0px #787a7a;
    }
  }
}
```

We are having a bit of fun with some of the styles above, but essentially changing the background color of the **`wrapper container`** and using a column layout for big screens.

Let's add the **`Lipsum`** component to the mix to show how the content changes as we switch screen size.

```javascript
function App() {
  return (
    <Fragment>
      <BreakpointState queries={queries}>
        <Layout>
          <Lipsum></Lipsum>
        </Layout>
      </BreakpointState>
    </Fragment>
  );
}
```

<blockquote class="imgur-embed-pub" lang="en" data-id="ekyqJIc"><a href="//imgur.com/ekyqJIc">Cosmos awaits responsive example</a></blockquote>

## Responsive Grid

The second example uses the [PromoGrid](/src/components/PromoGrid.js) component but we have attached a specific SCSS file to it [PromoGrid.scss](/src/components/PromoGrid.scss)

```javascript
/** PromoGrid.js **/
import React, { Fragment, useState } from "react";
import { useBreakpoint } from "../Breakpoint/BreakpointState";
import "./PromoGrid.scss";

const PromoGrid = () => {
  const breakpoints = useBreakpoint();
  const initialState = [
    // images object here
  ];

  const [gridImages, setGridImages] = useState(initialState);
  return (
    <Fragment>
      <div className={`promo-grid ${breakpoints}`}>
        {gridImages.map(Image => (
          <article
            key={Image.position}
            className={`fig-${Image.position}`}
            style={{
              background: `url(${Image.url})`,
              backgroundSize: "cover"
            }}
          ></article>
        ))}
      </div>
    </Fragment>
  );
};

export default PromoGrid;
```

The setup to get the breakpoints is similar to what we have done with `Layout.js` earlier and essentially allow us to get the responsive classes added on this line

**`<div className={`promo-grid \${breakpoints}`}>`**

Now the CSS to make the grid responsive is a little bit more involved, but essentially following a **mobile-first** approach, start with the generic rules as default styles:

```scss
.promo-grid {
  display: grid;
  max-width: 1170px;
  padding: 10px;
  height: auto;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(190px, 1fr);
  gap: 10px;
  // ... rest of rules
}
```

and we define our first layout changes in our tablet display for example:

```scss
.for-tablet-portrait-up {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 238px);
  .fig-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .fig-4 {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
  .fig-5 {
    grid-row: 3 / 5;
  }
  .fig-8 {
    grid-column: 1 / 2;
    grid-row: 5 / 7;
  }
}
```

Now in **`App.js`** after importing the `PromoGrid` we can try:

```javascript
function App() {
  return (
    <Fragment>
      <BreakpointState queries={queries}>
        <PromoGrid></PromoGrid>
      </BreakpointState>
    </Fragment>
  );
}
```

**[Click on this link to see the effect](https://res.cloudinary.com/adyngomcom/image/upload/v1577829678/react-responsive-grid_yilkiz.gif)**

### That's all folks :)

Please add any suggestions or better yet refine it by contributing to the project. Hope you find it useful.

## Roadmap

See the [open issues](https://github.com/adyngom/react-responsive-starter/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@adyngom](https://twitter.com/adyngom) - email

Project Link: [https://github.com/adyngom/react-responsive-starter](https://github.com/adyngom/react-responsive-starter)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- Super thanks to **[@Udit Tyagi](https://twitter.com/tyagiUdit94)** with this **[article](https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97)** that inspired everything
- A must read article by **David Gilbertson** - **[The 100% correct way to do CSS breakpoints](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)** that impacted the default set of breakpoints names in the examples. You can of course name them whatever you see fit but read his article first.
- Thanks to **Design Shack** for this very entertaining piece **[12 Fun CSS Text Shadows You Can Copy and Paste](https://designshack.net/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/)**
- **[Best Readme Template](https://github.com/othneildrew/Best-README-Template)** for a superb documentation starter 
- Last but not least **[Sagan Ipsum](http://saganipsum.com/)** for a different take on sample text.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/adyngom/react-responsive-starter.svg?style=flat-square
[contributors-url]: https://github.com/adyngom/react-responsive-starter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adyngom/react-responsive-starter.svg?style=flat-square
[forks-url]: https://github.com/adyngom/react-responsive-starter/network/members
[stars-shield]: https://img.shields.io/github/stars/adyngom/react-responsive-starter.svg?style=flat-square
[stars-url]: https://github.com/adyngom/react-responsive-starter/stargazers
[issues-shield]: https://img.shields.io/github/issues/adyngom/react-responsive-starter.svg?style=flat-square
[issues-url]: https://github.com/adyngom/react-responsive-starter/issues
[license-shield]: https://img.shields.io/github/license/adyngom/react-responsive-starter.svg?style=flat-square
[license-url]: https://github.com/adyngom/react-responsive-starter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adyngom
[product-screenshot]: images/screenshot.png
