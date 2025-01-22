import * as React from "react";
import type { SVGProps } from "react";
const SvgBill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.5 3.5a2 2 0 0 0-2 2v3.75c0 .414.336.75.75.75h2v5.769a.85.85 0 0 0 1.433.618l1.442-1.357 1.611 1.516a.75.75 0 0 0 1.028 0l1.611-1.516 1.442 1.357a.85.85 0 0 0 1.433-.618V5.5a2 2 0 0 0-2-2H5.756l.005.017A2 2 0 0 0 5.5 3.5m-.5 2a.5.5 0 0 1 1 0v3H5zm2.75-.48L7.744 5h6.506a.5.5 0 0 1 .5.5v8.764l-.69-.649a1 1 0 0 0-1.37 0l-1.44 1.355-1.44-1.355a1 1 0 0 0-1.37 0l-.69.65zm2 1.48a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM9 10.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
export default SvgBill;
