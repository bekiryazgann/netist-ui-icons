import * as React from "react";
import type { SVGProps } from "react";
const SvgBullet = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 10a2 2 0 1 1-3.999.001A2 2 0 0 1 12 10" />
  </svg>
);
export default SvgBullet;
