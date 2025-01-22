import * as React from "react";
import type { SVGProps } from "react";
const SvgPageClockFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13 3.69V7h3.31zM7.75 12a.75.75 0 0 0-1.5 0v1.293c0 .331.132.65.366.884l.854.853a.75.75 0 0 0 1.06-1.06l-.78-.78z" />
    <path
      fillRule="evenodd"
      d="M17 8.5v5.75A2.75 2.75 0 0 1 14.25 17H9.829A4.5 4.5 0 1 1 6.25 9.062V5.75A2.75 2.75 0 0 1 9 3h2.5v4A1.5 1.5 0 0 0 13 8.5zm-10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgPageClockFilled;
