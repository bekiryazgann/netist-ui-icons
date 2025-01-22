import * as React from "react";
import type { SVGProps } from "react";
const SvgViewportShort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M10 4a.75.75 0 0 0-.75.75v2.44l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V4.75A.75.75 0 0 0 10 4M4.75 12.25A1.75 1.75 0 0 1 3 10.5v-1c0-.966.784-1.75 1.75-1.75h1.875a.75.75 0 0 1 0 1.5H4.75a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1.875a.75.75 0 0 1 0 1.5zM12.625 11.5a.75.75 0 0 1 .75-.75h1.875a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-1.875a.75.75 0 0 1 0-1.5h1.875c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1.875a.75.75 0 0 1-.75-.75M9.25 15.25a.75.75 0 0 0 1.5 0v-2.44l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72z" />
  </svg>
);
export default SvgViewportShort;
