import * as React from "react";
import type { SVGProps } from "react";
const SvgReplay = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.53 3.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H9.5a5 5 0 0 0 0 10h.5a4.75 4.75 0 0 0 4.75-4.75.75.75 0 0 0-1.5 0A3.25 3.25 0 0 1 10 14.75h-.5a3.5 3.5 0 1 1 0-7h2.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z" />
  </svg>
);
export default SvgReplay;
