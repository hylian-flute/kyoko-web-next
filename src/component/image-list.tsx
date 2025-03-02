import Image from "next/image";
import FullSizeImageDialog from "@/component/full_size_image_dialog";
import style from "./image-list.module.css";
import { useState } from "react";

export class ImageItem {
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

export default function ImageList(attrs: { imageItemArr: ImageItem[] }) {
  const [fullSizeImageArr, setFullSizeImageArr] = useState<string[] | null>(
    null
  );

  return (
    <>
      <div className={style.imageList}>
        {attrs.imageItemArr.map((imageItem) => (
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
    </>
  );
}
