import * as React from "react";
import type { SVGProps } from "react";
const SvgShippingLabel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7.5 5.75a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm-1 4.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m2 3.5v-1A.75.75 0 0 0 7 13v1a.75.75 0 0 0 1.5 0m2.25-1v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0M13 14v-1a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0" />
    <path
      fillRule="evenodd"
      d="M4 4.25a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1.5 11.5v-11h9v11z"
    />
  </svg>
);
export default SvgShippingLabel;
