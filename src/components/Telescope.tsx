import * as React from "react";
import type { SVGProps } from "react";
const SvgTelescope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.122 14.845 18 22m-7.121-7.155L6 22m8-8.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m3.149-8.668L5.365 7.69c-.27.072-.406.109-.495.189a.5.5 0 0 0-.155.267c-.025.118.011.253.084.524l.88 3.284c.072.27.109.406.189.495a.5.5 0 0 0 .268.154c.117.025.252-.011.523-.083l11.784-3.158zM21.793 9.5c-1.082.29-1.623.434-2.093.335a2 2 0 0 1-1.07-.618c-.322-.357-.466-.898-.756-1.98l-.156-.58c-.29-1.082-.434-1.623-.335-2.092a2 2 0 0 1 .618-1.07c.357-.322.898-.467 1.98-.757.27-.072.406-.109.523-.084a.5.5 0 0 1 .268.155c.08.09.116.224.189.495l1.398 5.216c.072.27.108.406.083.523a.5.5 0 0 1-.154.268c-.09.08-.225.116-.495.189m-18.29 2.83 1.351-.362c.27-.073.406-.11.495-.19a.5.5 0 0 0 .155-.267c.025-.117-.011-.253-.084-.523l-.362-1.352c-.073-.27-.109-.406-.19-.495a.5.5 0 0 0-.267-.155c-.117-.025-.253.011-.523.084l-1.352.362c-.27.073-.406.109-.495.19a.5.5 0 0 0-.155.267c-.025.117.011.253.084.523l.362 1.352c.073.27.109.406.19.495a.5.5 0 0 0 .267.155c.117.025.253-.011.523-.084"
    />
  </svg>
);
export default SvgTelescope;
