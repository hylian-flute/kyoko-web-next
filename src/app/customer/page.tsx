"use client";

import Frame from "@/component/frame";
import style from "./page.module.css";
import { useEffect } from "react";
import ImageList, { ImageItem } from "@/component/image-list-unclick";

const IMAGE_ARR = [
  new ImageItem(
    "Grace様",
    "/image/customer/grace.jpg",
  ),
  new ImageItem(
    "Atelier Tera's様",
    "/image/customer/atelier_teras.jpg",
  ),
  new ImageItem(
    "Brillante Rose様",
    "/image/customer/brillante_rose.jpg",
  ),
  new ImageItem(
    "La Sweet Bouquet様",
    "/image/customer/la_sweet_bouquet.jpg",
  ),
  new ImageItem(
    "Amour Mignon様",
    "/image/customer/amour_mignon.jpg",
  ),
  new ImageItem(
    "Les abeilles様",
    "/image/customer/les_abeilles.jpg",
  ),
  new ImageItem(
    "FLEURAGR様",
    "/image/customer/fleuragr.jpg",
  ),
  new ImageItem(
    "Belle Rose Tiffany様",
    "/image/customer/belle_rose_tiffany.jpg",
  ),
  new ImageItem(
    "Fontain'u'様",
    "/image/customer/fontain_u.jpg",
  ),
  new ImageItem(
    "Rose Allure様",
    "/image/customer/rose_allure.jpg",
  ),
  new ImageItem(
    "peal rose様",
    "/image/customer/peal_rose.jpg",
  ),
];

export default function Customer() {
  useEffect(() => {
    document.title = "お客様からの画像 - Design shop Kyoko K";
  }, []);

  return (
    <Frame>
      <main className={style.main}>
        <h1 className={style.head}>【お客様からの画像】</h1>
        <ImageList imageItemArr={IMAGE_ARR} thumbnailSize={{ width: 300, height: 400 }} />
        <p className={style.center}>
          お客様からお借りしている画像です。<br />
          皆様ありがとうございます。 
        </p>
      </main>
    </Frame>
  );
}
