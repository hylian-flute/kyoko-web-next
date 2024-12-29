"use client";

import Image from "next/image";
import Frame from "@/component/frame";
import FullSizeImageDialog from "@/component/full_size_image_dialog";
import style from "./page.module.css";
import { useState } from "react";

class ImageItem {
  constructor(
    public nameText: string,
    public thumbnailUrl: string,
    public fullImageUrlArr: string[]
  ) {}

  static fromThumbnailAsFullImage(
    nameText: string,
    thumbnailUrl: string,
    fullImageUrlArr: string[]
  ) {
    return new ImageItem(nameText, thumbnailUrl, [
      thumbnailUrl,
      ...fullImageUrlArr,
    ]);
  }
}

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

export default function BusinessCard() {
  const [fullSizeImageArr, setFullSizeImageArr] = useState<string[] | null>(
    null
  );

  return (
    <Frame>
      <main className={style.main}>
        <h1 className={style.head}>【ショップシールテンプレートデザイン一覧】</h1>
        <div className={style.price}>100枚&nbsp;3110円</div>
        <p className={style.description}>
          印刷会社での印刷ですので
          <br />
          鮮明で高品質
        </p>
        <div className={style.imageList}>
          {IMAGE_ARR.map((imageItem) => (
            <div className={style.listItem} key={imageItem.nameText}>
              <Image
                className={style.image}
                src={imageItem.thumbnailUrl}
                alt=""
                width={500}
                height={500}
                onClick={() => setFullSizeImageArr(imageItem.fullImageUrlArr)}
              />
              <div className={style.name}>{imageItem.nameText}</div>
            </div>
          ))}
        </div>
        {fullSizeImageArr && (
          <FullSizeImageDialog
            className={"fullViewportOverlay visible"}
            imageUrlArr={fullSizeImageArr}
            onClose={() => {
              setFullSizeImageArr(null);
            }}
          />
        )}
      </main>
    </Frame>
  );
}
