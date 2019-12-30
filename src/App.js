import React, { Fragment } from "react";
import "./App.scss";
import { BreakpointState } from "./Breakpoint/BreakpointState";
import Layout from "./components/Layout";
import Lipsum from "./components/Lipsum";
import PromoGrid from "./components/PromoGrid";

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
        <PromoGrid></PromoGrid>
      </BreakpointState>
    </Fragment>
  );
}

export default App;
