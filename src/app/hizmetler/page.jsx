import React from "react";
import BreadCrumb from "@/app/components/breadCrumb/breadCrumb";
import { SquareCardContainer } from "@/app/components/squareCards/squareCards";
import { mainNavigation } from "@/app/navigation";
const route = ["hizmetler"];
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler);
const Hizmetler = () => {
  return (
    <section>
      <BreadCrumb route={route} nav={mainNavigation} />
      <SquareCardContainer
        header={
          <>
            <h6>Müşterilerimize özel çözümlerimiz</h6>
            <h4>Hizmetler</h4>
          </>
        }
        serviceList={mainNavigation.hizmetler.sub}
      />
    </section>
  );
};

export default Hizmetler;
