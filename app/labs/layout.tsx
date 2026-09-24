import { ReactNode } from "react";
import TOC from "./TOC";

// Wraps every /labs page: TOC sidebar on the left, the current lab page on the right.
export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="100px">
            <TOC />
          </td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}