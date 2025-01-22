import * as React from "react";
import type { SVGProps } from "react";
const SvgGames = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13.75 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.25 7.25A.75.75 0 0 1 8 8v.5h.5a.75.75 0 0 1 0 1.5H8v.5a.75.75 0 0 1-1.5 0V10H6a.75.75 0 0 1 0-1.5h.5V8a.75.75 0 0 1 .75-.75" />
    <path
      fillRule="evenodd"
      d="M12 3.75c-.69 0-1.25.56-1.25 1.25h1.5A4.75 4.75 0 0 1 17 9.75v3.343a2.907 2.907 0 0 1-5.685.855l-.332-1.077a.17.17 0 0 0-.163-.121H9.18a.17.17 0 0 0-.163.12l-.332 1.078A2.907 2.907 0 0 1 3 13.093V9.75A4.75 4.75 0 0 1 7.75 5h1.5A2.75 2.75 0 0 1 12 2.25zM7.75 6.5A3.25 3.25 0 0 0 4.5 9.75v3.343a1.407 1.407 0 0 0 2.752.414l.331-1.078A1.67 1.67 0 0 1 9.18 11.25h1.64a1.67 1.67 0 0 1 1.597 1.18l.331 1.077a1.407 1.407 0 0 0 2.752-.414V9.75a3.25 3.25 0 0 0-3.25-3.25z"
    />
  </svg>
);
export default SvgGames;
