import Image from "next/image";
import Frame from "@/component/frame";
import style from "./page.module.css";

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
    "A-0002",
    "/image/business-card/A-0002.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0004",
    "/image/business-card/A-0004.png",
    ["/image/business-card/A-0004-2.png"]
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0005",
    "/image/business-card/A-0005.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0006",
    "/image/business-card/A-0006.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0008",
    "/image/business-card/A-0008.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0010",
    "/image/business-card/A-0010.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0101 タテ",
    "/image/business-card/A-0101-v.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0101 ヨコ",
    "/image/business-card/A-0101-h.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0103",
    "/image/business-card/A-0103.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0104",
    "/image/business-card/A-0104.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0105",
    "/image/business-card/A-0105.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0106",
    "/image/business-card/A-0106.png",
    ["/image/business-card/A-0106-2.png"]
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0107",
    "/image/business-card/A-0107.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0112",
    "/image/business-card/A-0112.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0119",
    "/image/business-card/A-0119.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0125",
    "/image/business-card/A-0125.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0126",
    "/image/business-card/A-0126.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0131",
    "/image/business-card/A-0131.png",
    ["/image/business-card/A-0131-2.png"]
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0134",
    "/image/business-card/A-0134.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0137",
    "/image/business-card/A-0137.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0139",
    "/image/business-card/A-0139.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0141",
    "/image/business-card/A-0141.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0143",
    "/image/business-card/A-0143.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0144c",
    "/image/business-card/A-0144c.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0145",
    "/image/business-card/A-0145.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0153",
    "/image/business-card/A-0153.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0154",
    "/image/business-card/A-0154.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0156c ヨコ",
    "/image/business-card/A-0156c-h.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0202b",
    "/image/business-card/A-0202b.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0206",
    "/image/business-card/A-0206.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0210",
    "/image/business-card/A-0210.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0220",
    "/image/business-card/A-0220.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0226",
    "/image/business-card/A-0226.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0227",
    "/image/business-card/A-0227.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0301b",
    "/image/business-card/A-0301b.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0309",
    "/image/business-card/A-0309.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0311",
    "/image/business-card/A-0311.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0601 タテ",
    "/image/business-card/A-0601-v.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0602 タテ",
    "/image/business-card/A-0602-v.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0604",
    "/image/business-card/A-0604.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0607",
    "/image/business-card/A-0607.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0609",
    "/image/business-card/A-0609.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0613",
    "/image/business-card/A-0613.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0630",
    "/image/business-card/A-0630.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0806",
    "/image/business-card/A-0806.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0823",
    "/image/business-card/A-0823.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-0925",
    "/image/business-card/A-0925.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-1005",
    "/image/business-card/A-1005.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-1013",
    "/image/business-card/A-1013.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-1023",
    "/image/business-card/A-1023.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-1219",
    "/image/business-card/A-1219.png",
    []
  ),
  ImageItem.fromThumbnailAsFullImage(
    "A-1228",
    "/image/business-card/A-1228.png",
    []
  ),
];

export default function BusinessCard() {
  return (
    <Frame>
      <main className={style.main}>
        <h1 className={style.head}>【名刺テンプレートデザイン一覧】</h1>
        <div className={style.price}>100枚&nbsp;4000円</div>
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
              />
              <div className={style.name}>{imageItem.nameText}</div>
            </div>
          ))}
        </div>
      </main>
    </Frame>
  );
}
