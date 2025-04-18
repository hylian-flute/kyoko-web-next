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
            エレガント・華やか・シンプルなど様々なデザイン
          </span>
          <br />
          どの方にもご注文して頂けるテンプレートデザインを
          <br className={"onlyMobile"} />
          多数ご用意しております。
          <br />
          サロンやおうちで教室などをされている方の
          <br />
          名刺、ディプロマ、ショップカード、ショップシール、
          <br />
          リーフレット、フライヤーなど
          <br />
          少量からリーズナブルな金額でお手伝いさせていただいてます。
          <br />
          お気軽にお問い合せ下さい。
        </p>
        <div className={style.linkCardContainer}>
          <Link className={style.linkCard} href="/business-card/">
            <Image
              className={style.image}
              src="/image/thumbnails/business_card.png"
              alt=""
              width={112}
              height={90}
            />
            <div className={style.text}>
              <div className={style.cardTitle}>名刺</div>
              <div className={style.cardSubtitle}>100枚&emsp;4000円</div>
              <div className={style.cardDescription}>
                ミンネでは少量でも販売
                <br />
                2500円～
              </div>
            </div>
          </Link>
          <Link className={style.linkCard} href="/shop-card/">
            <Image
              className={style.image}
              src="/image/thumbnails/shop_card.png"
              alt=""
              width={114}
              height={86}
            />
            <div className={style.text}>
              <div className={style.cardTitle}>正方形ショップカード</div>
              <div className={style.cardSubtitle}>80枚&emsp;3500円</div>
              <div className={style.cardDescription}>SIZE:50mm/40mm</div>
            </div>
          </Link>
          <Link className={style.linkCard} href="/shop-sticker/">
            <Image
              className={style.image}
              src="/image/thumbnails/shop_sticker.png"
              alt=""
              width={127}
              height={97}
            />
            <div className={style.text}>
              <div className={style.cardTitle}>ショップシール</div>
              <div className={style.cardSubtitle}>100枚&emsp;3110円～</div>
              <div className={style.cardDescription}>
                正円シール&nbsp;/&nbsp;楕円シール
                <br />
                正方形シール
                <br />
                透明PET用紙シール
              </div>
            </div>
          </Link>
          <Link className={style.linkCard} href="/diploma/">
            <Image
              className={style.image}
              src="/image/thumbnails/diploma.png"
              alt=""
              width={128}
              height={90}
            />
            <div className={style.text}>
              <div className={style.cardTitle}>ディプロマ</div>
              <div className={style.cardSubtitle}>
                デザイン料&emsp;5000円
                <br />
                <span className={style.small}>※&nbsp;初回のみ</span>
              </div>
              <div className={style.cardDescription}>
                印刷代&nbsp;1名分500円～
                <br />
                講座名&nbsp;/&nbsp;生徒様名&nbsp;/&nbsp;取得日
              </div>
            </div>
          </Link>
        </div>
        <div className={style.socialList}>
          <a href="https://www.instagram.com/designshop_kyoko.k/" target="_blank" rel="noopener noreferrer">
            <Image
              className={style.instagram}
              src="/image/social/instagram.png"
              alt="Instagram"
              width={52}
              height={52}
            />
          </a>
          <a href="https://ameblo.jp/nanarin-0328" target="_blank" rel="noopener noreferrer">
            <Image
              className={style.ameba}
              src="/image/social/ameba.png"
              alt="アメーバブログ"
              width={97}
              height={112}
            />
          </a>
          <a href="https://minne.com/@kyoko-k0328" target="_blank" rel="noopener noreferrer">
            <Image
              className={style.minne}
              src="/image/social/minne.png"
              alt="minne"
              width={120}
              height={50}
            />
          </a>
        </div>
      </main>
    </Frame>
  );
}
