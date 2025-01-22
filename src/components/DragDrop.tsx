import * as React from "react";
import type { SVGProps } from "react";
const SvgDragDrop = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6.25 3.5A2.75 2.75 0 0 0 3.5 6.25a.75.75 0 0 0 1.5 0C5 5.56 5.56 5 6.25 5a.75.75 0 0 0 0-1.5M3.5 13.75a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5C5.56 15 5 14.44 5 13.75a.75.75 0 0 0-1.5 0M13.75 3.5a2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0C15 5.56 14.44 5 13.75 5a.75.75 0 0 1 0-1.5M5 9a.75.75 0 0 0-1.5 0v2A.75.75 0 0 0 5 11zm6.75-4.75A.75.75 0 0 1 11 5H9a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75M7.75 6A1.75 1.75 0 0 0 6 7.75v4.5c0 .966.784 1.75 1.75 1.75H9a.75.75 0 0 0 0-1.5H7.75a.25.25 0 0 1-.25-.25v-4.5a.25.25 0 0 1 .25-.25h4.5a.25.25 0 0 1 .25.25V9A.75.75 0 0 0 14 9V7.75A1.75 1.75 0 0 0 12.25 6z" />
    <path d="M11.065 10.46a.5.5 0 0 0-.606.605l1.122 4.51a.5.5 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.164-1.165a.5.5 0 0 0-.233-.838z" />
  </svg>
);
export default SvgDragDrop;
