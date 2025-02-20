import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { MiniParagraph, MiniParagraphContainer, ParagraphHeading, SectionHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
// import featured from '@pub/images/entegrasyon.png';
import featured from '@pub/images/vector.png';
import img1 from '@pub/images/31215.jpg';
import img2 from '@pub/images/47.jpg';
import img3 from '@pub/images/2148793751.jpg';
import img4 from '@pub/images/79.jpg';
import img6 from '@pub/images/2532.jpg';
import planning from '@pub/images/52.jpg';
import saving from '@pub/images/26731.jpg';
import competitive from '@pub/images/2149352606.jpg';
import management from '@pub/images/133858.jpg';
import TabSlider from '../../components/tabSlider/tabSlider';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['veri-analitigi-ve-is-zekasi-cozumleri'].sub['raporlama-ve-is-zekasi-cozumleri']);
const RaporlamaIsZekasi = () => {
  const route = ['hizmetler', 'veri-analitigi-ve-is-zekasi-cozumleri', 'raporlama-ve-is-zekasi-cozumleri'];

  const carouselContents = [
    {
      image: management,
      content: (
        <>
          <h4>Stratejik Yönetim</h4>
          <p>Verilerin stratejik birer varlık olarak kullanılmasını sağlayarak, iş süreçlerinizi daha etkin bir şekilde yönetmenize olanak tanır. </p>
        </>
      ),
    },
    {
      image: competitive,
      content: (
        <>
          <h4>Rekabet Avantajı</h4>
          <p>Pazardaki değişikliklere hızlı adapte olmanızı sağlar, rekabet avantajınızı artırır.</p>
        </>
      ),
    },
    {
      image: saving,
      content: (
        <>
          <h4>Maliyet Tasarrufu</h4>
          <p>Veri tabanlı kararlar alarak, operasyonel süreçlerinizi optimize eder ve maliyet tasarrufu elde edersiniz.</p>
        </>
      ),
    },
    {
      image: planning,
      content: (
        <>
          <h4>Gelecek Odaklı Planlama</h4>
          <p>Veri analitiği ve öngörüsel analizlerle, gelecekteki eğilimlere dair önceden bilgi sahibi olmanızı sağlar.</p>
        </>
      ),
    },
  ];
  const carouselTabs = ['Stratejik Yönetim', 'Rekabet Avantajı', 'Maliyet Tasarrufu', 'Gelecek Odaklı Planlama'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Rekabette Avantaj Elde Etmenin Anahtarı</h6>
            <h4>Raporlama ve İş Zekası Çözümleri</h4>
          </ParagraphHeading>
          <p>Softxpress Raporlama ve İş Zekası Çözümleri: Softxpress'in Raporlama ve İş Zekası Çözümleri, kurumların verilerini analiz ederek stratejik karar alma süreçlerini destekler. Bu çözümler ile eyleme dönüşebilir içgörüler elde ederek, karar alma süreçlerini basitleştirmek mümkündür. Verileri toplayıp işleyerek analiz ediyor ve görselleştiriyoruz, bu sayede büyük hacimli veriler üzerinde kontrol sağlanıyor. Verilerinizi güvenle Cloud veya On-prem ortamlarında depolayarak, çeşitli analitik araçlara kesintisiz erişim imkanı sunuyoruz.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Verilerinizi Güçlü Bir Stratejiyle Aydınlatın </h6>
            <h4>İş Zekası Danışmanlığı</h4>
          </ParagraphHeading>
          <p>Günümüz iş dünyasında, hızla değişen pazar koşulları ve artan veri hacmiyle başa çıkabilmek, rekabet avantajı elde etmek için iş zekası danışmanlığı kaçınılmaz bir gereklilik haline gelmiştir. İşte tam da burada, iş zekası danışmanlığı devreye girerek, organizasyonların veri varlıklarını en üst düzeye çıkarmalarına yardımcı olur.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Stratejik İş Zekası Çözümleri ile Başarıya Ulaşın</h6>
            <h4>Çözüm Odaklı Hizmetler</h4>
          </ParagraphHeading>
          <p>İş zekası danışmanlığı, organizasyonların sahip oldukları veri kaynaklarını analiz etmek, bu verilerden anlamlı bilgiler çıkarmak ve stratejik kararlar alabilmek için gelişmiş çözümler sunar. Bu kapsamlı hizmet, iş süreçlerinizi iyileştirmek ve veri tabanlı karar almanızı desteklemek için tasarlanmıştır.</p>
        </SectionParagraph>
        <SectionParagraph image={img3} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper" >
          <ParagraphHeading>
            <h6>Verileri İş Sonuçlarına Dönüştürme Yolculuğunda Rehberlik</h6>
            <h4>Hedeflenen İş Sonuçları İçin Özelleştirilmiş Çözümler</h4>
          </ParagraphHeading>
          <p>İş zekası danışmanlığı, organizasyonunuzun ihtiyaçlarına özel olarak tasarlanan çözümler sunarak, verilerinizi hedeflenen iş sonuçlarına dönüştürmenize yardımcı olur. Power BI, Tableau, Qlik Sense gibi önde gelen iş zekası araçlarıyla entegre edilen çözümler, interaktif ve etkileşimli raporlama ile karar alıcılarına anında erişim sağlar.</p>
        </SectionParagraph>
        <SectionParagraph image={img4} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>İş Zekası Danışmanlığının Temel Taşları</h6>
            <h4>Veri Analitiği ve Görselleştirme</h4>
          </ParagraphHeading>
          <p>İş zekası danışmanlığında ön planda olan veri analitiği ve görselleştirme, karmaşık veri setlerinden anlamlı içgörüler elde etmenizi sağlar. Organizasyonunuzun sağlığı hakkında detaylı bilgiler sunan interaktif raporlar ve görsel analizler, karar alıcılarınızın bilinçli ve hızlı kararlar almasına yardımcı olur.</p>
        </SectionParagraph>
      </section>
      <section className="blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading className="blueBg">
                <h6>İş Süreçlerinizi Daha İyi Hale Getirin</h6>
                <h4>İş Zekası Danışmanlığı Avantajları</h4>
              </SectionHeading>
            </div>
          </div>
          <TabSlider tabs={carouselTabs} contents={carouselContents} />
        </div>
      </section>
      <section>
        <section>
          <SectionHeading className="mb-0">
            <h6>İş Süreçlerinizi Daha İyi Hale Getirin</h6>
            <h4>Responsive Dashboard ve Raporlama</h4>
          </SectionHeading>
          <MiniParagraphContainer image={img6} firstWidth={4} secondWith={8} reverse>
            <MiniParagraph>
              <h6>Dashboard ve Raporlama Çözümleri</h6>
              <p>SSRS, QlikSense, DevExpress Report Builder gibi farklı platformlarda responsive, native dashboard ve ad-hoc raporlama danışmanlık hizmetleri sunuyoruz.</p>
            </MiniParagraph>
            <MiniParagraph>
              <h6>Structure ve Unstructure Veri Kaynakları ile İlişkisel Modelleme</h6>
              <p>SSIS Programı aracılığıyla, yapınızı veya yapınızı temsil etmek için kullanmak isteyebileceğiniz, ihtiyaca göre ilişkisel star veya snowflake, incremental veya clustered column store veri ambarı modelleme danışmanlık hizmetleri veriyoruz.</p>
            </MiniParagraph>
            <MiniParagraph>
              <h6>OLAP Veri Mimarisi Danışmanlık Hizmetleri</h6>
              <p>Dimensional veya tabular in-memory, pivot mimarilerle excel'de kendi raporlarını üretebilecekleri analitik OLAP veri mimarisi danışmanlık hizmetleri sunuyoruz.</p>
            </MiniParagraph>
          </MiniParagraphContainer>
        </section>
      </section>
    </>
  );
};

export default RaporlamaIsZekasi;
