import * as React from "react";
import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.75 8.75a.75.75 0 0 0-1.5 0V10c0 .199.079.39.22.53l1.25 1.25a.75.75 0 1 0 1.06-1.06l-1.03-1.03z" />
    <path
      fillRule="evenodd"
      d="M9 3a1.75 1.75 0 0 0-1.75 1.75v.933A3.75 3.75 0 0 0 5.25 9v2a3.75 3.75 0 0 0 2 3.318v.932c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-.932a3.75 3.75 0 0 0 2-3.318V9a3.75 3.75 0 0 0-2-3.317V4.75A1.75 1.75 0 0 0 11 3zm0 2.25q-.126 0-.25.008V4.75A.25.25 0 0 1 9 4.5h2a.25.25 0 0 1 .25.25v.508A4 4 0 0 0 11 5.25zm-.25 10v-.508q.124.008.25.008h2q.126 0 .25-.008v.508a.25.25 0 0 1-.25.25H9a.25.25 0 0 1-.25-.25M9 6.75A2.25 2.25 0 0 0 6.75 9v2A2.25 2.25 0 0 0 9 13.25h2A2.25 2.25 0 0 0 13.25 11V9A2.25 2.25 0 0 0 11 6.75z"
    />
  </svg>
);
export default SvgWatch;
