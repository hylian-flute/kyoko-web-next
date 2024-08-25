import Frame from "@/component/frame";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Frame>
      <main className={style.main}>
        <p className={style.profile}>
          2004年よりフリーランスでデザインのお仕事をスタート
          <br />
          <span className={style.bold}>
            『大人可愛い』をテーマに
            <br />
            エレガントなデザインや
            <br />
            シンプルでも大人可愛いデザイン
          </span>
          <br />
          どの方にもご注文して頂けるテンプレートデザインの
          <br />
          名刺など承っております。
          <br />
          サロンやおうちで教室などされている方の名刺&nbsp;/
          <br />
          ディプロマ&nbsp;/&nbsp;ショップカード&nbsp;/&nbsp;ショップシール&nbsp;/
          <br />
          リーフレット&nbsp;/&nbsp;フライヤーなどをリーズナブルな金額で
          <br />
          お手伝いさせて頂いてます。
          <br />
          お気軽にお問い合わせください。
        </p>
        <ul className={style.linkList}>
          <li>
            <Link href="/">
              <Image src="/image/thumbnails/business_card.png" alt="" width={227} height={283} />
              <div>名刺</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/image/thumbnails/shop_card.png" alt="" width={227} height={283} />
              <div>正方形ショップカード</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/image/thumbnails/shop_sticker.png" alt="" width={227} height={283} />
              <div>ショップシール</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/image/thumbnails/diploma.png" alt="" width={227} height={283} />
              <div>ディプロマ</div>
            </Link>
          </li>
        </ul>
        <div className={style.socialList}>
          <a href="/">
            <Image className={style.instagram} src="/image/social/instagram.png" alt="Instagram" width={52} height={52} />
          </a>
          <a href="/">
            <Image className={style.ameba} src="/image/social/ameba.png" alt="アメーバブログ" width={97} height={112} />
          </a>
          <a href="/">
            <Image className={style.minne} src="/image/social/minne.png" alt="minne" width={120} height={50} />
          </a>
        </div>
      </main>
    </Frame>
  );
}
