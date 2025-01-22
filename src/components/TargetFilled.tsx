import * as React from "react";
import type { SVGProps } from "react";
const SvgTargetFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M5 10a5 5 0 0 1 10 0 1 1 0 1 0 2 0 7 7 0 1 0-7 7 1 1 0 1 0 0-2 5 5 0 0 1-5-5" />
    <path d="M11.29 9.84a1 1 0 0 0 1.98-.278 3.25 3.25 0 1 0-3.782 3.653 1 1 0 1 0 .347-1.97A1.25 1.25 0 1 1 11.29 9.84" />
    <path d="M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87z" />
  </svg>
);
export default SvgTargetFilled;
