import * as React from "react";
import type { SVGProps } from "react";
const SvgPriceList = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4.25 3A1.75 1.75 0 0 0 2.5 4.75v10.5c0 .966.784 1.75 1.75 1.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.25.25 0 0 1-.25-.25V4.75a.25.25 0 0 1 .25-.25h8a.25.25 0 0 1 .25.25V7.5a.75.75 0 0 0 1.5 0V4.75A1.75 1.75 0 0 0 12.25 3z" />
    <path d="M5.5 6.75A.75.75 0 0 1 6.25 6h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8.5 3.5a.75.75 0 0 0-1.5 0v.25a2 2 0 1 0 0 4h1a.5.5 0 0 1 0 1h-2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 1.5 0 2 2 0 1 0 0-4h-1a.5.5 0 0 1 0-1h2.25a.75.75 0 0 0 0-1.5H14zM6.25 9a.75.75 0 0 0 0 1.5H9A.75.75 0 0 0 9 9zm-.75 3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75" />
  </svg>
);
export default SvgPriceList;
