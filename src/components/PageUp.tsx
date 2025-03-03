import * as React from "react";
import type { SVGProps } from "react";
const SvgPageUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 5.75c0-.69.56-1.25 1.25-1.25H9.5v3.25c0 .966.784 1.75 1.75 1.75h3.25v.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.22-.53l-5-5a.75.75 0 0 0-.53-.22h-3.5A2.75 2.75 0 0 0 4 5.75v8.5A2.75 2.75 0 0 0 6.75 17h3.75a.75.75 0 0 0 0-1.5H6.75c-.69 0-1.25-.56-1.25-1.25zM13.44 8 11 5.56v2.19c0 .138.112.25.25.25z"
    />
    <path d="M15 14.31v2.94a.75.75 0 0 1-1.5 0v-2.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06z" />
  </svg>
);
export default SvgPageUp;
