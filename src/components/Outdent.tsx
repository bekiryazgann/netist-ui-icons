import * as React from "react";
import type { SVGProps } from "react";
const SvgOutdent = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.75 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm7 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM10 11.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M3.75 14.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM8 12.407c0 .473-.55.755-.96.493l-3.765-2.408a.58.58 0 0 1 0-.985L7.04 7.1c.41-.262.96.02.96.493z" />
  </svg>
);
export default SvgOutdent;
