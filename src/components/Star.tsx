import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.872 4.123c.453-.95 1.803-.95 2.256 0l1.39 2.912 3.199.421c1.042.138 1.46 1.422.697 2.146l-2.34 2.222.587 3.172c.192 1.034-.901 1.828-1.825 1.327L10 14.783l-2.836 1.54c-.924.501-2.017-.293-1.825-1.327l.587-3.172-2.34-2.222c-.762-.724-.345-2.008.697-2.146l3.2-.421zM10 5.242 8.778 7.803a1.25 1.25 0 0 1-.965.701l-2.814.371 2.058 1.954c.307.292.446.718.369 1.134l-.517 2.791L9.404 13.4a1.25 1.25 0 0 1 1.192 0l2.495 1.354-.517-2.79a1.25 1.25 0 0 1 .369-1.135l2.058-1.954-2.814-.37a1.25 1.25 0 0 1-.965-.702z"
    />
  </svg>
);
export default SvgStar;
