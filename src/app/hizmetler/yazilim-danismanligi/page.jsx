import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
import featured from '@pub/images/software_dev.png';
import img1 from '@pub/images/2150010125.jpg';
import img2 from '@pub/images/2149311914.jpg';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub["yazilim-cozumleri"].sub['yazilim-danismanligi']);
const YazilimDanismanligi = () => {
  const route = ['hizmetler', 'yazilim-cozumleri', 'yazilim-danismanligi'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Teknolojik Dönüşümde Çözüm Ortağınız</h6>
            <h4>Modern Web Sunucularının Kurulumu ve Yönetimi</h4>
          </ParagraphHeading>
          <p>WebLogic, Tomcat, JBoss, GlassFish gibi modern web sunucularının kurulumu, yönetimi ve konfigürasyonu konularında teknik danışmanlık hizmeti sunuyoruz. Aynı zamanda erişim yönetimi alanında müşterilerimize çözümler sağlıyoruz.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Müşterilerimizin İhtiyaçlarına Uygun Özelleştirilmiş Çözümler </h6>
            <h4>Özel Yazılım İhtiyaçlarına Çözümler Üretme</h4>
          </ParagraphHeading>
          <p>Özel yazılım ihtiyaçlarına çözümleri sunarak, müşterilerimizin özel yazılım gereksinimlerini karşılıyoruz. Her bir müşterimizin benzersiz iş süreçleri ve talepleri doğrultusunda özelleştirilmiş çözümler geliştiriyoruz. Bu çözümler, işletmelerin verimliliğini artırmak, operasyonel süreçlerini optimize etmek ve rekabet avantajı elde etmek için tasarlanmıştır. Uzman ekibimiz, müşterilerimizin iş akışlarını ve ihtiyaçlarını anlamak için yakından çalışır ve buna göre özelleştirilmiş yazılım çözümleri sunar.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Yüksek Kalite ve Esneklik Sunan Çözümler</h6>
            <h4>DevOps ve Açık Kaynak Çözümler</h4>
          </ParagraphHeading>
          <p>Kuruluşların ihtiyaçlarını karşılayan mükemmel açık kaynaklı yazılım çözümleri sunarak, müşterilerimize profesyonel, uygun maliyetli ve yüksek kaliteli hizmetler sağlıyoruz. Açık kaynaklı yazılım çözümlerimiz, esneklik ve özelleştirilebilirlik açısından geniş bir yelpazede seçenekler sunarken, aynı zamanda maliyet etkinliği sağlıyoruz. Bu sayede, müşterilerimizin iş süreçlerini optimize ediyor, operasyonel verimliliklerini artırıyor ve rekabet avantajı elde etmelerine yardımcı oluyoruz. Uzman ekibimizle, her bir müşterimizin benzersiz gereksinimlerine uygun çözümler geliştirerek, onların hedeflerine ulaşmalarını sağlıyoruz.</p>
        </SectionParagraph>

      </section>
    </>
  );
};

export default YazilimDanismanligi;
