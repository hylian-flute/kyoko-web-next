"use client";

import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import style from "./frame.module.css";
import DialogBackground from "./dialog_background";
import { useState } from "react";

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export default function Frame({ children }: Props) {
  const [navVisibilityBool, setNavVisibilityBool] = useState(false);

  const showNav = () => setNavVisibilityBool(true);
  const hideNav = () => setNavVisibilityBool(false);

  return (
    <div className={style.frame}>
      <Header className={style.header} onClickMenu={showNav} />
      {children}
      <DialogBackground
        className={[
          style.navBackground,
          ...(navVisibilityBool ? [style.navVisible] : []),
        ].join(" ")}
        onClick={hideNav}
      />
      <Footer className={style.footer} />
      <Nav
        className={[
          style.nav,
          ...(navVisibilityBool ? [style.navVisible] : []),
        ].join(" ")}
      />
    </div>
  );
}
