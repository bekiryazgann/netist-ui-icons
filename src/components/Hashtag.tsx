import * as React from "react";
import type { SVGProps } from "react";
const SvgHashtag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.239 4.379a.75.75 0 1 0-1.478-.257l-.457 2.628H8.826l.413-2.371a.75.75 0 0 0-1.478-.257L7.304 6.75H4.5a.75.75 0 0 0 0 1.5h2.543l-.609 3.5H4a.75.75 0 0 0 0 1.5h2.174l-.413 2.372a.75.75 0 1 0 1.478.257l.457-2.629h3.478l-.413 2.372a.75.75 0 1 0 1.478.257l.457-2.629H15.5a.75.75 0 0 0 0-1.5h-2.543l.609-3.5H16a.75.75 0 0 0 0-1.5h-2.174zM7.957 11.75h3.477l.61-3.5H8.566z"
    />
  </svg>
);
export default SvgHashtag;
