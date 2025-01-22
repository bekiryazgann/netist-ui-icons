import * as React from "react";
import type { SVGProps } from "react";
const SvgDomainFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M2.5 4.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4v8.25a.75.75 0 0 1-1.5 0zM12.565 11.46a.5.5 0 0 0-.606.605l1.122 4.51a.5.5 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.163-1.165a.5.5 0 0 0-.232-.838l-4.51-1.122Z" />
    <path
      fillRule="evenodd"
      d="M5 6.75A.75.75 0 0 1 5.75 6h11a.75.75 0 0 1 .75.75v4.785q-.074-.027-.153-.046l-4.51-1.121a1.625 1.625 0 0 0-1.97 1.969l1.036 4.163H5.75a.75.75 0 0 1-.75-.75zM16 8.5H6.5v-1H16z"
    />
  </svg>
);
export default SvgDomainFilled;
