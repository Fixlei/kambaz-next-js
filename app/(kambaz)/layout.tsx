//Root layout for all Kambaz pages (Account, Dashboard, Courses...).
//Loads kambaz.css (Tailwind theme + utilities + Kambaz styles) once, renders the fixed black sidebar,
//and offsets the page content (wd-main-content-offset) so the sidebar does not cover it.
import { ReactNode } from "react";
import "./kambaz.css";
import KambazNavigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AccountProvider>
      <div id="wd-kambaz" className="font-sans">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">{children}</div>
      </div>
    </AccountProvider>
  );
}
