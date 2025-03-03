import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutSection = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.5 6.25A2.75 2.75 0 0 1 6.25 3.5a.75.75 0 0 1 0 1.5C5.56 5 5 5.56 5 6.25a.75.75 0 0 1-1.5 0" />
    <path
      fillRule="evenodd"
      d="M3.5 9.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75zM5.25 9a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"
    />
    <path d="M3.5 13.75a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5C5.56 15 5 14.44 5 13.75a.75.75 0 0 0-1.5 0M13.75 3.5a2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0C15 5.56 14.44 5 13.75 5a.75.75 0 0 1 0-1.5m0 13a2.75 2.75 0 0 0 2.75-2.75.75.75 0 0 0-1.5 0c0 .69-.56 1.25-1.25 1.25a.75.75 0 0 0 0 1.5m-2-12.25A.75.75 0 0 1 11 5H9a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75M11 16.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z" />
  </svg>
);
export default SvgLayoutSection;
