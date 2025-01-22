import * as React from "react";
import type { SVGProps } from "react";
const SvgCatalog = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.772 9c-.63 0-1.232.254-1.669.704l-2.628 2.709a1.676 1.676 0 0 0 .023 2.361l1.79 1.777c.595.59 1.557.6 2.164.02l2.933-2.802c.393-.376.615-.894.615-1.436v-1.34C18 9.893 17.101 9 15.992 9zm.978 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
    />
    <path d="M4.95 6.7a2.3 2.3 0 0 1 2.3-2.3h5.55a2.3 2.3 0 0 1 2.3 2.3v.4a.7.7 0 1 0 1.4 0v-.4A3.7 3.7 0 0 0 12.8 3H7.25a3.7 3.7 0 0 0-3.7 3.7v6.55a3.7 3.7 0 0 0 3.7 3.7H9a.7.7 0 1 0 0-1.4H7.25a2.3 2.3 0 0 1-2.3-2.3z" />
    <path d="M7 7a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 7M7 10a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 7 10" />
  </svg>
);
export default SvgCatalog;
