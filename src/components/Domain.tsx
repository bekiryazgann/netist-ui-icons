import * as React from "react";
import type { SVGProps } from "react";
const SvgDomain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M3.25 3a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0V4.5h10.25a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M5 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-1.5 0v-.5h-9v5h4a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75zM15.5 7v1h-9V7z"
    />
    <path d="M12.565 10.96a.498.498 0 0 0-.606.605l1.122 4.51a.497.497 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.163-1.165a.499.499 0 0 0-.232-.838l-4.51-1.122Z" />
  </svg>
);
export default SvgDomain;
