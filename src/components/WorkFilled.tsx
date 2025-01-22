import * as React from "react";
import type { SVGProps } from "react";
const SvgWorkFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 5.5v-.25A2.25 2.25 0 0 1 8.75 3h2.5a2.25 2.25 0 0 1 2.25 2.25v.25h.25A3.25 3.25 0 0 1 17 8.75v5A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-5A3.25 3.25 0 0 1 6.25 5.5zM8 5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v.25H8zM5.16 9.542a.625.625 0 0 1 .798-.381l.256.09c2.45.865 5.122.865 7.572 0l.256-.09a.625.625 0 1 1 .416 1.178l-.256.09a12.6 12.6 0 0 1-3.212.682 1 1 0 0 1 .01.139V12a1 1 0 1 1-2 0v-.75q0-.07.01-.14a12.6 12.6 0 0 1-3.212-.68l-.256-.09a.625.625 0 0 1-.381-.798Z"
    />
  </svg>
);
export default SvgWorkFilled;
