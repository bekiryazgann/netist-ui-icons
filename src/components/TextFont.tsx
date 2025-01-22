import * as React from "react";
import type { SVGProps } from "react";
const SvgTextFont = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.077 12.5 6.099 15H6.5a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 4 15h.488L8.802 3.977a.75.75 0 0 1 .814-.468 1 1 0 0 1 1.06.613L15.126 15H16a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h.465l-1.023-2.5zm.587-1.5 1.792-4.578L11.329 11z"
    />
  </svg>
);
export default SvgTextFont;
