import { redirect } from "next/navigation";

// Visiting /account on its own sends the user straight to the Signin page
export default function AccountPage() {
  redirect("/account/signin");
}