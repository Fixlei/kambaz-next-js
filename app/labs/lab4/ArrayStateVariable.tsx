"use client";

import { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const clearElement = () => {
    setArray([1, 2, 3, 4, 5]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((_item, i) => i !== index));
  };
  return (
    <div id="flex wd-array-state-variables">
      <h2>Array State Variables</h2>
      <button
        type="button"
        onClick={addElement}
        id="wd-add-element-click"
        className="mr-4 mb-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add Element
      </button>
      <button
        type="button"
        onClick={clearElement}
        id="wd-add-element-click"
        className="me-2 mb-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Clear Elements
      </button>
      <ul className="m-0 max-w-xs list-none p-0">
        {array.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-300 bg-gree-200 px-3 py-1.5"
          >
            <span>{item}</span>
            <button
              type="button"
              onClick={() => deleteElement(index)}
              id={`wd-delete-${index}-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
