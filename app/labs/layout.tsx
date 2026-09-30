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
            <TOC /> {/* left sidebar: render the table of contents for the labs */}
          </td>
          <td valign="top">{children}</td> {/* render the current lab(1,2,3,4,5) page */}
        </tr>
      </tbody>
    </table>
  );
}