import * as React from "react";
import type { SVGProps } from "react";
const SvgGridDotsLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 3h.01m-.01 9h.01m-.01 9h.01M16.5 3h.01m-.01 9h.01m-.01 9h.01M12 3h.01M12 12h.01M12 21h.01M12 16.5h.01m-.01-9h.01M21 3h.01M21 12h.01M21 21h.01M21 16.5h.01m-.01-9h.01M3 21V3"
    />
  </svg>
);
export default SvgGridDotsLeft;
