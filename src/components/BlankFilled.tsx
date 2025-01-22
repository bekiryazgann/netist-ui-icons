import * as React from "react";
import type { SVGProps } from "react";
const SvgBlankFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M16.5 6.25a2.75 2.75 0 0 0-2.75-2.75h-1a.75.75 0 0 0 0 1.5h1c.69 0 1.25.56 1.25 1.25v1a.75.75 0 0 0 1.5 0zM6.25 16.5a2.75 2.75 0 0 1-2.75-2.75v-1a.75.75 0 0 1 1.5 0v1c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 1 0 1.5zM13.75 16.5a2.75 2.75 0 0 0 2.75-2.75v-1a.75.75 0 0 0-1.5 0v1c0 .69-.56 1.25-1.25 1.25h-1a.75.75 0 0 0 0 1.5zM6.25 3.5A2.75 2.75 0 0 0 3.5 6.25v1a.75.75 0 0 0 1.5 0v-1C5 5.56 5.56 5 6.25 5h1a.75.75 0 0 0 0-1.5zM8.25 6.5A1.75 1.75 0 0 0 6.5 8.25v3.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75v-3.5a1.75 1.75 0 0 0-1.75-1.75z" />
  </svg>
);
export default SvgBlankFilled;
