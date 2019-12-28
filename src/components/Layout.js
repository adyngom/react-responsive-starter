import React from "react";
import { useBreakpoint } from "../Breakpoint/BreakpointState";

const Layout = ({ children }) => {
  const breakpoints = useBreakpoint();
  return <div className={`wrapper ${breakpoints}`}>{children}</div>;
};

export default Layout;
