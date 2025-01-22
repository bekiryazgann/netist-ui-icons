import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M10.25 6a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5zM9.5 9.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75" />
    <path
      fillRule="evenodd"
      d="M5.75 3A1.75 1.75 0 0 0 4 4.75v10A2.25 2.25 0 0 0 6.25 17h9a.75.75 0 0 0 0-1.5H15v-1.668c.591-.281 1-.884 1-1.582v-7.5A1.75 1.75 0 0 0 14.25 3zM7 4.5H5.75a.25.25 0 0 0-.25.25v7.878q.354-.126.75-.128H7zm1.5 8v-8h5.75a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25zm-2.25 3a.75.75 0 0 1 0-1.5h7.25v1.5z"
    />
  </svg>
);
export default SvgBook;
