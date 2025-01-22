import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintBrushFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.677 4.737a.25.25 0 0 0-.354 0L8.487 7.573a.25.25 0 0 0 0 .354l3.586 3.585a.25.25 0 0 0 .353.001l2.837-2.836a.25.25 0 0 0 0-.354L13.5 6.561l-.47.47a.75.75 0 0 1-1.06-1.061l.47-.47zm-1.414-1.06L5.677 8.262a1.75 1.75 0 0 0 0 2.475l.262.263-1.97 1.97a2.164 2.164 0 0 0 3.061 3.06L9 14.06l.263.263a1.75 1.75 0 0 0 2.474 0l4.586-4.586a1.75 1.75 0 0 0 0-2.475l-3.586-3.585a1.75 1.75 0 0 0-2.474 0M6.737 9.323l.526-.525q.074.1.164.19l3.586 3.585q.09.09.189.164l-.525.525a.25.25 0 0 1-.354 0L6.737 9.677a.25.25 0 0 1 0-.354M7 12.06l-1.97 1.97a.664.664 0 1 0 .94.94L7.94 13z"
    />
  </svg>
);
export default SvgPaintBrushFlat;
