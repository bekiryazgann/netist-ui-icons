import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeDropper = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.496 8.686 1.16-1.16a2.25 2.25 0 0 0-3.182-3.183l-1.16 1.161-.784-.784a.749.749 0 1 0-1.06 1.06l.783.785-5.91 5.91a2.25 2.25 0 1 0 3.182 3.182l5.91-5.91.807.807a.749.749 0 1 0 1.06-1.061zm-2.122 0-5.91 5.91a.749.749 0 1 1-1.06-1.06l5.91-5.91z"
    />
  </svg>
);
export default SvgEyeDropper;
