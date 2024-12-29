"use client";

import { useEffect, useRef, useState } from "react";
import DialogBackground from "@/component/dialog_background";
import style from "./full_size_image_dialog.module.css";
import { usePreventTouchmove } from "@/hook/prevent-touchmove";

type Props = Readonly<{
  className?: string;
  imageUrlArr: string[];
  onClose: () => void;
}>;

export default function FullSizeImageDialog({
  className,
  imageUrlArr,
  onClose,
}: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [slidingStatusId, setSlidingStatusId] = useState<
    "none" | "left" | "right"
  >("none");
  const [touchStartX, setTouchStartX] = useState(0);
  const controlRef = useRef<HTMLDivElement>(null);

  usePreventTouchmove(controlRef);

  useEffect(() => {
    setImageIndex(0);
  }, [imageUrlArr]);

  const nextImageIndex = (imageIndex + 1) % imageUrlArr.length;
  const prevImageIndex =
    (imageIndex - 1 + imageUrlArr.length) % imageUrlArr.length;

  const imageClassName = [
    style.image,
    ...(slidingStatusId === "left"
      ? [style.sliding, style.left]
      : slidingStatusId === "right"
      ? [style.sliding, style.right]
      : []),
  ].join(" ");

  const goRight = () => {
    setSlidingStatusId("right");
  };

  const goLeft = () => {
    setSlidingStatusId("left");
  };

  const getOnEndSliding = (direction: "left" | "right") => () => {
    setSlidingStatusId("none");
    setImageIndex(direction === "left" ? prevImageIndex : nextImageIndex);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const minSwipeDistance = 24;
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX < touchStartX - minSwipeDistance) {
      goRight();
    } else if (touchEndX > touchStartX + minSwipeDistance) {
      goLeft();
    }
  };

  return (
    <div className={className}>
      <DialogBackground className={style.background} onClick={onClose} />
      <div className={style.control} ref={controlRef}>
        {imageUrlArr.length <= 1 ? (
          <img
            className={imageClassName}
            src={imageUrlArr[imageIndex]}
            alt=""
          />
        ) : (
          <>
            <img
              className={imageClassName}
              src={imageUrlArr[prevImageIndex]}
              alt=""
            />
            <img
              className={imageClassName}
              src={imageUrlArr[imageIndex]}
              alt=""
              onTransitionEnd={getOnEndSliding("left")}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            />
            <img
              className={imageClassName}
              src={imageUrlArr[nextImageIndex]}
              alt=""
            />
            <button
              className={[style.button, style.chevron, style.left].join(" ")}
              onClick={goLeft}
            />
            <button
              className={[style.button, style.chevron, style.right].join(" ")}
              onClick={goRight}
            />
          </>
        )}
        <button
          className={[style.button, style.close].join(" ")}
          onClick={onClose}
        />
      </div>
    </div>
  );
}
