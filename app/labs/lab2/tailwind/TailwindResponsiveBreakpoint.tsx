//This function demos the utility classes prefixed with screen sizes 
//(like sm:, md:, lg:) to adapt layouts, spacing, and styling seamlessly across devices.

export default function TailwindResponsiveBreakpoint() {
  return (
    <div
      id="wd-tailwind-responsive-breakpoint"
      /*widths are in rem (1rem is usually 16px, so 48rem is 768px). md: starts at 48rem (768px).*/
      className="bg-red-500 md:bg-green-500 p-4 text-white"
    >
      Red below md, green at md and up.
    </div>
  );
}