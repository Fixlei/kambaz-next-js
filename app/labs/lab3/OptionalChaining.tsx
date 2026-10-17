//3.4.17 Optional chaining and nullish coalescing
//Reading house.address.city throws if address is missing.
// Optional chaining ?. stops at the first null or undefined and
// yields undefined instead of crashing. Nullish coalescing ?? supplies
// a default only when the left side is null or undefined
//  (unlike ||, which also treats 0 and "" as missing).

type House = {
  bedrooms: number;
  address?: { street: string; city: string; zip?: string };
  garage?: { cars: number };
};

export default function OptionalChaining() {
  const house: House = {
    bedrooms: 4,
    address: {
      street: "Via Roma",
      city: "Roma",
    },
  };
  const missing = undefined as { prop?: string } | undefined;
  return (
    <div id="wd-optional-chaining">
      <h4>Optional Chaining</h4>
      house.address?.city = {house.address?.city}
      <br />
      missing?.prop ?? &quot;n/a&quot; = {missing?.prop ?? "n/a"}
      <br />
      house.garage?.cars ?? 0={house.garage?.cars ?? 0}
      <br />
      {/* With AI: missing zip falls back to "unknown" */}
      house.address?.zip ?? &quot;unknown&quot; = {house.address?.zip ?? "unknown"}
      <hr />
    </div>
  );
}
