import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fillRule="evenodd"
      d="M8 4.5a5.5 5.5 0 1 0 0 11h4a5.5 5.5 0 1 0 0-11zM4 10a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4"
    />
  </svg>
);
export default SvgToggleOn;
