import * as React from "react";
import type { SVGProps } from "react";
const SvgProductList = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.724 3c-1.02 0-1.994.415-2.701 1.149L3.769 8.566a2.75 2.75 0 0 0 .036 3.852l4.113 4.112a.749.749 0 1 0 1.06-1.06l-4.112-4.113a1.25 1.25 0 0 1-.016-1.75l4.253-4.418a2.25 2.25 0 0 1 1.62-.689h1.975c.966 0 1.75.784 1.75 1.75v2.371c0 .358-.146.7-.403.948a.75.75 0 0 0 1.04 1.08 2.8 2.8 0 0 0 .863-2.028V6.25A3.25 3.25 0 0 0 12.698 3z" />
    <path d="M12.448 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75" />
  </svg>
);
export default SvgProductList;
