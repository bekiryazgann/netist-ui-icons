import * as React from "react";
import type { SVGProps } from "react";
const SvgSelect = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.884 4.323a1.25 1.25 0 0 0-1.768 0L6.47 6.97a.75.75 0 0 0 1.06 1.06L10 5.56l2.47 2.47a.75.75 0 1 0 1.06-1.06zm2.646 8.707-2.646 2.647a1.25 1.25 0 0 1-1.768 0L6.47 13.03a.75.75 0 0 1 1.06-1.06L10 14.44l2.47-2.47a.75.75 0 0 1 1.06 1.06" />
  </svg>
);
export default SvgSelect;
