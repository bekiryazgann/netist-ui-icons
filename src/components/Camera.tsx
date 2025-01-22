import * as React from "react";
import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 7.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M8.25 10.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
    />
    <path
      fillRule="evenodd"
      d="M8.584 4a2.75 2.75 0 0 0-2.435 1.472l-.346.658a.69.69 0 0 1-.612.37C3.981 6.5 3 7.481 3 8.691v4.559A2.75 2.75 0 0 0 5.75 16h8.5A2.75 2.75 0 0 0 17 13.25V8.691c0-1.21-.981-2.191-2.191-2.191a.69.69 0 0 1-.612-.37l-.346-.658A2.75 2.75 0 0 0 11.416 4zM7.477 6.169A1.25 1.25 0 0 1 8.584 5.5h2.832c.465 0 .89.258 1.107.669l.345.658A2.19 2.19 0 0 0 14.808 8c.383 0 .692.31.692.691v4.559c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25V8.691c0-.381.31-.691.691-.691a2.19 2.19 0 0 0 1.94-1.173z"
    />
  </svg>
);
export default SvgCamera;
