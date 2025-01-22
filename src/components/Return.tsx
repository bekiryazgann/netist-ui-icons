import * as React from "react";
import type { SVGProps } from "react";
const SvgReturn = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.75 12c.241 0 .334 0 .41-.004a3.25 3.25 0 0 0 3.086-3.087c.004-.075.004-.168.004-.409s0-.334-.004-.41a3.25 3.25 0 0 0-3.087-3.086A10 10 0 0 0 10.75 5h-1.5a.75.75 0 0 1 0-1.5h1.524c.21 0 .342 0 .46.006a4.75 4.75 0 0 1 4.51 4.51c.006.118.006.25.006.46v.048c0 .21 0 .342-.006.46a4.75 4.75 0 0 1-4.51 4.51c-.118.006-.25.006-.46.006H6.811l1.72 1.72a.75.75 0 1 1-1.061 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06L6.81 12z" />
  </svg>
);
export default SvgReturn;
