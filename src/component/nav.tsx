import Image from "next/image";
import Link from "next/link";
import style from "./nav.module.css";

type Props = Readonly<{
  className?: string;
}>

export default function Nav({ className }: Props) {
  return (
    <nav className={[className, style.nav].join(" ")}>
      <div className={style.logoContainer}>
        <Image
          className={style.logoImage}
          src="/image/logo.png"
          alt="Design shop Kyoko.K"
          width={130}
          height={18}
        ></Image>
      </div>
      <ul className={style.linkList}>
        <li><Link href="/business-card/">名刺</Link></li>
        <li><Link href="/">スタンプカード</Link></li>
        <li><Link href="/">正方形ショップカード</Link></li>
        <li><Link href="/">タグ</Link></li>
        <li><Link href="/">シール</Link></li>
        <li><Link href="/">ディプロマ</Link></li>
        <li><Link href="/">フライヤー</Link></li>
        <li><Link href="/">リーフレット</Link></li>
        <li><Link href="/">お客様からの画像</Link></li>
        <li><Link href="/">お問い合わせお申込み</Link></li>
      </ul>
    </nav>
  );
}