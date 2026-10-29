"use client";
import {useState} from "react";

export default function BooleanStateVariables(){
    const [done, setDone] = useState(true);
    const [urgent, setUrgent] = useState(true);
    // With AI: sample boolean
    const [saved, setSaved] = useState(false);
    return (
        <div id="wd-boolean-state-variables">
            <h2>Boolean State Variables</h2>
            <p>{done?"Done":"Not done"}</p>
            <label className="flex items-center gaps">
                <input
                type="checkbox"
                checked={done}
                onChange={()=>setDone(!done)}
                    id="wd-boolean-checkbox"/>
                Done
            </label>
            {done &&<div className="mt-2 rounded bg-yellow-100 p-2">Yay! Done</div>}
            {/* With AI: sample saved checkbox */}
            <label className="mt-2 flex items-center gap-2">
                <input
                type="checkbox"
                checked={saved}
                onChange={() => setSaved(!saved)}
                    id="wd-boolean-saved"/>
                Saved
            </label>
            {saved && <div>Saved</div>}
            <p>{urgent?"Urgent":"Not urgent"}</p>
            <label className="me-6 flex items-center gap-2">
                <input
                type="checkbox"
                checked={urgent}
                onChange={()=>setUrgent(!urgent)}
                    id="wd-boolean-checkbox-urgent"/>
                urgent
            </label>
            {done &&<div className="mt-2 rounded by-yellow-100 p-2">Yes!</div>}
        </div>
    );
}