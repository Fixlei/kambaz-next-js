/** 2.2 Decorating Documents with React Icons. React Icons
 *  bundles thousands of icons from several popular icon families
 *  — Font Awesome, Heroicons, and more */

import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { GiBeerStein } from "react-icons/gi";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineScience } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        {/* My icons, from two families not used above (gi and tb) */}
        <GiBeerStein className="text-amber-700" />
        <TbBrandNextjs className="text-4xl" />
        {/* With AI: two sample icons from md and hi2 */}
        <MdOutlineScience className="text-4xl text-blue-600" />
        <HiOutlineSparkles className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
