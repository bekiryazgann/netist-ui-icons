import * as React from "react";
import type { SVGProps } from "react";
const SvgListNumbered = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 5m0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 10m0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 15"
    />
    <path d="m3.75 3.38-.2.15a.5.5 0 1 1-.6-.8l.6-.45a.75.75 0 0 1 1.2.6v3h.5a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h.5zm-1 5.87a1.5 1.5 0 1 1 3 0v.05a1.5 1.5 0 0 1-.503 1.122l-.932.828h.935a.5.5 0 0 1 0 1H3.658c-.69 0-1.014-.852-.499-1.31l1.423-1.265A.5.5 0 0 0 4.75 9.3v-.05a.5.5 0 0 0-1 0 .5.5 0 0 1-1 0m.5 3.88a.5.5 0 0 0 0 1h1.188a.32.32 0 0 1 .312.32.5.5 0 0 1-.24.43h-.76a.5.5 0 0 0 0 1h.76c.145.088.24.252.24.43a.32.32 0 0 1-.312.32H3.25a.5.5 0 0 0 0 1h1.188a1.32 1.32 0 0 0 1.312-1.32 1.5 1.5 0 0 0-.321-.93 1.5 1.5 0 0 0 .321-.93 1.32 1.32 0 0 0-1.312-1.32z" />
  </svg>
);
export default SvgListNumbered;
