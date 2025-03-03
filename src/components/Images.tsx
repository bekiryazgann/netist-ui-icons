import * as React from "react";
import type { SVGProps } from "react";
const SvgImages = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14.25 9.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fillRule="evenodd"
      d="M6.25 3.5A2.75 2.75 0 0 0 3.5 6.25v5a2.75 2.75 0 0 0 2.51 2.74 2.75 2.75 0 0 0 2.74 2.51h5a2.75 2.75 0 0 0 2.75-2.75v-5a2.75 2.75 0 0 0-2.51-2.74 2.75 2.75 0 0 0-2.74-2.51zM12.475 6H8.75A2.75 2.75 0 0 0 6 8.75v3.725c-.57-.116-1-.62-1-1.225v-5C5 5.56 5.56 5 6.25 5h5c.605 0 1.11.43 1.225 1m1.275 1.5c.69 0 1.25.56 1.25 1.25v1.94l-1.75 1.75-2.695-2.696a1.75 1.75 0 0 0-2.582.117l-.473.567V8.75c0-.69.56-1.25 1.25-1.25zM7.5 12.771l1.625-1.95a.25.25 0 0 1 .369-.016l3.226 3.225a.75.75 0 0 0 1.06 0L15 12.81v.94c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25z"
    />
  </svg>
);
export default SvgImages;
