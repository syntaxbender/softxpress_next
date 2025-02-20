import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
import featured from '@pub/images/management.png';
import img1 from '@pub/images/2150169847.jpg';
import img2 from '@pub/images/2150038840.jpg';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['proje-ve-surec-yonetimi']);
const ProjeSurecYonetimi = () => {
  const route = ['hizmetler', 'proje-ve-surec-yonetimi'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Uzman Ekip, Kusursuz Sonuçlar</h6>
            <h4>Proje Yönetimi</h4>
          </ParagraphHeading>
          <p>Firmamız, proje yönetimi alanında uzmanlaşmış bir ekip tarafından yönetilen kapsamlı hizmetler sunmaktadır. Proje yönetimi sürecimiz, projenin başlangıcından sonuna kadar olan tüm aşamaları kapsayarak müşterilerimizin proje hedeflerine ulaşmalarında yardımcı olur. Hizmetlerimiz arasında proje planlama ve yönetimi, bütçe yönetimi ve maliyet kontrolü, kaynak yönetimi, risk yönetimi, ilerleme takibi ve raporlama, proje kapanışı ve değerlendirmesi yer almaktadır.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Verimlilik, Optimizasyon ve Rekabet Üstünlüğü</h6>
            <h4>Süreç Yönetimi</h4>
          </ParagraphHeading>
          <p>Süreç yönetimi, işletmelerin süreçlerini optimize etmelerine ve verimliliklerini artırmalarına yardımcı olur. Firmamız, müşterilerine süreç yönetimi konusunda danışmanlık ve çözümler sunarak iş süreçlerini geliştirmelerine katkıda bulunur. Hizmetlerimiz, süreç analizi ve değerlendirmesi, süreç iyileştirme önerileri ve uygulama, süreç performansı izleme ve ölçümleme, süreç otomasyonu ve teknoloji entegrasyonu ile eğitim ve süreç yönetimi desteği gibi unsurları içermektedir. Bu kapsamlı yaklaşımla, müşterilerimizin iş süreçlerinde verimliliği artırmalarını, maliyetleri düşürmelerini ve rekabet avantajı elde etmelerini sağlıyoruz.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Entegre Çözümlerle Verimlilik ve Rekabet Gücü</h6>
            <h4>ERP Süreç Yönetimi</h4>
          </ParagraphHeading>
          <p>Yapılan bir tahminin ardından, bu tahminler düzenli olarak güncellenmeli ve işletmenin bütçe hedeflerine göre performansının nasıl olduğunu göstermelidir. Bütçeleme sürecinin verimli ve etkili olması için, öncelikle işletmenin güncel performansının iyi anlaşılması gerekmektedir. İşletmeler, kendi özgün hedeflerine ve pazara özgü koşullara dayalı olarak detaylı finansal tablolar ve performans oranları belirlemeli ve bu bilgileri, sürekli olarak güncellenen bütçeleme ve tahmin süreçlerinde kullanmalıdır. Bu, işletmelerin değişen iş koşullarına çevik bir şekilde adapte olmalarını ve stratejik planlarını en iyi şekilde bilgilendirmelerini sağlar.</p>
        </SectionParagraph>

      </section>
    </>
  );
};

export default ProjeSurecYonetimi;
