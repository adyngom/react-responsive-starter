import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BreakpointState } from "./Breakpoint/BreakpointState";
import Layout from "./components/Layout";
const queries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1024px)",
  or: "(orientation: portrait)" // we can check orientation also
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
