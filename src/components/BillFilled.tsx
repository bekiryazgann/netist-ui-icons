import * as React from "react";
import type { SVGProps } from "react";
const SvgBillFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 3.5a2 2 0 0 0-2 2v3.75c0 .414.336.75.75.75h2v5.769a.85.85 0 0 0 1.433.618l1.442-1.357 1.611 1.516a.75.75 0 0 0 1.028 0l1.611-1.516 1.442 1.357a.85.85 0 0 0 1.433-.618V5.5a2 2 0 0 0-2-2H5.756l.005.017A2 2 0 0 0 5.5 3.5m-.5 2a.5.5 0 0 1 1 0v3H5zm4 1.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9 7.25m.75 2.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgBillFilled;
