import * as React from "react";
import type { SVGProps } from "react";
const SvgSandbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.605 3.362a.75.75 0 0 1 .79 0l5.25 3.25a.75.75 0 0 1 .345.763q.01.06.01.125V13a.75.75 0 0 1-.355.638l-5.25 3.25a.75.75 0 0 1-.79 0l-5.25-3.25A.75.75 0 0 1 4 13V7.5q0-.065.01-.125a.75.75 0 0 1 .345-.763zm1.145 7.556 3.75-2.322v3.986l-3.75 2.322zm-1.5 0L5.5 8.596v3.986l3.75 2.322zM6.175 7.25 10 9.618l3.825-2.368L10 4.882z"
    />
  </svg>
);
export default SvgSandbox;
