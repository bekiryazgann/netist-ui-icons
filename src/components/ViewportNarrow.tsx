import * as React from "react";
import type { SVGProps } from "react";
const SvgViewportNarrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.75 5c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v1.76a.75.75 0 0 1-1.5 0V5a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25v1.76a.75.75 0 0 1-1.5 0zM8.5 12.49a.75.75 0 0 1 .75.75V15c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1.76a.75.75 0 0 1 1.5 0V15a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 7.75 15v-1.76a.75.75 0 0 1 .75-.75M4 10c0 .414.336.75.75.75h2.44l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H4.75A.75.75 0 0 0 4 10M15.25 10.75a.75.75 0 0 0 0-1.5h-2.44l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72z" />
  </svg>
);
export default SvgViewportNarrow;
