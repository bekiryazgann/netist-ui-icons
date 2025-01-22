import * as React from "react";
import type { SVGProps } from "react";
const SvgBackspace = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M14.03 7.47a.75.75 0 0 1 0 1.06L12.56 10l1.47 1.47a.75.75 0 1 1-1.06 1.06l-1.47-1.47-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.44 10 8.97 8.53a.75.75 0 0 1 1.06-1.06l1.47 1.47 1.47-1.47a.75.75 0 0 1 1.06 0" />
    <path
      fillRule="evenodd"
      d="M5.553 5.083A2.75 2.75 0 0 1 7.741 4h6.509A2.75 2.75 0 0 1 17 6.75v6.5A2.75 2.75 0 0 1 14.25 16H7.74a2.75 2.75 0 0 1-2.187-1.083l-2.476-3.25a2.75 2.75 0 0 1 0-3.334zm2.188.417c-.39 0-.758.182-.995.492L4.27 9.242a1.25 1.25 0 0 0 0 1.516l2.476 3.25c.237.31.604.492.995.492h6.509c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25z"
    />
  </svg>
);
export default SvgBackspace;
