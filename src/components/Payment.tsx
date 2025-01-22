import * as React from "react";
import type { SVGProps } from "react";
const SvgPayment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.621 4h5.258c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.144.283.198.578.222.875.023.28.023.622.023 1.017v2.258c0 .395 0 .736-.023 1.017a2.3 2.3 0 0 1-.222.875 2.25 2.25 0 0 1-.983.984c-.284.144-.58.198-.876.222-.28.023-.622.023-1.017.023h-2.58q-.12.125-.265.23l-2.73 1.965c-.565.407-.93.67-1.335.859-.358.167-.736.29-1.125.363-.44.083-.889.083-1.586.083H3.75a.75.75 0 0 1 0-1.5h1.436c.794 0 1.095-.003 1.379-.057q.4-.076.77-.248c.261-.122.508-.296 1.152-.76l2.67-1.923a.423.423 0 0 0-.35-.753l-4.875 1.219a.75.75 0 0 1-.364-1.456l.932-.233V8c-.59.002-.821.011-1.033.062a2.3 2.3 0 0 0-.65.27c-.21.128-.398.31-.943.854l-.594.594a.75.75 0 0 1-1.06-1.06l.654-.655c.46-.46.78-.78 1.16-1.012a3.8 3.8 0 0 1 1.083-.45c.397-.095.813-.103 1.387-.103a7 7 0 0 1 .019-.396 2.3 2.3 0 0 1 .222-.875 2.25 2.25 0 0 1 .984-.984 2.3 2.3 0 0 1 .875-.222C8.884 4 9.226 4 9.621 4m5.229 7h-2.024a1.925 1.925 0 0 0-2.382-1.697L8 9.914V8.5h8.5v.85c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317a.75.75 0 0 1-.328.327c-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018m1.645-4.5h-8.49q.003-.155.013-.274c.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h5.2c.432 0 .712 0 .924.018.204.017.28.045.316.064a.75.75 0 0 1 .328.328c.02.037.047.112.064.316q.01.119.013.274"
    />
  </svg>
);
export default SvgPayment;
