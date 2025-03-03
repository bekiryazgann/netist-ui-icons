import * as React from "react";
import type { SVGProps } from "react";
const SvgWand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.165 3.893a2 2 0 0 0-2.862 0l-8.238 8.438a2 2 0 0 0 0 2.795l.725.742a2 2 0 0 0 2.847.015l4.082-4.092.006-.006 4.208-4.312a2 2 0 0 0 0-2.794zM13.377 4.94c.196-.2.519-.2.715 0l.768.787a.5.5 0 0 1 0 .699l-1.048 1.073-1.484-1.484zM11.28 7.088l-6.142 6.291a.5.5 0 0 0 0 .699l.725.742a.5.5 0 0 0 .712.004l4.079-4.09 2.11-2.162z"
    />
    <path d="M14.25 12a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5H15v.75a.75.75 0 0 1-1.5 0V15h-.75a.749.749 0 1 1 0-1.5h.75v-.75a.75.75 0 0 1 .75-.75m-8.5-8.5a.75.75 0 0 1 .75.75V5h.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0V6.5h-.75a.75.75 0 1 1 0-1.5H5v-.75a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgWand;
