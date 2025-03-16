"use client";

import Frame from "@/component/frame";
import style from "./page.module.css";
import { useEffect } from "react";
import ImageList, { ImageItem } from "@/component/image-list";

const IMAGE_ARR = [
  ImageItem.fromThumbnailAsFullImage(
    "R-0132",
    "/image/shop-sticker/R-0132.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0139",
    "/image/shop-sticker/R-0139.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0141",
    "/image/shop-sticker/R-0141.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0151",
    "/image/shop-sticker/R-0151.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0155",
    "/image/shop-sticker/R-0155.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0156",
    "/image/shop-sticker/R-0156.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0210",
    "/image/shop-sticker/R-0210.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0226",
    "/image/shop-sticker/R-0226.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0601",
    "/image/shop-sticker/R-0601.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0602",
    "/image/shop-sticker/R-0602.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0605",
    "/image/shop-sticker/R-0605.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0705",
    "/image/shop-sticker/R-0705.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-0806",
    "/image/shop-sticker/R-0806.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "R-1005",
    "/image/shop-sticker/R-1005.png",
    []
  ),
];

export default function ShopSticker() {
  useEffect(() => {
    document.title = "ショップシール - Design shop Kyoko K";
  }, []);

  return (
    <Frame>
      <main className={style.main}>
        <h1 className={style.head}>【ショップシールテンプレートデザイン一覧】</h1>
        <div className={style.price}>直径30mm&nbsp;100枚&nbsp;3110円</div>
        <div className={style.price}>直径40mm&nbsp;100枚&nbsp;3390円</div>
        <p className={style.description}>※全て印刷所での印刷物</p>
        <ImageList imageItemArr={IMAGE_ARR} />
      </main>
    </Frame>
  );
}
