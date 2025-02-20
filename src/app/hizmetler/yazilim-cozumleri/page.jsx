import React from "react";
import BreadCrumb from "../../components/breadCrumb/breadCrumb";
import { SquareCardContainer } from "../../components/squareCards/squareCards";
import { mainNavigation } from "../../navigation";
const route = ["hizmetler", "yazilim-cozumleri"];
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub["yazilim-cozumleri"]);
const YazilimCozumleri = () => {
  return (
    <section>
      <BreadCrumb route={route} nav={mainNavigation} />
      <SquareCardContainer
        header={
          <>
            <h6>Softxpress daima yanınızda</h6>
            <h4>Yazılım Çözümleri</h4>
          </>
        }
        serviceList={mainNavigation.hizmetler.sub["yazilim-cozumleri"].sub}
      />
    </section>
  );
};

export default YazilimCozumleri;
