import * as React from "react";
import type { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 7.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fillRule="evenodd"
      d="M8.85 2.75A4.35 4.35 0 0 0 4.5 7.1 3.4 3.4 0 0 0 7 10.38v3.435a2 2 0 0 0 .481 1.302l1.07 1.247a2 2 0 0 0 2.746.277l1.309-1.018a2 2 0 0 0 .376-2.776 2.004 2.004 0 0 0 .002-2.463A3.4 3.4 0 0 0 15.5 7.1a4.35 4.35 0 0 0-4.35-4.35zm2.835 11.69a.5.5 0 0 0-.042-.82l-.637-.397a.5.5 0 0 1 .041-.872l.582-.29a.5.5 0 0 0 .13-.802l-.613-.613a.5.5 0 0 1-.146-.353V9.5a.5.5 0 0 1 .5-.5h.6A1.9 1.9 0 0 0 14 7.1a2.85 2.85 0 0 0-2.85-2.85h-2.3A2.85 2.85 0 0 0 6 7.1C6 8.15 6.85 9 7.9 9H8a.5.5 0 0 1 .5.5v4.315a.5.5 0 0 0 .12.325l1.07 1.248a.5.5 0 0 0 .686.07z"
    />
  </svg>
);
export default SvgKey;
