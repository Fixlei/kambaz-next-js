//3.4.10 JSON Stringify
//JSON.stringify shows the real structure of an array,
//brackets and commas included. The object provides several
//useful formatting functions such as stringify() and parse().

export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const productDescription = {
    name: "Widget",
    price: 9.99,
    description: "A useful widget for everyday tasks.",
    inStock: true,
    quantity: 100,
  };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <br />
      <br />
      {/* With AI: sample object */}
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <br />
      <br />
      productDescription = {JSON.stringify(productDescription)}
      <hr />
    </div>
  );
}
