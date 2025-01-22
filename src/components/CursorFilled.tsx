import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M9.75 3a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 9.75 3M14.28 5.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0M7.28 12.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0M6.25 10.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5zM7.03 7.03a.75.75 0 0 1-1.06 0L4.22 5.28a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Z" />
  </svg>
);
export default SvgCursorFilled;
