import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarTime = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2.25a.75.75 0 0 1 .75.75v.528C7.237 3.5 7.82 3.5 8.518 3.5H11V3a.75.75 0 0 1 1.5 0v.604a3.04 3.04 0 0 1 2.25 2.936c0 .835-.678 1.513-1.513 1.513H4.504c-.004.288-.004.617-.004.997v2.468c0 1.233 1 2.232 2.232 2.232a.75.75 0 0 1 0 1.5A3.73 3.73 0 0 1 3 11.518v-2.5c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47A3.75 3.75 0 0 1 5.25 3.815V3A.75.75 0 0 1 6 2.25m7.237 4.303h-8.61c.033-.13.072-.234.118-.324a2.25 2.25 0 0 1 .984-.984c.197-.1.458-.17.912-.207C7.103 5.001 7.698 5 8.55 5h3.16c.85 0 1.54.69 1.54 1.54v.005l-.004.004-.004.003h-.005Z"
    />
    <path d="M14.25 12a.75.75 0 0 0-1.5 0v1.293c0 .331.132.65.366.884l.854.853a.749.749 0 1 0 1.06-1.06l-.78-.78z" />
    <path
      fillRule="evenodd"
      d="M13.5 18a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgCalendarTime;
