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
        {/* TODO: 要確認 */}
        <div className={style.price}>1名様分&nbsp;500円</div>
        <p className={style.description}>
          印刷会社での印刷ですので
          <br />
          鮮明で高品質
        </p>
        <ImageList imageItemArr={IMAGE_ARR} />
      </main>
    </Frame>
  );
}
