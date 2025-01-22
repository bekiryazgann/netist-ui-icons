import * as React from "react";
import type { SVGProps } from "react";
const SvgTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M4.75 10a5.25 5.25 0 0 1 10.5 0 .75.75 0 0 0 1.5 0A6.75 6.75 0 1 0 10 16.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 4.75 10" />
    <path d="M11.537 9.805a.75.75 0 0 0 1.486-.208 3 3 0 1 0-3.492 3.372.75.75 0 0 0 .26-1.478 1.5 1.5 0 1 1 1.746-1.686" />
    <path d="M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87z" />
  </svg>
);
export default SvgTarget;
