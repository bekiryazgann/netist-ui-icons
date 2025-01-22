import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWithImage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 3.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm3 1.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"
    />
    <path d="M3.5 15.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M4.25 11.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5zM11.25 8.75A.75.75 0 0 1 12 8h3.75a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M12 4.5A.75.75 0 0 0 12 6h3.75a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgTextWithImage;
