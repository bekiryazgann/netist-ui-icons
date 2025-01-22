import * as React from "react";
import type { SVGProps } from "react";
const SvgGridDotsRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 3h.01m-.01 9h.01m-.01 9h.01M16.5 3h.01m-.01 9h.01m-.01 9h.01M12 3h.01M12 12h.01M12 21h.01M12 16.5h.01m-.01-9h.01M3 3h.01M3 12h.01M3 21h.01M3 16.5h.01M3 7.5h.01M21 21V3"
    />
  </svg>
);
export default SvgGridDotsRight;
