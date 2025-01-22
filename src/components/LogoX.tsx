import * as React from "react";
import type { SVGProps } from "react";
const SvgLogoX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.906 17h4l-5.302-7.814L16.906 3h-1.414l-4.523 5.252L7.406 3H3.25l5.444 7.894L3.436 17h1.47l4.433-5.172zM5.631 4.25l7.931 11.5h.985L6.744 4.25z"
    />
  </svg>
);
export default SvgLogoX;
