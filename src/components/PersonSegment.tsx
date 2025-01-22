import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonSegment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 4.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 8.25 4.5m-3.5 2a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5 6c-1.734 0-3.33.94-4.173 2.455l-.302.545h6.435a.75.75 0 0 1 0 1.5H3.499a1.338 1.338 0 0 1-1.17-1.987l.437-.786A6.27 6.27 0 0 1 8.25 11v.75V11h.053l.125.005c.103.004.248.013.414.03.321.034.775.106 1.184.268a.75.75 0 1 1-.553 1.394 3.2 3.2 0 0 0-.788-.17 6 6 0 0 0-.321-.024l-.09-.003zm3.25-.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m.752 2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M13 16.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
export default SvgPersonSegment;
