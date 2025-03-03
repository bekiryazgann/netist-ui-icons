import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptEuro = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.26 7.393c-.248.15-.579.534-.707 1.357h1.697a.75.75 0 0 1 0 1.5H9.553c.128.823.46 1.208.708 1.357.309.185.684.137.959-.137a.75.75 0 1 1 1.06 1.06c-.725.726-1.85.928-2.79.363-.788-.472-1.304-1.385-1.449-2.643H7.75a.75.75 0 1 1 0-1.5h.291c.145-1.258.661-2.171 1.448-2.643.941-.565 2.066-.363 2.791.363a.75.75 0 0 1-1.06 1.06c-.275-.274-.65-.322-.96-.137" />
    <path
      fillRule="evenodd"
      d="M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26A1.5 1.5 0 0 0 16 16V5a2.5 2.5 0 0 0-2.5-2.5h-7A2.5 2.5 0 0 0 4 5zm8.149-2h.202a1 1 0 0 1 .642.326L14.5 16V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v11l1.507-1.674A1 1 0 0 1 7.649 14h.202a1 1 0 0 1 .642.326L10 16l1.507-1.674a1 1 0 0 1 .642-.326"
    />
  </svg>
);
export default SvgReceiptEuro;
