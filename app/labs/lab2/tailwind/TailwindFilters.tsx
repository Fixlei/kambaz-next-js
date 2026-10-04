//the set of filter utility classes that enable developers to easily apply visual 
//effects like blur, brightness, contrast, grayscale, sepia, and more directly to
//elements such as images.

export default function TailwindFilters() {
  return (
    <div>
      <div>
        <h3>Blurs</h3>
        <div className="flex">
          <img className="blur-none w-1/4" src="/images/boston.jpg" />
          <img className="blur-sm w-1/4" src="/images/boston.jpg" />
          <img className="blur-lg w-1/4" src="/images/boston.jpg" />
          <img className="blur-2xl w-1/4" src="/images/boston.jpg" />
        </div>
      </div>
    </div>
  );
}
