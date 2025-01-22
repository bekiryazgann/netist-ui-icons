import * as React from "react";
import type { SVGProps } from "react";
const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.5 4.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1H8a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zM7.5 8.75a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1H8a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zM6.5 14a1 1 0 0 1 1-1H8a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1zM12 4.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zM11 9.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1zM12 13a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1z" />
  </svg>
);
export default SvgDragHandle;
