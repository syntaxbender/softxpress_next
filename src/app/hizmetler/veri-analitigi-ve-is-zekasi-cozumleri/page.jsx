import React from "react";
import BreadCrumb from "../../components/breadCrumb/breadCrumb";
import { SquareCardContainer } from "../../components/squareCards/squareCards";
import { mainNavigation } from "../../navigation";
const route = ["hizmetler", "veri-analitigi-ve-is-zekasi-cozumleri"];
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['veri-analitigi-ve-is-zekasi-cozumleri']);
const VeriAnalitigi = () => {
  return (
    <>
      <BreadCrumb route={route} nav={mainNavigation} />
      <SquareCardContainer
        serviceList={mainNavigation.hizmetler.sub["veri-analitigi-ve-is-zekasi-cozumleri"].sub}
        header={
          <>
            <h6>İş Dünyasında Bir Aklınız Olsun.</h6>
            <h4>Veri Analitiği ve İş Zekası Çözümleri</h4>
          </>
        }
      />
    </>
  );
};

export default VeriAnalitigi;
