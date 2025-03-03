import * as React from "react";
import type { SVGProps } from "react";
const SvgTransaction = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4.5 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V8.5h6.94l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H4.5z" />
    <path d="M17 4.75a.75.75 0 0 0-1.5 0V12H8.56l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h6.94v1.75a.75.75 0 0 0 1.5 0z" />
  </svg>
);
export default SvgTransaction;
