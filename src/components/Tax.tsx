import * as React from "react";
import type { SVGProps } from "react";
const SvgTax = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.25 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3.5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fillRule="evenodd"
      d="M12.692 9.308a.625.625 0 0 1 0 .884l-4.5 4.5a.625.625 0 1 1-.884-.884l4.5-4.5a.625.625 0 0 1 .884 0"
    />
    <path
      fillRule="evenodd"
      d="M8.025 2.5c-.562 0-1.024.467-.914 1.018.19.959.613 1.744 1.172 2.267a5.3 5.3 0 0 0-3.285 3.25l-1.108 3.13C2.968 14.768 4.898 17.5 7.66 17.5h4.68c2.761 0 4.692-2.732 3.77-5.335l-1.108-3.13a5.3 5.3 0 0 0-3.285-3.25c.559-.523.981-1.308 1.172-2.267.11-.551-.352-1.018-.914-1.018zM10 5c-.295 0-.826-.231-1.176-1h2.352c-.35.769-.88 1-1.176 1m3.588 4.536 1.108 3.13A2.5 2.5 0 0 1 12.34 16H7.66a2.5 2.5 0 0 1-2.356-3.335l1.108-3.13a3.806 3.806 0 0 1 7.176 0Z"
    />
  </svg>
);
export default SvgTax;
