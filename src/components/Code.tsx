import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12.221 4.956a.75.75 0 0 0-1.442-.412l-3 10.5a.75.75 0 1 0 1.442.412zM7.03 6.22a.75.75 0 0 1 0 1.06L4.31 10l2.72 2.72a.75.75 0 0 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0M12.97 13.78a.75.75 0 0 1 0-1.06L15.69 10l-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0" />
  </svg>
);
export default SvgCode;
