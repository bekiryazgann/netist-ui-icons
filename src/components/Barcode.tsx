import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M4.5 6.25a.75.75 0 0 1 .75-.75h.487a.75.75 0 1 0 0-1.5H5.25A2.25 2.25 0 0 0 3 6.25v.5a.75.75 0 0 0 1.5 0zM4.5 13.76c0 .414.336.75.75.75h.5a.75.75 0 0 1 0 1.5h-.5A2.25 2.25 0 0 1 3 13.76v-.5a.75.75 0 0 1 1.5 0zM14.75 5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 0 14.75 4h-.5a.75.75 0 0 0 0 1.5zM15.5 13.76a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 0 0 1.5h.5A2.25 2.25 0 0 0 17 13.76v-.5a.75.75 0 0 0-1.5 0zM6 7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0zM10.5 7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5M8 7.625a.625.625 0 1 1 1.25 0v4.75a.625.625 0 1 1-1.25 0zM13 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgBarcode;
