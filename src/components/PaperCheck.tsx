import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13.496 5.354a.5.5 0 0 0 0-.707l-1.06-1.061a.5.5 0 0 0-.707 0l-.957.957 1.767 1.768zm-1.664 1.664L10.064 5.25 7.615 7.7a2 2 0 0 0-.585 1.406l-.003.698a.25.25 0 0 0 .251.251l.698-.002a2 2 0 0 0 1.407-.586l2.45-2.45Z" />
    <path d="M4.25 9.25C4.25 8.56 4.81 8 5.5 8h.25a.75.75 0 1 0 0-1.5H5.5a2.75 2.75 0 0 0-2.75 2.75v4A2.75 2.75 0 0 0 5.5 16h9a2.75 2.75 0 0 0 2.75-2.75V9a2.5 2.5 0 0 0-2.5-2.5.75.75 0 0 0 0 1.5 1 1 0 0 1 1 1v4.25c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25z" />
    <path d="M6.5 11.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm5.75.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75" />
  </svg>
);
export default SvgPaperCheck;
