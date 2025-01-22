import * as React from "react";
import type { SVGProps } from "react";
const SvgSkeleton = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={14} height={14} x={3} y={3} fillOpacity={0.12} rx={4} />
  </svg>
);
export default SvgSkeleton;
