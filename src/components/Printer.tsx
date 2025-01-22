import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 7V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 2 15.92 2 14.8 2H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 3.52 6 4.08 6 5.2V7m0 11c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C2 15.395 2 14.93 2 14v-2.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 7 5.12 7 6.8 7h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8V14c0 .93 0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C19.396 18 18.93 18 18 18m-3-7.5h3M9.2 22h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 20.48 18 19.92 18 18.8v-1.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 14 15.92 14 14.8 14H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 15.52 6 16.08 6 17.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 22 8.08 22 9.2 22"
    />
  </svg>
);
export default SvgPrinter;
