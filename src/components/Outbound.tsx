import * as React from "react";
import type { SVGProps } from "react";
const SvgOutbound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M16.5 15.75a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1 0-1.5h11.5a.75.75 0 0 1 .75.75M10 13.75a.75.75 0 0 1-.75-.75V6.06L7.53 7.78a.749.749 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.749.749 0 1 1-1.06 1.06l-1.72-1.72V13a.75.75 0 0 1-.75.75" />
  </svg>
);
export default SvgOutbound;
