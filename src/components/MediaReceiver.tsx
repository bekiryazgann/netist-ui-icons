import * as React from "react";
import type { SVGProps } from "react";
const SvgMediaReceiver = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.25 4a.75.75 0 0 1 .75-.75A5.75 5.75 0 0 1 15.75 9a.75.75 0 0 1-1.5 0A4.25 4.25 0 0 0 10 4.75.75.75 0 0 1 9.25 4m-2.5 8.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M10 8.25a.75.75 0 0 1 .75.75v1.499h4c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.966.784-1.75 1.75-1.75h4V9a.75.75 0 0 1 .75-.75m-4.75 3.749a.25.25 0 0 0-.25.25v2.5c0 .139.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25z"
    />
    <path d="M10 5.75a.75.75 0 0 0 0 1.5A1.75 1.75 0 0 1 11.75 9a.75.75 0 0 0 1.5 0A3.25 3.25 0 0 0 10 5.75" />
  </svg>
);
export default SvgMediaReceiver;
