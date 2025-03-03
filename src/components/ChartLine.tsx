import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.447 4.5a.92.92 0 0 0-.908.757l-1.002 5.487A2.75 2.75 0 0 1 3.832 13H3.75a.75.75 0 0 1 0-1.5h.082a1.25 1.25 0 0 0 1.23-1.025l1.001-5.487a2.423 2.423 0 0 1 4.8.255l.716 9.612a.697.697 0 0 0 1.383.063l.52-3.12A2.75 2.75 0 0 1 16.194 9.5h.056a.75.75 0 0 1 0 1.5h-.056a1.25 1.25 0 0 0-1.233 1.044l-.52 3.12a2.197 2.197 0 0 1-4.358-.198l-.716-9.612a.923.923 0 0 0-.92-.854"
    />
  </svg>
);
export default SvgChartLine;
