import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M8.75 10.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM12.5 11.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M6.25 10.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM4.5 8.75A.75.75 0 0 1 5.25 8h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M8.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM10.5 8.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M14.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M5.25 5.5A2.75 2.75 0 0 0 2.5 8.25v3.5a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-3.5a2.75 2.75 0 0 0-2.75-2.75zM4 8.25C4 7.56 4.56 7 5.25 7h9.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-9.5C4.56 13 4 12.44 4 11.75z"
    />
  </svg>
);
export default SvgKeyboard;
