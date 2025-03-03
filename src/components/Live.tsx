import * as React from "react";
import type { SVGProps } from "react";
const SvgLive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.273 6.28a5.25 5.25 0 0 0 0 7.425.749.749 0 1 1-1.06 1.06 6.747 6.747 0 0 1 0-9.545.749.749 0 1 1 1.06 1.06M10 9.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M7.75 10a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m6.962 3.705a5.25 5.25 0 0 0 0-7.425.749.749 0 1 1 1.061-1.06 6.75 6.75 0 0 1 0 9.546.749.749 0 1 1-1.06-1.061ZM7.291 8.048a2.75 2.75 0 0 0 0 3.89.749.749 0 1 1-1.061 1.06 4.25 4.25 0 0 1 0-6.01.749.749 0 1 1 1.06 1.06Zm5.403 3.89a2.75 2.75 0 0 0 0-3.89.75.75 0 0 1 1.061-1.06 4.25 4.25 0 0 1 0 6.01.749.749 0 1 1-1.06-1.06Z"
    />
  </svg>
);
export default SvgLive;
