import * as React from "react";
import type { SVGProps } from "react";
const SvgOrganization = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm2 .75A.75.75 0 0 1 9.5 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M9.5 6.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM6 7.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 7.25" />
    <path
      fillRule="evenodd"
      d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h6.25c.966 0 1.75.784 1.75 1.75V7h1.5c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75zM7.75 15H9v-1.25a.25.25 0 0 0-.25-.25H8a.25.25 0 0 0-.25.25zm2.75 0v-1.25A1.75 1.75 0 0 0 8.75 12H8a1.75 1.75 0 0 0-1.75 1.75V15h-1a.25.25 0 0 1-.25-.25v-9.5A.25.25 0 0 1 5.25 5h6.25a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25zm2.75-.25V8.5h1.5a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25h-1.518a2 2 0 0 0 .018-.25"
    />
  </svg>
);
export default SvgOrganization;
