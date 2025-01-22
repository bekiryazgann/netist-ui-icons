import * as React from "react";
import type { SVGProps } from "react";
const SvgShippingLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.5 5.75a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM6.5 10.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M8.5 14v-1A.75.75 0 0 0 7 13v1a.75.75 0 0 0 1.5 0M10.75 13v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0M13 14v-1a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0" />
    <path
      fillRule="evenodd"
      d="M4 4.25a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1.5 11.5v-11h9v11z"
    />
  </svg>
);
export default SvgShippingLabel;
