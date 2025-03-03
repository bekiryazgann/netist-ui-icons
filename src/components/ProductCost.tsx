import * as React from "react";
import type { SVGProps } from "react";
const SvgProductCost = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8.575 4.649a3.75 3.75 0 0 1 2.7-1.149h1.975a3.25 3.25 0 0 1 3.25 3.25v1.5a.75.75 0 0 1-1.5 0v-1.5A1.75 1.75 0 0 0 13.25 5h-1.974c-.611 0-1.197.249-1.62.69l-4.254 4.417a1.25 1.25 0 0 0 .016 1.75l2.898 2.898a1 1 0 0 0 1.4.014l.451-.434a.75.75 0 0 1 1.06.02.747.747 0 0 1-.02 1.06l-.45.434a2.5 2.5 0 0 1-3.502-.033l-2.898-2.898a2.75 2.75 0 0 1-.036-3.852z" />
    <path d="M14 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.75 3.857a1.876 1.876 0 0 0 .625 3.643h.75a.375.375 0 0 1 0 .75H12.75a.75.75 0 0 0 0 1.5h.5V17a.75.75 0 0 0 1.5 0v-.254A1.875 1.875 0 0 0 14.625 13h-.75a.375.375 0 0 1 0-.75h1.875a.75.75 0 0 0 0-1.5h-1v-.25a.75.75 0 0 0-1.5 0z" />
  </svg>
);
export default SvgProductCost;
