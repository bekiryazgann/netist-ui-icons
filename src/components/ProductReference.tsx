import * as React from "react";
import type { SVGProps } from "react";
const SvgProductReference = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8.575 4.649a3.75 3.75 0 0 1 2.7-1.149h1.975a3.25 3.25 0 0 1 3.25 3.25v2.371c0 .766-.311 1.498-.863 2.029a.75.75 0 1 1-1.04-1.08c.258-.249.403-.591.403-.949V6.75A1.75 1.75 0 0 0 13.25 5h-1.974a2.25 2.25 0 0 0-1.62.69l-4.254 4.417a1.25 1.25 0 0 0 .016 1.75l2.898 2.898a1 1 0 0 0 1.4.014l.451-.434a.75.75 0 1 1 1.04 1.08l-.45.434a2.5 2.5 0 0 1-3.502-.033l-2.898-2.898a2.75 2.75 0 0 1-.036-3.852z" />
    <path d="M14 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.78 8.72a.75.75 0 0 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-1.19z" />
  </svg>
);
export default SvgProductReference;
