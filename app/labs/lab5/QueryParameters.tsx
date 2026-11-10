"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        type="number"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-query-parameter-b"
        type="number"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        id="wd-query-parameter-add"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        id="wd-query-parameter-subtract"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-query-parameter-multiply"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} × {b}
      </a>
      <a
        id="wd-query-parameter-divide"
        className="me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}
