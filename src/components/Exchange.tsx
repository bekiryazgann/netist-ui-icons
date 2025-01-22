import * as React from "react";
import type { SVGProps } from "react";
const SvgExchange = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fillRule="evenodd"
      d="M15.5 11.364a2.501 2.501 0 1 1-1.5 0V9a2.25 2.25 0 0 0-2.25-2.25h-.44l.47.47a.75.75 0 0 1-1.06 1.06L8.97 6.53a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 1 1 1.06 1.06l-.47.47h.44A3.75 3.75 0 0 1 15.5 9zm.25 2.386a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 11V8.636a2.501 2.501 0 1 0-1.5 0V11a3.75 3.75 0 0 0 3.75 3.75h.44l-.47.47a.75.75 0 1 0 1.06 1.06l1.75-1.75a.75.75 0 0 0 0-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l.47.47h-.44A2.25 2.25 0 0 1 6 11m.25-4.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgExchange;
