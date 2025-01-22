import * as React from "react";
import type { SVGProps } from "react";
const SvgCompose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M14.666 3.603a.5.5 0 0 1 .707 0l1.06 1.061a.5.5 0 0 1 0 .707l-.957.957-1.767-1.767zM13.002 5.268l1.767 1.767-3.83 3.831a2 2 0 0 1-1.348.585l-.772.025a.25.25 0 0 1-.258-.258l.025-.772a2 2 0 0 1 .585-1.348l3.83-3.83Z" />
    <path d="M5 7.25A2.25 2.25 0 0 1 7.25 5h1.83a.75.75 0 1 0 0-1.5H7.25A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-1.83a.75.75 0 0 0-1.5 0v1.83A2.25 2.25 0 0 1 12.75 15h-5.5A2.25 2.25 0 0 1 5 12.75z" />
  </svg>
);
export default SvgCompose;
