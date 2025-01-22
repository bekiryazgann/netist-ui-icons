import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeedometer01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2v2.5M12 2C6.477 2 2 6.477 2 12M12 2c5.523 0 10 4.477 10 10m-10 7.5V22m0 0c5.523 0 10-4.477 10-10M12 22C6.477 22 2 17.523 2 12m2.5 0H2m20 0h-2.5m-.422 7.078-1.773-1.773M4.922 19.078l1.775-1.775M4.922 5l1.736 1.736M19.078 5 13.5 10.5M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgSpeedometer01;
