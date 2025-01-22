import * as React from "react";
import type { SVGProps } from "react";
const SvgForklift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4.25a.75.75 0 0 0-1.5 0v3.98l-.8-2.001A2.75 2.75 0 0 0 10.146 4.5H6.75a.75.75 0 0 0-.75.75V8.5H4.25a.75.75 0 0 0-.75.75v3.159a2.5 2.5 0 1 0 4.636 1.841h2.479A2.501 2.501 0 0 0 15.45 13h1.8a.75.75 0 0 0 0-1.5H15zm-8.589 10a.998.998 0 0 0 0-1.5.996.996 0 0 0-1.322 0 .998.998 0 0 0 0 1.5.996.996 0 0 0 1.322 0M5 11.114a2.5 2.5 0 0 1 3.136 1.636h2.479a2.5 2.5 0 0 1 2.135-1.738V11H9.5a.8.8 0 0 1-.256-.045L6.618 10H5zm7.338 1.636a1 1 0 1 1 1.323 1.498 1 1 0 0 1-1.322-1.498ZM9.632 9.5h2.76l-1.085-2.714A1.25 1.25 0 0 0 10.146 6H7.5v2.725z"
    />
  </svg>
);
export default SvgForklift;
