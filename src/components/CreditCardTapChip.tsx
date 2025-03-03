import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardTapChip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 4.25A3.25 3.25 0 0 0 6.75 7.5a.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 10 4.25M6 15.5v-4.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v4.25zm-1.5-4.25v5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-5A2.25 2.25 0 0 0 13.25 9h-6.5a2.25 2.25 0 0 0-2.25 2.25m3.5 2a1 1 0 1 0 2 0v-.75a1 1 0 1 0-2 0zM9.25 7.5a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 0 0-4.5 0 .75.75 0 0 0 1.5 0"
    />
  </svg>
);
export default SvgCreditCardTapChip;
