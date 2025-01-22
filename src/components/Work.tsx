import * as React from "react";
import type { SVGProps } from "react";
const SvgWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M10.965 11.238A1 1 0 0 1 11 11.5v.5a1 1 0 1 1-2 0v-.5q0-.136.035-.262a12.8 12.8 0 0 1-3.278-.69l-.257-.09A.75.75 0 1 1 6 9.043l.256.09a11.25 11.25 0 0 0 7.488 0l.256-.09a.75.75 0 1 1 .5 1.414l-.257.09a12.8 12.8 0 0 1-3.278.69Z" />
    <path
      fillRule="evenodd"
      d="M6.5 5.5v-.25A2.25 2.25 0 0 1 8.75 3h2.5a2.25 2.25 0 0 1 2.25 2.25v.25h.25A3.25 3.25 0 0 1 17 8.75v5A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-5A3.25 3.25 0 0 1 6.25 5.5zM8 5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v.25H8zM6.25 7A1.75 1.75 0 0 0 4.5 8.75v5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-5A1.75 1.75 0 0 0 13.75 7z"
    />
  </svg>
);
export default SvgWork;
