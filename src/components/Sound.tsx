import * as React from "react";
import type { SVGProps } from "react";
const SvgSound = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.866 4.324c.788-.788 2.134-.23 2.134.884v9.585c0 1.114-1.346 1.672-2.134.884l-2.603-2.603a.25.25 0 0 0-.177-.073H4.75A1.75 1.75 0 0 1 3 11.251v-2.5c0-.967.784-1.75 1.75-1.75h1.336a.25.25 0 0 0 .177-.074zM9.5 5.811 7.323 7.988a1.75 1.75 0 0 1-1.237.512H4.75a.25.25 0 0 0-.25.25v2.5c0 .139.112.25.25.25h1.336c.464 0 .909.185 1.237.513L9.5 14.19z"
    />
    <path d="M11.907 7.345a.75.75 0 0 1 1.047-.166 4.152 4.152 0 0 1 .496 6.294.75.75 0 0 1-1.061-1.06 2.65 2.65 0 0 0-.316-4.02.75.75 0 0 1-.166-1.048" />
    <path d="M14.62 4.886a.75.75 0 0 0-.881 1.214 5.486 5.486 0 0 1 .654 8.317.75.75 0 1 0 1.06 1.061 6.986 6.986 0 0 0-.833-10.592" />
  </svg>
);
export default SvgSound;
