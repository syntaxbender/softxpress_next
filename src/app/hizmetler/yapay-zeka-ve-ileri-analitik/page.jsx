import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { MiniParagraph, MiniParagraphContainer, ParagraphHeading, SectionHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
import featured from '@pub/images/ai_bgdrop.png';
import img1 from '@pub/images/2150169851.jpg';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['veri-analitigi-ve-is-zekasi-cozumleri'].sub['yapay-zeka-ve-ileri-analitik']);
const YapayZekaIleriAnalitik = () => {
  const route = ['hizmetler', 'veri-analitigi-ve-is-zekasi-cozumleri', 'yapay-zeka-ve-ileri-analitik'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>İşinize verilerinizle yön verin</h6>
            <h4>Softxpress İle İleri Analitik Dönüşüm</h4>
          </ParagraphHeading>
          <p>Softxpress, yapay zeka ve ileri analitik konularında derin uzmanlığa sahiptir. Müşterilerimize, her türlü veriyi işleyebilecek altyapılar sağlayarak, bu verileri stratejik iş kararlarını destekleyecek çözümlere dönüştürüyoruz. Sürekli gelişim içinde olan çözümlerimiz, yenilikçi bakış açıları ve Ar-Ge projeleriyle zenginleştiriliyor, bu da müşterilerimize ve sektöre yeni deneyimler sunuyor. En güncel teknolojileri kullanarak geleceğinizi sağlam temeller üzerine inşa ediyoruz.</p>
        </FeaturedSection>
      </section>
      <section>
        <MiniParagraphContainer image={img1} firstWidth={4} secondWith={8}>
          <MiniParagraph>
            <h6>Yapay Zekâ ile Değerli Fikirler Elde Edin</h6>
            <p>Özel büyük veri çözümlerimizle, müşterilerimiz için değerli fikirler elde etmelerine yardımcı oluyoruz ve şirketleri için yol haritası oluşturmalarını destekliyoruz.</p>
          </MiniParagraph>
          <MiniParagraph>
            <h6>İleri Teknoloji Çözümleri</h6>
            <p>Veri akışını doğru bir yöntemle sağlamak için, müşterilerimize ileri teknoloji çözümlerini sunuyoruz ve potansiyel verilerden yararlanmalarını sağlıyoruz.</p>
          </MiniParagraph>
          <MiniParagraph>
            <h6>Veri Akışını Bozan Zorlukları Çözme</h6>
            <p>Büyük veri analitiği ve yapay zekâ ile, müşterilerimizin karşılaştığı en büyük zorlukları kararlı bir şekilde çözüyoruz. İleri teknoloji çözümleri ve modelleri sayesinde, verilerin değerini ortaya çıkarıyor ve şirketlerin ihtiyaç duyduğu hizmetleri sağlıyoruz.</p>
          </MiniParagraph>
        </MiniParagraphContainer>
      </section>
    </>
  );
};

export default YapayZekaIleriAnalitik;
