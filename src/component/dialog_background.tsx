import style from "./dialog_background.module.css";

type Props = Readonly<{
  className?: string;
  onClick?: () => void;
}>;

export default function DialogBackground({ className, onClick }: Props) {
  return (
    <div
      className={[className, style.background].join(" ")}
      onClick={onClick}
    />
  );
}
