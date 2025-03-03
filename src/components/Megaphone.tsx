import * as React from "react";
import type { SVGProps } from "react";
const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.451 12.354a2.61 2.61 0 0 1 0-5.208l4.01-.244a.25.25 0 0 0 .137-.05l3.097-2.34c1.153-.872 2.805-.05 2.805 1.395v7.608c0 1.437-1.637 2.261-2.792 1.406l-2.572-1.906-.287 2.44A1.75 1.75 0 0 1 8.111 17H7.75A1.75 1.75 0 0 1 6 15.25v-2.862zM4.5 9.75a1.11 1.11 0 0 0 1.042 1.107l4.056.246c.338.02.664.139.936.34l3.067 2.273a.25.25 0 0 0 .399-.201V5.907a.25.25 0 0 0-.4-.199l-3.098 2.341a1.75 1.75 0 0 1-.95.35l-4.01.244A1.11 1.11 0 0 0 4.5 9.75m3 2.729 1.18.071-.321 2.73a.25.25 0 0 1-.248.22H7.75a.25.25 0 0 1-.25-.25z"
    />
    <path d="M17.5 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" />
  </svg>
);
export default SvgMegaphone;
