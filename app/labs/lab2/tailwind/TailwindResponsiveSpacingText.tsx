//2.3.4.5 Spacing and text size. Spacing and font size take the same prefixes. 
//this function demos responsive spacing and text size: padding and font size grow at md breakpoint

export default function TailwindResponsiveSpacingText() {
  return (
    <div id="wd-tailwind-responsive-spacing-text">
      <h2 className="bg-yellow-200 p-2 text-base md:p-8 md:text-2xl">
        Spacing and text size
      </h2>
      <p className="bg-yellow-100 p-2 text-base md:p-8 md:text-2xl">
        Padding and the font size grow at md.
      </p>
    </div>
  );
}