//3.4.14 Destructing
//the destructing operator unpacks values from arrays, or properties from objects, into distinct variables. 
// The lab file is named Destructing.tsx, but the operation in prose is destructuring.

export default function Destructing() {
  // With AI: city added to person and destructured with name and age
  const person = { name: "John", age: 25, city: "Boston" };
  const { name, age, city } = person;
  const numbers = ["one", "two", "three", "four"];
  const [first, second, third, four] = numbers;
  const product = { id: 1, name: "Widget", price: 9.99 };
  const { id, name: productName, price } = product;
  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const &#123; name, age, city &#125; = &#123; name: &quot;John&quot;, age: 25, city: &quot;Boston&quot; &#125;
      <br />
      <br />
      name = {name}
      <br />
      age = {age}
      <br />
      city = {city}
      <h3>Array Destructing</h3>
      const [first, second, third, four] = [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;]
      <br />
      <br />
      first = {first}
      <br />
      second = {second}
      <br />
      third = {third}
      <br />
      four = {four}
      <br />
      <h3>product</h3>
      const &#123; id, name: productName, price &#125; = &#123; id: 1, name: &quot;Widget&quot;, price: 9.99 &#125;
      <br />
      <br />
      id = {id}
      <br />
      productName = {productName}
      <br />
      price = {price}  
      <hr />
    </div>
  );
}
