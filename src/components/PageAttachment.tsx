import * as React from "react";
import type { SVGProps } from "react";
const SvgPageAttachment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.75 4c-.69 0-1.25.56-1.25 1.25v9.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-9a.75.75 0 0 1 1.5 0v9a2.75 2.75 0 0 1-2.75 2.75h-6.5A2.75 2.75 0 0 1 4 14.75v-9.5A2.75 2.75 0 0 1 6.75 2.5h3a2.75 2.75 0 0 1 2.75 2.75v6.25a2.5 2.5 0 0 1-5 0V6A.75.75 0 0 1 9 6v5.5a1 1 0 1 0 2 0V5.25C11 4.56 10.44 4 9.75 4z"
    />
  </svg>
);
export default SvgPageAttachment;
