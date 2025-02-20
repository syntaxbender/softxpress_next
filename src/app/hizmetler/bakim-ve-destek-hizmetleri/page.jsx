import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
import featured from "@pub/images/bakim_vector.png"
import img1 from "@pub/images/2150010125.jpg"
import img2 from "@pub/images/29631.jpg"
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['yazilim-cozumleri'].sub['bakim-ve-destek-hizmetleri']);
const BakimDestek = () => {
  const route = ['hizmetler', 'yazilim-cozumleri', 'bakim-ve-destek-hizmetleri'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Yazılımınızı Güncel ve Güvenli Kılın</h6>
            <h4>Yazılım Bakım ve Güncelleme Hizmetleri </h4>
          </ParagraphHeading>
          <p>Yazılım bakım ve güncelleme hizmetleri, mevcut yazılım çözümlerinizin en yüksek performansta çalışmasını sağlamak için düzenli olarak yapılan iyileştirmeleri ve güncellemeleri kapsar. Yazılımınızın her zaman en son teknolojiyle uyumlu olmasını ve güvenlik açıklarının kapatılmasını sağlamak için periyodik bakım ve güncellemeler gerçekleştiririz. Bu hizmet, yazılımınızın ömrünü uzatır ve iş süreçlerinizin kesintisiz devam etmesini sağlar.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Çözümlerimizle Hız Kazanın</h6>
            <h4>Teknik Destek ve Sorun Giderme</h4>
          </ParagraphHeading>
          <p> Teknik destek ve sorun giderme hizmetleri, yazılımınızla ilgili karşılaşabileceğiniz herhangi bir teknik sorun veya aksaklık durumunda hızlı ve etkili çözümler sunar. Uzman ekibimiz, yazılımınızın sorunsuz bir şekilde çalışmasını sağlamak için 7/24 teknik destek sağlar. Anında müdahale ile sorunları tespit eder, analiz eder ve kalıcı çözümler üretiriz. Bu hizmet, işletmenizin kesintisiz ve verimli bir şekilde çalışmasını destekler.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Performansı Zirveye Taşıyın</h6>
            <h4>Performans İzleme ve Optimizasyon</h4>
          </ParagraphHeading>
          <p>Performans izleme ve optimizasyon hizmetleri, yazılımınızın en yüksek verimlilikte çalışmasını sağlamak için sürekli olarak performansını izler ve optimize eder. Bu hizmet, yazılımınızın hızını, yanıt süresini ve genel performansını analiz eder. Potansiyel darboğazları ve performans sorunlarını tespit ederek, gerekli iyileştirmeleri yaparız. Bu sayede, yazılımınızın kullanıcı deneyimini artırır ve işletmenizin operasyonel verimliliğini yükseltiriz. Bu hizmetler, yazılımınızın güvenilirliğini ve performansını artırarak, iş süreçlerinizin kesintisiz ve verimli bir şekilde işlemesini sağlar.</p>
        </SectionParagraph>
      </section>
    </>
  );
};

export default BakimDestek;
