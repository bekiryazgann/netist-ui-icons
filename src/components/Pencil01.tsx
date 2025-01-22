import * as React from "react";
import type { SVGProps } from "react";
const SvgPencil01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.5 21.5 5.55-2.134c.354-.137.532-.205.698-.294q.221-.12.42-.274c.149-.115.283-.25.552-.518L21 7a2.828 2.828 0 1 0-4-4L5.72 14.28c-.269.268-.403.403-.519.552a3 3 0 0 0-.273.42c-.089.166-.157.344-.294.699zm0 0 2.058-5.351c.147-.383.221-.575.347-.662a.5.5 0 0 1 .38-.08c.15.028.295.173.585.463l2.26 2.26c.29.29.435.434.464.585a.5.5 0 0 1-.08.38c-.089.126-.28.2-.663.347z"
    />
  </svg>
);
export default SvgPencil01;
