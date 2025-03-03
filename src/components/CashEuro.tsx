import * as React from "react";
import type { SVGProps } from "react";
const SvgCashEuro = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.76 7.893c-.248.149-.579.533-.707 1.357h1.697a.75.75 0 0 1 0 1.5H9.053c.128.823.46 1.207.708 1.357.309.185.684.137.959-.138a.75.75 0 1 1 1.06 1.061c-.725.726-1.85.927-2.79.363-.788-.472-1.304-1.385-1.449-2.643H7.25a.75.75 0 1 1 0-1.5h.291c.145-1.258.661-2.171 1.448-2.643.941-.565 2.066-.363 2.791.362a.75.75 0 0 1-1.06 1.061c-.275-.274-.65-.323-.96-.137" />
    <path
      fillRule="evenodd"
      d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
    />
  </svg>
);
export default SvgCashEuro;
