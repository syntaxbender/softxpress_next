import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
import featured from '@pub/images/load_test.png';
import img1 from '@pub/images/2793.jpg';
import img2 from '@pub/images/2149631015.jpg';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub["yazilim-cozumleri"].sub['yazilim-testi-ve-kalite-guvencesi']);
const YazilimTesti = () => {
  const route = ['hizmetler', 'yazilim-cozumleri', 'yazilim-testi-ve-kalite-guvencesi'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Kararlı ve güvenilir yazılımlarla kontrol sizde</h6>
            <h4>Otomatik ve Manuel Yazılım Test Hizmetleri</h4>
          </ParagraphHeading>
          <p>Otomatik ve manuel yazılım test hizmetleri, yazılım çözümlerinizin kalitesini ve güvenilirliğini sağlamak için kapsamlı test süreçlerini içerir. Otomatik testler, yazılımınızın belirli senaryolar altında nasıl davrandığını hızlı ve etkili bir şekilde değerlendirir. Manuel testler ise, kullanıcı perspektifinden yazılımınızın işlevselliğini ve kullanıcı deneyimini test eder. Her iki test türü de, yazılımınızın hatalarını ve eksikliklerini tespit ederek, yüksek kaliteli ve güvenilir yazılım çözümleri sunmanızı sağlar.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Olası Risklere Hazır olun</h6>
            <h4>Performans ve Yük Testi </h4>
          </ParagraphHeading>
          <p>Performans ve yük testi hizmetleri, yazılımınızın yüksek kullanıcı talebi altında nasıl performans gösterdiğini değerlendirir. Performans testleri, yazılımınızın hızını, yanıt süresini ve genel performansını analiz eder. Yük testleri ise, yazılımınızın aynı anda birden fazla kullanıcı tarafından kullanıldığında nasıl tepki verdiğini test eder. Bu hizmet, yazılımınızın olası performans sorunlarını önceden tespit ederek, kullanıcı deneyimini optimize etmenize ve iş süreçlerinizin kesintisiz devam etmesini sağlar.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Kapsamlı Güvenlik Testleri ile Korumayı Garanti Altına Alın</h6>
            <h4>Güvenlik Testi ve Sızma Testi</h4>
          </ParagraphHeading>
          <p>Güvenlik testi ve sızma testi hizmetleri, yazılımınızın güvenliğini sağlamak için kapsamlı güvenlik değerlendirmeleri ve saldırı simülasyonları gerçekleştirir. Güvenlik testleri, yazılımınızın potansiyel güvenlik açıklarını tespit eder ve bu açıkları kapatmak için gerekli önlemleri almanıza yardımcı olur. Sızma testleri ise, gerçek dünya saldırılarını simüle ederek, yazılımınızın savunma mekanizmalarını test eder. Bu hizmetler, yazılımınızın güvenliğini artırarak, kullanıcı verilerini korur ve işletmenizin itibarını güvence altına alır. Bu hizmetler, yazılım çözümlerinizin kalite, performans ve güvenlik açısından en yüksek standartlarda olmasını sağlar ve işletmenizin başarılı yazılım projeleri sunmasına yardımcı olur.</p>
        </SectionParagraph>
      </section>
    </>
  );
};

export default YazilimTesti;
