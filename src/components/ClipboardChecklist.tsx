import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardChecklist = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8.75 10.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M6.515 4.75A2 2 0 0 1 8.5 3h3a2 2 0 0 1 1.985 1.75h.265A2.25 2.25 0 0 1 16 7v7.75A2.25 2.25 0 0 1 13.75 17h-7.5A2.25 2.25 0 0 1 4 14.75V7a2.25 2.25 0 0 1 2.25-2.25zM8.5 4.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 8 6V5a.5.5 0 0 1 .5-.5M6.25 6.25h.265A2 2 0 0 0 8.5 8h3a2 2 0 0 0 1.985-1.75h.265a.75.75 0 0 1 .75.75v7.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75"
    />
  </svg>
);
export default SvgClipboardChecklist;
