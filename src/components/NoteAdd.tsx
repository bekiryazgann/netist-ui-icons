import * as React from "react";
import type { SVGProps } from "react";
const SvgNoteAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M3.5 6.25A2.75 2.75 0 0 1 6.25 3.5h7.5a2.75 2.75 0 0 1 2.75 2.75v4.25a.75.75 0 0 1-1.5 0V6.25C15 5.56 14.44 5 13.75 5h-7.5C5.56 5 5 5.56 5 6.25v7.5c0 .69.56 1.25 1.25 1.25h4.25a.75.75 0 0 1 0 1.5H6.25a2.75 2.75 0 0 1-2.75-2.75z" />
    <path d="M15 12.25a.75.75 0 0 1 .75.75v1.25H17a.75.75 0 0 1 0 1.5h-1.25V17a.75.75 0 0 1-1.5 0v-1.25H13a.75.75 0 0 1 0-1.5h1.25V13a.75.75 0 0 1 .75-.75M6.55 7.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 1 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7M7.25 9.05a.7.7 0 1 0 0 1.4H9.5a.7.7 0 1 0 0-1.4z" />
  </svg>
);
export default SvgNoteAdd;
