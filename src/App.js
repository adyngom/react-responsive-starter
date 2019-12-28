import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BreakpointState } from "./Breakpoint/BreakpointState";
import Layout from "./components/Layout";
const queries = {
  "for-phone-only": "(max-width: 559px)",
  "for-tablet-portrait-up": "(min-width: 600px)",
  "for-tablet-landscape-up": "(min-width: 900px)",
  "for-desktop-up": "(min-width: 1200px)",
  "for-big-desktop-up": "(min-width: 1800px)",
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)"
};

function App() {
  return (
    <Fragment>
      <BreakpointState queries={queries}>
        <Layout>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Layout>
      </BreakpointState>
    </Fragment>
  );
}

export default App;
