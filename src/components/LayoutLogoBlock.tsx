import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutLogoBlock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.5 6.25A2.75 2.75 0 0 1 6.25 3.5a.75.75 0 0 1 0 1.5C5.56 5 5 5.56 5 6.25a.75.75 0 0 1-1.5 0M6.25 16.5a2.75 2.75 0 0 1-2.75-2.75.75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5M16.5 6.25a2.75 2.75 0 0 0-2.75-2.75.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0m0 7.5a2.75 2.75 0 0 1-2.75 2.75.75.75 0 0 1 0-1.5c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 1.5 0M5 9a.75.75 0 0 0-1.5 0v2A.75.75 0 0 0 5 11zm10.75-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M11 5a.75.75 0 0 0 0-1.5H9A.75.75 0 0 0 9 5zm.75 10.75a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 15h2a.75.75 0 0 1 .75.75" />
    <path
      fillRule="evenodd"
      d="M6 9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3-1.5h2A1.5 1.5 0 0 1 12.5 9v2a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 11V9A1.5 1.5 0 0 1 9 7.5"
    />
  </svg>
);
export default SvgLayoutLogoBlock;
