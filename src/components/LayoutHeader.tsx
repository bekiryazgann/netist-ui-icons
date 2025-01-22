import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutHeader = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-9.5A1.75 1.75 0 0 1 3.5 6.75zM5.25 5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"
    />
    <path d="M3.5 11.25c0-.966.784-1.75 1.75-1.75h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0zm0 3.5c0 .966.784 1.75 1.75 1.75h.5a.75.75 0 0 0 0-1.5h-.5a.25.25 0 0 1-.25-.25v-.5a.75.75 0 0 0-1.5 0zM14.75 9.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5zm0 7a1.75 1.75 0 0 0 1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5zm-3-6.25A.75.75 0 0 1 11 11H9a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75M11 16.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z" />
  </svg>
);
export default SvgLayoutHeader;
