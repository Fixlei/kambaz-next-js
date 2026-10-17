//Another way to pass data to a component is in its body,
// that is, between the opening and closing tag of the element.

import { ReactNode } from "react";

export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children);
  return <span id="wd-square">{num * num}</span>;
}
