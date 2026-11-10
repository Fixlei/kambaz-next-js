import "@/app/labs/lab2/tailwind/utilities.css";
import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <Environment />
      <hr />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
    </div>
  );
}
