import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.809 3.197 2.63-.986c.207-.078.311-.117.418-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.281 1.123.422 1.398.665a2 2 0 0 1 .547.789c.131.343.131.743.131 1.543V12a7 7 0 0 1-.318 2.071m-2.06 3.555c-1.686 1.96-3.834 3.353-4.922 3.988-.223.13-.334.195-.49.228a1.1 1.1 0 0 1-.42 0c-.156-.033-.267-.098-.488-.227C9.354 20.479 4 16.909 4 12V5.776c0-.467.29-.885.727-1.048M3 3l18 18"
    />
  </svg>
);
export default SvgShieldOff;
