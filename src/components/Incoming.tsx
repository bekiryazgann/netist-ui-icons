import * as React from "react";
import type { SVGProps } from "react";
const SvgIncoming = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M3.5 10.25a.75.75 0 0 1 1.5 0v3.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-7.5C15 5.56 14.44 5 13.75 5h-3.5a.75.75 0 0 1 0-1.5h3.5a2.75 2.75 0 0 1 2.75 2.75v7.5a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75z" />
    <path d="M6.75 11.5a.75.75 0 0 1 0-1.5h2.19L3.97 5.03a.75.75 0 0 1 1.06-1.06L10 8.94V6.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75z" />
  </svg>
);
export default SvgIncoming;
