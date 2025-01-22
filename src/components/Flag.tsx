import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m4.964 4.02.237-.127a4.81 4.81 0 0 1 5.392.592 2.09 2.09 0 0 0 2.25.304l.844-.397A1.973 1.973 0 0 1 16.5 6.178v5.044a2.37 2.37 0 0 1-1.361 2.145l-1.363.64a4.09 4.09 0 0 1-4.406-.595 2.83 2.83 0 0 0-3.176-.349L5 13.7v2.05a.75.75 0 0 1-1.5 0V4.25a.75.75 0 0 1 1.464-.23m.943 1.196a3.31 3.31 0 0 1 3.71.408 3.59 3.59 0 0 0 3.865.522l.843-.397a.473.473 0 0 1 .675.429v5.044a.87.87 0 0 1-.5.787l-1.362.642a2.59 2.59 0 0 1-2.792-.378 4.33 4.33 0 0 0-4.858-.533L5 12V5.885a.31.31 0 0 1 .163-.272z"
    />
  </svg>
);
export default SvgFlag;
