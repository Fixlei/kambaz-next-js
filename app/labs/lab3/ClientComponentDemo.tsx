//the component uses the usePathname() hook to read the
//current route. Hooks like this only work in Client Components:
//remove the directive and next dev or next build stops with an
//error saying the hook needs "use client"

"use client";

import { usePathname } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname();
  return (
    <div id="wd-client-component-demo">
      <h1>Client Component Demo</h1>
      <p>Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
      {/* With AI: last path segment */}
      <p>Last segment: {pathname.split("/").pop()}</p>
    </div>
  );
}
