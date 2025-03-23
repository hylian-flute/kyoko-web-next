import Image from "next/image";
import style from "./image-list-unclick.module.css";

export class ImageItem {
  constructor(
    public nameText: string,
    public thumbnailUrl: string,
  ) {}
}

export default function ImageList(attrs: {
  imageItemArr: ImageItem[];
  thumbnailSize: { width: number; height: number };
}) {
  return (
    <div className={style.imageList}>
      {attrs.imageItemArr.map((imageItem) => (
        <div className={style.listItem} key={imageItem.nameText}>
          <Image
            className={style.image}
            src={imageItem.thumbnailUrl}
            alt=""
            width={attrs.thumbnailSize.width}
            height={attrs.thumbnailSize.height}
          />
          <div className={style.name}>{imageItem.nameText}</div>
        </div>
      ))}
    </div>
  );
}
