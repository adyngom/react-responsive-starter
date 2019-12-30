import React, { Fragment, useContext } from "react";
import { useBreakpoint } from "../Breakpoint/BreakpointState";
import "./PromoGrid.scss";

//images
import One from "./images/ld-nobadchoice.jpg";
import Two from "./images/2-greenstreet.jpg";
import Three from "./images/ld-panoramic.jpg";
import Four from "./images/pt-whitetemple.jpg";
import Five from "./images/pt-lakebridge.jpg";
import Six from "./images/ld-roundabout.jpg";
import Seven from "./images/1-boat.jpg";
import Eight from "./images/pt-lifebalance.jpg";
import Nine from "./images/ld-endofroad.jpg";
import Ten from "./images/ld-spiralout.jpg";
import Eleven from "./images/ld-camelride.jpg";

const PromoGrid = () => {
  const breakpoints = useBreakpoint();
  return (
    <Fragment>
      <div className={`promo-grid ${breakpoints}`}>
        <figure
          className="fig-1"
          style={{
            background: `url(${One}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-2"
          style={{
            background: `url(${Two}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-3"
          style={{
            background: `url(${Three}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-4"
          style={{
            background: `url(${Four}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-5"
          style={{
            background: `url(${Five}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-6"
          style={{
            background: `url(${Six}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-7"
          style={{
            background: `url(${Seven}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-8"
          style={{
            background: `url(${Eight}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-9"
          style={{
            background: `url(${Nine}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-10"
          style={{
            background: `url(${Ten}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
        <figure
          className="fig-11"
          style={{
            background: `url(${Eleven}) center center`,
            backgroundSize: "cover"
          }}
        ></figure>
      </div>
    </Fragment>
  );
};

export default PromoGrid;
