"use client";

import { useState } from "react";

function dataObjectToHtmlDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function htmlDateStringToDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0);
}

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date(2026, 0, 15, 10, 30));
  // With AI: sample date field
  const [dueDate, setDueDate] = useState(new Date(2026, 0, 22, 10, 30));
  const [endDate, setEndDate] = useState(new Date(2026, 0, 15, 10, 30));
  return (
    <div>
      <h2>Date State Variables</h2>
      <h3>{startDate.toDateString()}</h3>

      <h3>{dataObjectToHtmlDateString(startDate)}</h3>
      <input
        type="date"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={dataObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(htmlDateStringToDate(e.target.value))}
        id="wd-start-date"
      />
      {/* With AI: sample due date, bound the same way as startDate */}
      <h3>{dueDate.toDateString()}</h3>
      <h3>{dataObjectToHtmlDateString(dueDate)}</h3>
      <input
        type="date"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={dataObjectToHtmlDateString(dueDate)}
        onChange={(e) => setDueDate(htmlDateStringToDate(e.target.value))}
        id="wd-due-date"
      />
      <br />
      <h3>{endDate.toDateString()}</h3>
      <h3>{dataObjectToHtmlDateString(endDate)}</h3>
      <input
        type="date"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={dataObjectToHtmlDateString(endDate)}
        onChange={(e) => setEndDate(htmlDateStringToDate(e.target.value))}
        id="wd-start-date"
      />
      <hr />
    </div>
  );
}
