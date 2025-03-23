"use client";

import Frame from "@/component/frame";
import style from "./page.module.css";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    location.href = "/";
  }, []);
  return (
    <Frame>
      <main className={style.main}>
        Coming Soon
      </main>
    </Frame>
  );
}
