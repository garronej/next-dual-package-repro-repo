"use client";

import { css as css_ } from "a-module-that-uses-emotion/i-export-css-from-emotion-react";
import { css } from "@emotion/react";

const message = `@emotion/react dual package situation: ${
  css_ === css ? "false" : "true"
}`;

console.log("=======================>", message);

export default function Home() {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
