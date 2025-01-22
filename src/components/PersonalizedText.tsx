import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonalizedText = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5.75 4A2.75 2.75 0 0 0 3 6.75v1.94l-.78.78a.75.75 0 0 0 0 1.06l.78.78v1.94A2.75 2.75 0 0 0 5.75 16H6a.75.75 0 0 0 0-1.5h-.25c-.69 0-1.25-.56-1.25-1.25V11a.75.75 0 0 0-.22-.53L3.81 10l.47-.47A.75.75 0 0 0 4.5 9V6.75c0-.69.56-1.25 1.25-1.25H6A.75.75 0 0 0 6 4zm8.5 12A2.75 2.75 0 0 0 17 13.25v-1.94l.78-.78a.75.75 0 0 0 0-1.06L17 8.69V6.75A2.75 2.75 0 0 0 14.25 4H14a.75.75 0 0 0 0 1.5h.25c.69 0 1.25.56 1.25 1.25V9c0 .199.079.39.22.53l.47.47-.47.47a.75.75 0 0 0-.22.53v2.25c0 .69-.56 1.25-1.25 1.25H14a.75.75 0 0 0 0 1.5z" />
    <path
      fillRule="evenodd"
      d="M7.75 7.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M10 7a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
    />
    <path d="M8.163 13.368a2.069 2.069 0 0 1 3.674 0l.247.477a.75.75 0 1 0 1.332-.69l-.246-.476a3.569 3.569 0 0 0-6.34 0l-.246.476a.75.75 0 1 0 1.332.69z" />
  </svg>
);
export default SvgPersonalizedText;
