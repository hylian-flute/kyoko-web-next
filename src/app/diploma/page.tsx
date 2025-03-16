"use client";

import Frame from "@/component/frame";
import style from "./page.module.css";
import { useEffect } from "react";
import ImageList, { ImageItem } from "@/component/image-list";

const IMAGE_ARR = [
  ImageItem.fromThumbnailAsFullImage(
    "DP-0001 ヨコ",
    "/image/diploma/DP-001-h.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0001 タテ",
    "/image/diploma/DP-001-v.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0002 ヨコ",
    "/image/diploma/DP-002-h.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0002 タテ",
    "/image/diploma/DP-002-v.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0003 ヨコ",
    "/image/diploma/DP-003-h.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0003 タテ",
    "/image/diploma/DP-003-v.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0004 ヨコ",
    "/image/diploma/DP-004-h.png",
    ["/image/diploma/DP-004-h-2.png"]
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0004 タテ",
    "/image/diploma/DP-004-v.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0006",
    "/image/diploma/DP-006.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0007",
    "/image/diploma/DP-007.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0009",
    "/image/diploma/DP-009.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0010",
    "/image/diploma/DP-010.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0011",
    "/image/diploma/DP-011.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "DP-0012",
    "/image/diploma/DP-012.png",
    []
  ),
];

export default function Diploma() {
  useEffect(() => {
    document.title = "ディプロマ - Design shop Kyoko K";
  }, []);

  return (
    <Frame>
      <main className={style.main}>
        <h1 className={style.head}>【ディプロマテンプレートデザイン一覧】</h1>
        <div className={style.price}>①少量枚数タイプ</div>
        <p className={style.description}>
          デザイン料&nbsp;5,000円（初回のみ）<br />
          その都度コース名/生徒様名/日付など全てをお入れして印刷して納品<br />
          家庭用プリンター印刷<br />
          @500×枚数
        </p>
        <div className={style.price}>②印刷所での印刷物タイプ</div>
        <p className={style.description}>
          デザイン料&nbsp;5,000円（初回のみ）<br />
          プラス&nbsp;印刷代100枚&nbsp;5560円<br />
          生徒様名/日付以外の部分を印刷。100枚納品<br />
          生徒様名/日付はお客様ご自身で印刷
        </p>
        <div className={style.price}>③データ納品タイプ</div>
        <p className={style.description}>
          デザイン料&nbsp;7000円<br />
          生徒様名・日付以外を入れたデータで納品<br />
          ※生徒様名と日付はお客様自身で印刷<br />
          ※本文/署名欄無しでの納品は不可<br />
          ※納品後デザインの加工(色変更も含む)不可
        </p>
        <p className={style.description}>
          【注意事項】<br />
          転売不可、著作権はDesignshop Kyoko.Kにございます<br />
          お客様の生徒様への終了証としてのみご利用下さい
        </p>
        <ImageList imageItemArr={IMAGE_ARR} />
      </main>
    </Frame>
  );
}
