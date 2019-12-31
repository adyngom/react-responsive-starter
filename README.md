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
    <a href="https://github.com/adyngom/react-responsive-starter">View Demo</a>
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
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

![React responsive starter grid example](https://i.imgur.com/IKL4Vu0.jpg)

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
npm install
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

With this initial setup, you can now have access to your **`queries matches`** inside any component using the context API with the convenient custom hook **`useBreakpoint`**.
Let's look at an example where the **`Layout`** component is used a wrapper that provide global styles to the rest of the application.

```javascript class:"lineNo"
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

<!-- ROADMAP -->

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

- []()
- []()
- []()

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
