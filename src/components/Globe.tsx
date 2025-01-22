import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0m7-5.5a5.5 5.5 0 0 0-4.737 2.703l2 1.999c.472.472.737 1.113.737 1.78v.518a.5.5 0 0 0 .5.5 2 2 0 0 1 2 2v1.478a5.5 5.5 0 0 0 4.52-3.228H14a.75.75 0 0 1-.75-.75V11a.75.75 0 0 0-.75-.75H10a1.755 1.755 0 0 1-1.07-3.144l.463-.356a.4.4 0 0 0 .152-.312v-.04c0-.885.62-1.624 1.449-1.808A5.5 5.5 0 0 0 10 4.5m2.875.81a1.85 1.85 0 0 1-1.477.735.35.35 0 0 0-.353.353v.04c0 .587-.271 1.14-.736 1.499l-.462.356A.256.256 0 0 0 10 8.75h2.5a2.25 2.25 0 0 1 2.236 2h.713a5.5 5.5 0 0 0-2.574-5.44M4.5 10q.001-.666.152-1.288l1.55 1.55c.19.191.298.45.298.72v.518a2 2 0 0 0 2 2 .5.5 0 0 1 .5.5v1.41A5.5 5.5 0 0 1 4.5 10"
    />
  </svg>
);
export default SvgGlobe;
