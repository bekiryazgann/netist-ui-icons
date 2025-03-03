import * as React from "react";
import type { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.008 9.61-2.01-4.75c-.354-.838.506-1.676 1.336-1.3l12.163 5.53a1 1 0 0 1 0 1.82L4.334 16.44c-.83.376-1.69-.462-1.335-1.3l2.01-4.75a1 1 0 0 0 0-.78Zm1.382-.584-1.51-3.57L14.875 10 4.88 14.543l1.51-3.569q.045-.11.082-.224h3.778a.75.75 0 0 0 0-1.5H6.472a3 3 0 0 0-.082-.224"
    />
  </svg>
);
export default SvgSend;
