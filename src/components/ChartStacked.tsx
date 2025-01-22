import * as React from "react";
import type { SVGProps } from "react";
const SvgChartStacked = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 5.75A2.75 2.75 0 0 0 3 8.5v3a2.75 2.75 0 0 0 2.75 2.75h8.5A2.75 2.75 0 0 0 17 11.5v-3a2.75 2.75 0 0 0-2.75-2.75zM4.5 8.5c0-.69.56-1.25 1.25-1.25H10v5.5H5.75c-.69 0-1.25-.56-1.25-1.25zm8.5 4.25h1.25c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25H13z"
    />
  </svg>
);
export default SvgChartStacked;
