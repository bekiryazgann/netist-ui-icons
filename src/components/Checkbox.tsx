import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13.28 8.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0z" />
    <path
      fillRule="evenodd"
      d="M6.25 3.5A2.75 2.75 0 0 0 3.5 6.25v7.5a2.75 2.75 0 0 0 2.75 2.75h7.5a2.75 2.75 0 0 0 2.75-2.75v-7.5a2.75 2.75 0 0 0-2.75-2.75zM5 6.25C5 5.56 5.56 5 6.25 5h7.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-7.5C5.56 15 5 14.44 5 13.75z"
    />
  </svg>
);
export default SvgCheckbox;
