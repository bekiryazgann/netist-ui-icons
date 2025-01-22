import * as React from "react";
import type { SVGProps } from "react";
const SvgExit = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.75 3A2.25 2.25 0 0 0 7.5 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75h3.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-3.5a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0A2.25 2.25 0 0 0 9.75 17h3.5A2.75 2.75 0 0 0 16 14.25v-8.5A2.75 2.75 0 0 0 13.25 3z" />
    <path d="M12.25 10.75a.75.75 0 0 0 0-1.5H6.56l.97-.97a.749.749 0 1 0-1.06-1.06L4.22 9.47a.747.747 0 0 0 0 1.06l2.25 2.25a.749.749 0 1 0 1.06-1.06l-.97-.97z" />
  </svg>
);
export default SvgExit;
