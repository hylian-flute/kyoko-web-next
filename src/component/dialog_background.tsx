import { useEffect, useRef } from "react";
import style from "./dialog_background.module.css";
import { usePreventTouchmove } from "@/hook/prevent-touchmove";

type Props = Readonly<{
  className?: string;
  onClick?: () => void;
}>;

export default function DialogBackground({ className, onClick }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  usePreventTouchmove(rootRef);

  return (
    <div
      className={[className, style.rootBackground].join(" ")}
      ref={rootRef}
      onClick={onClick}
    />
  );
}
