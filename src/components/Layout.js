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
