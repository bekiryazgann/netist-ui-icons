import * as React from "react";
import type { SVGProps } from "react";
const SvgViewportTall = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.25 9V6.56l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72V9a.75.75 0 0 1-1.5 0" />
    <path d="M5.75 16A2.75 2.75 0 0 1 3 13.25v-6.5A2.75 2.75 0 0 1 5.75 4h.875a.75.75 0 0 1 0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h.875a.75.75 0 0 1 0 1.5zm6.875-.75a.75.75 0 0 1 .75-.75h.875c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-.875a.75.75 0 0 1 0-1.5h.875A2.75 2.75 0 0 1 17 6.75v6.5A2.75 2.75 0 0 1 14.25 16h-.875a.75.75 0 0 1-.75-.75" />
    <path d="M9.25 13.44V11a.75.75 0 0 1 1.5 0v2.44l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2.001a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06z" />
  </svg>
);
export default SvgViewportTall;
