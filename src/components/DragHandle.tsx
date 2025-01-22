import * as React from "react";
import type { SVGProps } from "react";
const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7.5 4.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1H8a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zm0 4.25a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1H8a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zM6.5 14a1 1 0 0 1 1-1H8a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zM12 4.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zm-1 5.25a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1zM12 13a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1z" />
  </svg>
);
export default SvgDragHandle;
