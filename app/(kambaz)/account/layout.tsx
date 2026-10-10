import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

// Layout shared by every page under /account (signin, signup, profile)
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account">
      {/* Two-column table: account links on the left, current page on the right */}
      <table>
        <tbody>
          <tr>
            {/* Left column: Signin / Signup / Profile links */}
            <td valign="top">
              <AccountNavigation />
            </td>
            {/* Right column fills the remaining width with the active account page */}
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
