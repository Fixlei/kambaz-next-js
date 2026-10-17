//3.4.15 Function Destructing
//A function can destructure its single object argument right in the parameter list.

export default function FunctionDestructing() {
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);
  const subtract = ({ a, b }: { a: number; b: number }) => a - b;
  const difference = subtract({ a: 4, b: 2 });
  const multiply = ({ c, d }: { c: number; d: number }) => c * d;
  // With AI: sample destructured divide
  const divide = ({ a, b }: { a: number; b: number }) => a / b;
  const quotient = divide({ a: 10, b: 2 });
  return (
    <div id="wd-function-destructing">
      <h2>Function Destructing</h2>
      const add = (a, b) =&gt; a + b;
      <br />
      const sum = add(1, 2);
      <br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b;
      <br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;);
      <br />
      const multiply = (&#123;c, d&#125;:&#123;c: number, d: number&#125;) =&gt;
      c* d;
      <br />
      const divide = (&#123; a, b &#125;: &#123; a: number; b: number &#125;)
      =&gt; a / b;
      <br />
      const quotient = divide(&#123; a: 10, b: 2 &#125;);
      <br />
      sum = {sum}
      <br />
      difference = {difference}
      <br />
      quotient = {quotient}
      <hr />
    </div>
  );
}