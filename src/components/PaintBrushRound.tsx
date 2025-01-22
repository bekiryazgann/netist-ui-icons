import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintBrushRound = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.155 3.844a2.08 2.08 0 0 0-2.831-.1L6.97 9.25A3.75 3.75 0 0 0 3.25 13v3c0 .414.336.75.75.75h3a3.75 3.75 0 0 0 3.75-3.72l5.506-6.354a2.08 2.08 0 0 0-.1-2.832Zm-5.841 7.399 4.809-5.55a.579.579 0 0 0-.817-.816l-5.549 4.81a3.77 3.77 0 0 1 1.557 1.556M7 10.75a2.25 2.25 0 0 1 0 4.5H4.75V13A2.25 2.25 0 0 1 7 10.75"
    />
  </svg>
);
export default SvgPaintBrushRound;
