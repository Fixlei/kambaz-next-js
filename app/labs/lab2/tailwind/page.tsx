//Tailwind Lab page (route /labs/lab2/tailwind)
//Renders each Tailwind demo component in order: spacing, typography,
// colors, grids, filters, and responsive layouts
import "./index.css";
import TailwindSpacing from "./TailwindSpacing";
import TailwindTypography from "./TailwindTypography";
import TailwindBackgroundColors from "./TailwindBackgroundColors";
import TailwindResponsiveBreakpoint from "./TailwindResponsiveBreakpoint";
import TailwindGrids from "./TailwindGrids";
import TailwindFilters from "./TailwindFilters";
import TailwindResponsiveFlex from "./TailwindResponsiveFlex";
import TailwindResponsiveShowHide from "./TailwindResponsiveShowHide";
import TailwindResponsiveGrid from "./TailwindResponsiveGrid";
import TailwindResponsiveSpacingText from "./TailwindResponsiveSpacingText";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign";
import TailwindBorders from "./TailwindBorders";
import TailwindFlexAndWidth from "./TailwindFlexAndWidth";
//Tailwind = low-level atomic utility classes for styling elements directly in HTML

export default function TailwindLab() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Tailwind Lab</h1>
      <TailwindSpacing />
      <TailwindTypography />
      <TailwindBackgroundColors />
      <TailwindResponsiveBreakpoint />
      <TailwindFlexAndWidth />
      <TailwindGrids />
      <TailwindBorders />
      <TailwindFilters />
      <TailwindResponsiveFlex />
      <TailwindResponsiveShowHide />
      <TailwindResponsiveGrid />
      <TailwindResponsiveSpacingText />
      <TailwindResponsiveDesign />
    </div>
  );
}
