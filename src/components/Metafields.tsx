import * as React from "react";
import type { SVGProps } from "react";
const SvgMetafields = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6.25 9.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M6.5 4a2 2 0 0 0-2 2v.505l-.083.036A2.75 2.75 0 0 0 2.75 9.069v4.181A2.75 2.75 0 0 0 5.5 16h9a2.75 2.75 0 0 0 2.75-2.75V9.069a2.75 2.75 0 0 0-1.667-2.528l-.083-.036V6a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2H9a2 2 0 0 0-2-2zM6 6a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v.75c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V6a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1c0 .3.179.571.455.69l.537.23c.46.197.758.649.758 1.149v4.181c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25V9.069c0-.5.298-.952.758-1.15l.537-.23A.75.75 0 0 0 6 7z"
    />
  </svg>
);
export default SvgMetafields;
