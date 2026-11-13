"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
  const [WelcomeClick, setWelcomeOnClick] = useState("");
  const [WelcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };

  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div id="wd-http-client">
      <h3>HTTP CLIENT</h3>
      <h4>Requesting on Click</h4>
      <button
        type="button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={fetWelcomeOnClick}
      >
        Fetch Welcome
      </button>
      <p>
        Response from server: <b>{WelcomeClick}</b>
      </p>
      <h4>REquesting on Load</h4>
      <p>
        REsponse from server: <b>{WelcomeOnLoad}</b>
      </p>
    </div>
  );
}
