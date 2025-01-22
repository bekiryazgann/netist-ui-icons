import * as React from "react";
import type { SVGProps } from "react";
const SvgChartFunnel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.758 6.681A2.75 2.75 0 0 1 6.346 3h7.308a2.75 2.75 0 0 1 2.588 3.681l-3.06 8.5A2.75 2.75 0 0 1 10.594 17H9.406a2.75 2.75 0 0 1-2.588-1.819zM6.346 4.5A1.25 1.25 0 0 0 5.17 6.173L5.467 7h9.066l.298-.827A1.25 1.25 0 0 0 13.654 4.5zm.651 6.75-.99-2.75h7.986l-.99 2.75zm.54 1.5.693 1.923a1.25 1.25 0 0 0 1.176.827h1.188c.527 0 .998-.33 1.177-.827l.692-1.923z"
    />
  </svg>
);
export default SvgChartFunnel;
