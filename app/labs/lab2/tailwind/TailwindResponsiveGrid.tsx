//2.3.4.4 Grid columns by breakpoint， CSS Grid places children into columns, with a gap between the cells.
//this function demos responsive grid layout: single column, then two columns, then four columns
export default function TailwindResponsiveGrid() {
  return (
    <div
      id="wd-tailwind-responsive-grid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div className="text-center bg-blue-300 p-3">01</div>
      <div className="text-center bg-blue-300 p-3">02</div>
      <div className="text-center bg-blue-300 p-3">03</div>
      <div className="text-center bg-blue-300 p-3">04</div>
      <div className="text-center bg-blue-300 p-3">05</div>
      <div className="text-center bg-blue-300 p-3">06</div>
      <div className="text-center bg-blue-300 p-3">07</div>
      <div className="text-center bg-blue-300 p-3">08</div>
    </div>
  );
}
