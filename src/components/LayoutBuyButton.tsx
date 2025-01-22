import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutBuyButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M3.5 6.25A2.75 2.75 0 0 1 6.25 3.5a.75.75 0 0 1 0 1.5C5.56 5 5 5.56 5 6.25a.75.75 0 0 1-1.5 0M6.25 16.5a2.75 2.75 0 0 1-2.75-2.75.75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5M16.5 6.25a2.75 2.75 0 0 0-2.75-2.75.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0M16.5 13.75a2.75 2.75 0 0 1-2.75 2.75.75.75 0 0 1 0-1.5c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 1.5 0M11 5a.75.75 0 0 0 0-1.5H9A.75.75 0 0 0 9 5zM11.75 15.75a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 15h2a.75.75 0 0 1 .75.75" />
    <path
      fillRule="evenodd"
      d="M6 7.5a2.5 2.5 0 0 0 0 5h8a2.5 2.5 0 0 0 0-5zM5 10a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1"
    />
  </svg>
);
export default SvgLayoutBuyButton;
