import * as React from "react";
import type { SVGProps } from "react";
const SvgTransfer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M3.75 4a.75.75 0 0 1 .75.75v4.5h6.69L9.47 7.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4.5v4.5a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 3.75 4M16.25 4a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V4.75a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgTransfer;
