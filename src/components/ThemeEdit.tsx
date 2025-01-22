import * as React from "react";
import type { SVGProps } from "react";
const SvgThemeEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 3.5A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75h1a.75.75 0 0 0 0-1.5h-1A2.25 2.25 0 0 1 5 12.75V9.5h5.5v2.75a.75.75 0 0 0 1.5 0V5h.75A2.25 2.25 0 0 1 15 7.25v1a.75.75 0 0 0 1.5 0v-1a3.75 3.75 0 0 0-3.75-3.75zM10.5 5v3H5v-.75A2.25 2.25 0 0 1 7.25 5z"
    />
    <path d="M17.03 12.371a.5.5 0 0 0 0-.707l-1.06-1.06a.5.5 0 0 0-.708 0l-.957.957 1.768 1.767zM15.366 14.035l-1.768-1.767-2.45 2.449a2 2 0 0 0-.585 1.407l-.002.698a.25.25 0 0 0 .25.25l.698-.002a2 2 0 0 0 1.408-.586z" />
  </svg>
);
export default SvgThemeEdit;
