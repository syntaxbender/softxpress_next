import React from "react";
import style from "./maintenance.module.css";
import maintenanceImg from "@pub/images/bakimdayiz.png";
import Image from "next/image";
const Maintenance = () => {
  return (
    <div className={style.maintenance}>
      <Image src={maintenanceImg} className={style.maintenanceImg} alt=""></Image>
      <p className={style.headerBottom}>Bu sayfa henüz yapım aşamasındadır!</p>
      <p>Anasayfaya dönebilir, istediğiniz sayfaya üst menü vasıtasıyla erişebilirsiniz.</p>
    </div>
  );
};

export default Maintenance;
