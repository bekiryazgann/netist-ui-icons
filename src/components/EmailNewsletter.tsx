import * as React from "react";
import type { SVGProps } from "react";
const SvgEmailNewsletter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M8.5 6.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M8 3.5a2.75 2.75 0 0 0-2.75 2.75v.5H3.5a1 1 0 0 0-1 1v6a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-6a1 1 0 0 0-1-1h-1.75v-.5A2.75 2.75 0 0 0 12 3.5zm2 7.849L6.75 9.182V6.25C6.75 5.56 7.31 5 8 5h4c.69 0 1.25.56 1.25 1.25v2.932zm6-2.198v4.599c0 .69-.56 1.25-1.25 1.25h-9.5C4.56 15 4 14.44 4 13.75V9.151l6 4z"
    />
  </svg>
);
export default SvgEmailNewsletter;
