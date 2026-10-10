import Modules from "../modules/page";
import CourseStatus from "./Status";
/**
 * Home page for a specific course.
 * Displays course modules and status.
 * Combine Course Status with Modules.
 */
export default function Home() {
  return (
    <div id="wd-home" className="flex gap-4">
      <div className="min-w-0 flex-1">
        <Modules />
      </div>
      <div className="hidden w-[250px] shrink-0 lg:block">
        <CourseStatus />
      </div>
    </div>
  );
}
