import * as React from "react";
import type { SVGProps } from "react";
const SvgDomainRedirect = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.25 3a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0V4.5h9.75a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M5 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9.5h-9v5h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75zM15.5 7v1h-9V7z"
    />
    <path d="M12 15.902a.75.75 0 0 1 0-1.5h3.243l-.591-.591a.75.75 0 0 1 1.06-1.061l1.872 1.871a.75.75 0 0 1 0 1.061l-1.872 1.871a.749.749 0 1 1-1.06-1.06l.59-.591z" />
  </svg>
);
export default SvgDomainRedirect;
