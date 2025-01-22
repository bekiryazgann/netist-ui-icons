import * as React from "react";
import type { SVGProps } from "react";
const SvgChannels = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 3.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.25V9h-.25a2.75 2.75 0 0 0-2.75 2.75v2a2.75 2.75 0 0 0 2.75 2.75h2A2.75 2.75 0 0 0 11 13.75v-.25h1.5v.25a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1V12H11v-.25c0-.487-.127-.944-.348-1.34l2.909-2.91H15.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.94L9.59 9.348A2.74 2.74 0 0 0 8.25 9H8V7.5h.25a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm.5 1.5v1h1V5zm-.5 5.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zM14 6V5h1v1zm0 6.25v1h1v-1z"
    />
  </svg>
);
export default SvgChannels;
