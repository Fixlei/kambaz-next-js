"use client";
import { useState } from "react";

// Grandchild: the bottom of the chain and the only component that uses count.
// count and setCount are handed down to it layer by layer from PropDrilling.
function Grandchild({
  count,
  setCount,
}: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div
      id="wd-prop-drill-grandchild"
      className="me-2 rounded border border-neutral-200 p-3"
    >
      <h4>Grandchild</h4>
      <p>Count:{count}</p>
      <button
        type="button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white font-medium"
        onClick={() => setCount(count + 1)}
      >
        Increment in grandchild
      </button>
    </div>
  );
}

function Middlechild({
  count,
  setCount,
}: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div
      id="wd-prop-drill-middlechild"
      className="me-2 mb-2 rounded border border-netural-200 p-3"
    >
      <h4>middlechid</h4>
      <p>This component never uses count itself. It only forwardsprops.</p>
      <Grandchild count={count} setCount={setCount} />
    </div>
  );
}

// With AI: sample Middle layer. Like Child, it only forwards count and setCount.
function Middle({
  count,
  setCount,
}: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div
      id="wd-prop-drill-middle"
      className="me-2 mb-2 rounded border border-neutral-200 p-3"
    >
      <h4>Middle</h4>
      <Middlechild count={count} setCount={setCount} />
    </div>
  );
}

// Child: the first middle layer. It never uses count itself; it only forwards
// count and setCount down the chain. This forwarding is prop drilling.
function Child({
  count,
  setCount,
}: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div
      id="wd-prop-drill-child"
      className="me-4 mb-2 rounded border border-neutral-200 py-3"
    >
      <h4>chid</h4>
      <p>This component never uses count itself. It only forwardsprops.</p>
      <Middle count={count} setCount={setCount} />
    </div>
  );
}

// PropDrilling (top parent): owns the count state and passes it through
// Child only so that Grandchild can read and update it.
export default function PropDrilling() {
  const [count, setCount] = useState(0);
  return (
    <div id="wd-prop-drilling">
      <h2>Prop Drilling</h2>
      <p>Parent count: {count}</p>
      <Child count={count} setCount={setCount} />
    </div>
  );
}
