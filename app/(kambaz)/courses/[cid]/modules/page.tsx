"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";
import { useEffect } from "react";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const modules = useModulesStore((state) => state.modules);

  const setModules = useModulesStore((state) => state.setModules);

  useEffect(() => {
    const load = async () => {
      try {
        setModules(await client.findModulesForCourse(cid));
      } catch {
        setModules([]);
      }
    };
    load();
  }, [cid, setModules]);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
