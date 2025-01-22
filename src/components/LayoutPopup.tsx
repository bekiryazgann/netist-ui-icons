import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutPopup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M6.25 3.5A2.75 2.75 0 0 0 3.5 6.25v.5a.75.75 0 0 0 1.5 0v-.5C5 5.56 5.56 5 6.25 5h.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M11.25 3.5A2.75 2.75 0 0 0 8.5 6.25v2.5a2.75 2.75 0 0 0 2.75 2.75h2.5a2.75 2.75 0 0 0 2.75-2.75v-2.5a2.75 2.75 0 0 0-2.75-2.75zM10 6.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-2.5C10.56 10 10 9.44 10 8.75z"
    />
    <path d="M4.25 12.5a.75.75 0 0 1 .75.75v.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5a2.75 2.75 0 0 1-2.75-2.75v-.5a.75.75 0 0 1 .75-.75M16.5 13.25a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5a2.75 2.75 0 0 0 2.75-2.75zM4.25 8.25A.75.75 0 0 1 5 9v2a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M9 15a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgLayoutPopup;
