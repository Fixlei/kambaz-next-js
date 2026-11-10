"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input
        id="wd-path-parameter-a"
        type="number"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-path-parameter-b"
        type="number"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <a
        id="wd-path-parameter-add"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        id="wd-path-parameter-subtract"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-path-parameter-multiply"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
      >
        Multiply {a} × {b}
      </a>
      <a
        id="wd-path-parameter-divide"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
      >
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}
