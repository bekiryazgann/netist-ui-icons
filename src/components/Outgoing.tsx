import * as React from "react";
import type { SVGProps } from "react";
const SvgOutgoing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13.22 4.03a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H13A2.25 2.25 0 0 0 10.75 9v3.75a.75.75 0 0 1-1.5 0V9A3.75 3.75 0 0 1 13 5.25h1.44z" />
    <path d="M15.75 13.25a.75.75 0 0 1 .75.75v.51a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V14A.75.75 0 0 1 5 14v.51c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V14a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgOutgoing;
