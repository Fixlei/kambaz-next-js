//typography utility classes that allow developers to quickly control text
//styling—such as font size, weight, color, alignment, and more—directly
//in their markup without writing custom CSS

export default function TailwindTypography() {
  return (
    <div>
      <h2 className="text-3xl">Font Size</h2>
      <p className="text-sm">This is small text.</p>
      <p className="text-base">This is base text.</p>
      <p className="text-lg">This is large text.</p>
      <p className="text-xl">This is extra large text.</p>
      <p className="text-2xl">This is 2x extra large text.</p>
      <p className="text-3xl">This is 3x extra large text.</p>
      <h2 className="text-3xl font-bold mt-4">Font Weight</h2>
      <p className="font-thin">This is thin font weight.</p>
      <p className="font-light">This is light font weight.</p>
      <p className="font-normal">This is normal font weight.</p>
      <p className="font-medium">This is medium font weight.</p>
      <p className="font-semibold">This is semi-bold font weight.</p>
      <p className="font-bold">This is bold font weight.</p>
      <p className="font-extrabold">This is extra-bold font weight.</p>
      <p className="font-black">This is black font weight.</p>
      <p id="wd-ai-type" className="text-2xl font-medium">
        This sample line pairs 2x extra large text with medium font weight.
      </p>

      <h2>Minghua Lei Bio</h2>
      <p className="italic text-xl font-bold font-bold">
        Minghua Lei is a web developer with a passion for creating interactive
        and user-friendly web applications. He has experience with various web
        technologies including React, Next.js, and Tailwind CSS.
      </p>
    </div>
  );
}
