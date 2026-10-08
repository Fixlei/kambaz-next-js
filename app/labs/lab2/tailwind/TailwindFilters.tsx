//the set of filter utility classes that enable developers to easily apply visual
//effects like blur, brightness, contrast, grayscale, sepia, and more directly to
//elements such as images.

export default function TailwindFilters() {
  const src = "/images/boston.jpg";
  return (
    <div>
      <div>
        <h3>Blurs</h3>
        <div className="flex">
          <img className="blur-none w-1/4" src={src} alt="blur none" />
          <img className="blur-sm w-1/4" src={src} alt="blur sm" />
          <img className="blur-lg w-1/4" src={src} alt="blur lg" />
          <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
        </div>
      </div>
      {/* My row: a different filter family (contrast and sepia) */}
      <div className="mt-4">
        <h3>Contrast and sepia</h3>
        <div className="flex">
          <img className="contrast-50 w-1/4" src={src} alt="contrast 50" />
          <img className="contrast-200 w-1/4" src={src} alt="contrast 200" />
          <img className="sepia w-1/4" src={src} alt="sepia" />
          <img
            className="sepia contrast-150 w-1/4"
            src={src}
            alt="sepia with contrast 150"
          />
        </div>
      </div>
      {/* With AI: sample grayscale and brightness row */}
      <div id="wd-ai-filters" className="mt-4">
        <h3>Grayscale and brightness</h3>
        <div className="flex">
          <img className="grayscale w-1/4" src={src} alt="grayscale" />
          <img className="grayscale-0 w-1/4" src={src} alt="grayscale 0" />
          <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
          <img
            className="brightness-150 w-1/4"
            src={src}
            alt="brightness 150"
          />
        </div>
      </div>
    </div>
  );
}
