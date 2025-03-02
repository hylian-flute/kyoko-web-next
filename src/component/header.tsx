import Link from "next/link";
import Image from "next/image";
import style from "./header.module.css";

type Props = Readonly<{
  className?: string;
  onClickMenu?: () => void;
}>;

export default function Header({ className, onClickMenu }: Props) {
  return (
    <header className={className}>
      <Link className={style.headerBackground} href="/">
        <div className={style.headerContent}>
          <Image
            className={style.headerLogo}
            src="/image/logo.png"
            alt="Design shop Kyoko.K"
            width={130}
            height={18}
          />
        </div>
      </Link>
      <div className={style.navigationHeader}>
        <Image
          className={style.headerIcon}
          src="/icon/menu.svg"
          alt=""
          width={24}
          height={24}
          onClick={onClickMenu}
        />
      </div>
    </header>
  );
}
