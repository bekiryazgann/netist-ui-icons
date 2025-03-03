import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      fillRule="evenodd"
      d="M8.827 16H5.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.077l.07-.061a17.4 17.4 0 0 0 1.707-1.758c1.224-1.46 2.55-3.574 2.55-5.954 0-3.167-2.328-5.477-5.5-5.477S4.5 5.06 4.5 8.227c0 2.38 1.326 4.495 2.55 5.954A17.4 17.4 0 0 0 8.827 16M10 4.25c-2.35 0-4 1.646-4 3.977 0 1.846 1.049 3.618 2.2 4.99a16 16 0 0 0 1.8 1.816 16 16 0 0 0 1.8-1.817c1.151-1.371 2.2-3.143 2.2-4.99 0-2.33-1.65-3.976-4-3.976"
    />
  </svg>
);
export default SvgLocation;
