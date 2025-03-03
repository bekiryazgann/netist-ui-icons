import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.259 12.25c1.35 0 2.192-1.465 1.512-2.632l-.294-.504a2.75 2.75 0 0 0-2.376-1.364h-1.612l-1.368-2.21A3.25 3.25 0 0 0 8.357 4H7.75a.75.75 0 0 0-.742.856l.413 2.894h-.133l-.205-.443A2.25 2.25 0 0 0 5.04 6H3.75a.75.75 0 0 0-.734.905l1 4.75a.75.75 0 0 0 .734.595h2.671l-.413 2.894A.75.75 0 0 0 7.75 16h.607a3.25 3.25 0 0 0 2.764-1.54l1.368-2.21zm-4.534-4.5-.88-1.421a1.75 1.75 0 0 0-1.227-.81l.318 2.231zm-2.726 1.5H6.808a.75.75 0 0 1-.681-.436l-.406-.878a.75.75 0 0 0-.68-.436h-.367l.685 3.25h2.927a.75.75 0 0 1 .742.856l-.41 2.875a1.75 1.75 0 0 0 1.227-.81l1.589-2.566a.75.75 0 0 1 .637-.355h3.188a.25.25 0 0 0 .216-.376l-.294-.504a1.25 1.25 0 0 0-1.08-.62z"
    />
  </svg>
);
export default SvgAirplane;
