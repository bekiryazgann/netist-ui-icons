import * as React from "react";
import type { SVGProps } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 9.5A.75.75 0 0 0 6 11h1a.75.75 0 0 0 0-1.5zm-.75 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" />
    <path
      fillRule="evenodd"
      d="M5.25 4A2.75 2.75 0 0 0 2.5 6.75v6.5A2.75 2.75 0 0 0 5.25 16h9.5a2.75 2.75 0 0 0 2.75-2.75v-6.5A2.75 2.75 0 0 0 14.75 4zm7.184 1.5H5.25C4.56 5.5 4 6.06 4 6.75v6.5c0 .69.56 1.25 1.25 1.25h7.184l-.5-.273a2.75 2.75 0 0 1-1.434-2.414V8.187a2.75 2.75 0 0 1 1.433-2.414zM16 13.052V6.948a1 1 0 0 0-1.479-.878l-1.87 1.02A1.25 1.25 0 0 0 12 8.187v3.626c0 .457.25.878.651 1.097l1.87 1.02A1 1 0 0 0 16 13.052"
    />
  </svg>
);
export default SvgEnvelope;
