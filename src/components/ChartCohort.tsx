import * as React from "react";
import type { SVGProps } from "react";
const SvgChartCohort = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 3.25c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-2.75h2.75c.69 0 1.25-.56 1.25-1.25V8.75h2.75c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25zm4.25 8h2.5v-2.5h-2.5zm-4 1.5v2.5h2.5v-2.5zm0-1.5h2.5v-2.5h-2.5zm6.5-4h-2.5v-2.5h2.5zm-6.5 0h2.5v-2.5h-2.5zm10.5 0h-2.5v-2.5h2.5z"
    />
  </svg>
);
export default SvgChartCohort;
