import * as React from "react";
import type { SVGProps } from "react";
const SvgPageClock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7.75 12a.75.75 0 0 0-1.5 0v1.293c0 .331.132.65.366.884l.854.853a.75.75 0 0 0 1.06-1.06l-.78-.78z" />
    <path
      fillRule="evenodd"
      d="M14.25 17H9.829A4.5 4.5 0 1 1 6.25 9.062V5.75A2.75 2.75 0 0 1 9 3h3a.75.75 0 0 1 .53.22l4.25 4.25c.141.14.22.331.22.53v6.25A2.75 2.75 0 0 1 14.25 17M7.75 5.75c0-.69.56-1.25 1.25-1.25h2.25V7c0 .966.784 1.75 1.75 1.75h2.5v5.5c0 .69-.56 1.25-1.25 1.25h-3.218A4.5 4.5 0 0 0 7.75 9.062zm6.69 1.5-1.69-1.69V7c0 .138.112.25.25.25zM7 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgPageClock;
