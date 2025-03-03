import * as React from "react";
import type { SVGProps } from "react";
const SvgGauge = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4.5 11.5a5.5 5.5 0 0 1 7.434-5.15l.456-.981a1.5 1.5 0 0 1 .234-.36 7 7 0 0 0-8.766 9.852.75.75 0 0 0 1.315-.722A5.5 5.5 0 0 1 4.5 11.5m10.584-4.811-.695 1.496A5.48 5.48 0 0 1 15.5 11.5c0 .958-.244 1.857-.673 2.64a.75.75 0 1 0 1.315.72A7 7 0 0 0 17 11.5a6.98 6.98 0 0 0-1.916-4.811" />
    <path
      fillRule="evenodd"
      d="M10 16a2 2 0 0 0 1.485-3.34l2.945-6.344a.75.75 0 1 0-1.36-.632l-2.935 6.32A2 2 0 1 0 10 15.999Zm0-1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    />
  </svg>
);
export default SvgGauge;
