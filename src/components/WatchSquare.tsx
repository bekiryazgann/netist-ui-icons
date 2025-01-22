import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 18.5-.337 1.18c-.238.831-.356 1.247-.6 1.556a2 2 0 0 1-.815.616c-.364.148-.796.148-1.662.148h-3.172c-.865 0-1.298 0-1.662-.148a2 2 0 0 1-.816-.616c-.243-.309-.361-.725-.6-1.557L7 18.5m10-13-.337-1.18c-.238-.831-.356-1.247-.6-1.556a2 2 0 0 0-.815-.616C14.884 2 14.452 2 13.586 2h-3.172c-.865 0-1.298 0-1.662.148a2 2 0 0 0-.816.616c-.243.309-.361.725-.6 1.557L7 5.5M12 9v3l1.5 1.5m-4.8 5h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.98 5.5 16.42 5.5 15.3 5.5H8.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5.5 7.02 5.5 7.58 5.5 8.7v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218"
    />
  </svg>
);
export default SvgWatchSquare;
