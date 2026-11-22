import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete: () => void;
}) {
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <Link
        href={`/courses/${cid}/assignments/${aid}`}
        className="wd-assignment-link font-semibold text-neutral-900 no-underline"
      >
        <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
        <div>
          <span className="font-semibold"> {title}</span>
          <div className="mt-1 text-sm text-neutral-600">{details}</div>
        </div>
      </Link>
      <FaTrash
        className="ms-auto shrink-0 cursor-pointer text-red-600"
        title="Delete assignment"
        onClick={() => {
          if (window.confirm(`delete? ${title}`)) onDelete();
        }}
      />
    </li>
  );
}
