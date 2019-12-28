import React from "react";
import { useBreakpoint } from "../Breakpoint/BreakpointState";

const Layout = ({ children }) => {
  const breakpoints = useBreakpoint();
  console.log(breakpoints);
  return <div>{children}</div>;
};

export default Layout;
