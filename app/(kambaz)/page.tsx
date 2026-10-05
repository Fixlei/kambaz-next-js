//Home page of the app ("/"). (kambaz) is a route group, so its folder name is not part of the URL.
//There is no content here: visitors are sent straight to the Sign in page.
import { redirect } from "next/navigation";

export default function Kambaz() {
  redirect("/account/signin");
}