import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpHexagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M3 7.941v8.118c0 .342 0 .514.05.666a1 1 0 0 0 .215.364c.109.119.258.202.558.368l7.4 4.111c.284.158.425.237.575.267q.201.042.403 0c.15-.03.292-.11.576-.267l7.4-4.11c.3-.167.45-.25.558-.369a1 1 0 0 0 .215-.364c.05-.152.05-.324.05-.667V7.941c0-.342 0-.514-.05-.666a1 1 0 0 0-.215-.364c-.109-.119-.258-.202-.558-.368l-7.4-4.111c-.284-.158-.425-.237-.575-.268a1 1 0 0 0-.403 0c-.15.031-.292.11-.576.268l-7.4 4.11c-.3.167-.45.25-.558.369a1 1 0 0 0-.215.364C3 7.427 3 7.599 3 7.94"
    />
  </svg>
);
export default SvgHelpHexagon;
