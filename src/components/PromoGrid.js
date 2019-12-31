import React, { Fragment, useState } from "react";
import { useBreakpoint } from "../Breakpoint/BreakpointState";
import "./PromoGrid.scss";

const PromoGrid = () => {
  const breakpoints = useBreakpoint();
  const initialState = [
    {
      position: 1,
      url: "images/ld-nobadchoice.jpg",
      orientation: "ld"
    },
    {
      position: 2,
      url: "images/2-greenstreet.jpg",
      orientation: "ld",
      desc: ""
    },
    {
      position: 3,
      url: "images/ld-panoramic.jpg",
      orientation: "ld",
      desc: ""
    },
    {
      position: 4,
      url: "images/pt-whitetemple.jpg",
      orientation: "pt",
      desc: ""
    },
    {
      position: 5,
      url: "images/pt-lakebridge.jpg",
      orientation: "pt",
      desc: ""
    },
    {
      position: 6,
      url: "images/ld-roundabout.jpg",
      orientation: "ld",
      desc: ""
    },
    {
      position: 7,
      url: "images/1-boat.jpg",
      orientation: "ld",
      desc: ""
    },
    {
      position: 8,
      url: "images/pt-lifebalance.jpg",
      orientation: "pt",
      desc: ""
    },
    {
      position: 9,
      url: "images/ld-endofroad.jpg",
      orientation: "ld",
      desc: ""
    },
    {
      position: 10,
      url: "images/ld-spiralout.jpg",
      orientation: "ld",
      desc: ""
    },
    {
      position: 11,
      url: "images/ld-camelride.jpg",
      orientation: "ld",
      desc: ""
    }
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
