import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorBanner = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 7.25V11a.75.75 0 0 0 1.5 0V7.25a3.75 3.75 0 0 0-3.75-3.75h-5.5A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75H11a.75.75 0 0 0 0-1.5H7.25A2.25 2.25 0 0 1 5 12.75v-5.5A2.25 2.25 0 0 1 7.25 5h5.5A2.25 2.25 0 0 1 15 7.25" />
    <path d="M14 10.625a.625.625 0 0 0-.625-.625H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.165a1 1 0 0 0 .984-.821l.202-1.108a1 1 0 0 1 .984-.821h1.04c.345 0 .625-.28.625-.625" />
    <path d="M12.69 12.084a.5.5 0 0 0-.606.606l1.122 4.51a.497.497 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.163-1.165a.499.499 0 0 0-.232-.838l-4.51-1.122Z" />
  </svg>
);
export default SvgCursorBanner;
