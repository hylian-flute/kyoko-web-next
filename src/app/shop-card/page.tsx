"use client";

import Frame from "@/component/frame";
import style from "./page.module.css";
import { useEffect } from "react";
import ImageList, { ImageItem } from "@/component/image-list";

const IMAGE_ARR = [
  ImageItem.fromThumbnailAsFullImage(
    "S-0002",
    "/image/shop-card/S-0002.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0101",
    "/image/shop-card/S-0101.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0111",
    "/image/shop-card/S-0111.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0112",
    "/image/shop-card/S-0112.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0113",
    "/image/shop-card/S-0113.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0119",
    "/image/shop-card/S-0119.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0123",
    "/image/shop-card/S-0123.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0124",
    "/image/shop-card/S-0124.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0125",
    "/image/shop-card/S-0125.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0126",
    "/image/shop-card/S-0126.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0129",
    "/image/shop-card/S-0129.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0130",
    "/image/shop-card/S-0130.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0137",
    "/image/shop-card/S-0137.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0138",
    "/image/shop-card/S-0138.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0139",
    "/image/shop-card/S-0139.png",
    ["/image/shop-card/S-0139-2.png"]
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0141",
    "/image/shop-card/S-0141.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0141c",
    "/image/shop-card/S-0141c.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0143",
    "/image/shop-card/S-0143.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0144",
    "/image/shop-card/S-0144.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0145",
    "/image/shop-card/S-0145.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0146",
    "/image/shop-card/S-0146.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0147",
    "/image/shop-card/S-0147.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0149",
    "/image/shop-card/S-0149.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0151",
    "/image/shop-card/S-0151.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0153",
    "/image/shop-card/S-0153.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0159b",
    "/image/shop-card/S-0159b.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0202b",
    "/image/shop-card/S-0202b.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0206",
    "/image/shop-card/S-0206.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0210",
    "/image/shop-card/S-0210.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0220",
    "/image/shop-card/S-0220.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0227",
    "/image/shop-card/S-0227.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0301",
    "/image/shop-card/S-0301.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0602",
    "/image/shop-card/S-0602.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0603",
    "/image/shop-card/S-0603.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0613",
    "/image/shop-card/S-0613.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0614",
    "/image/shop-card/S-0614.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-0823",
    "/image/shop-card/S-0823.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-1023",
    "/image/shop-card/S-1023.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "S-1028",
    "/image/shop-card/S-1028.png",
    []
  ),
];

export default function ShopCard() {
  useEffect(() => {
    document.title = "正方形ショップカード - Design shop Kyoko K";
  }, []);

  return (
    <Frame>
      <main className={style.main}>
        <h1 className={style.head}>【正方形ショップカードテンプレートデザイン一覧】</h1>
        <div className={style.price}>80枚&nbsp;3500円</div>
        <div className={style.price}>100枚&nbsp;4000円</div>
        <p className={style.description}>
          用紙：ホワイトアートポスト紙(両面微光沢紙)
          <br />
          ※全て印刷所での印刷物
        </p>
        <ImageList imageItemArr={IMAGE_ARR} />
      </main>
    </Frame>
  );
}
