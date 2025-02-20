import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import featured from '@pub/images/software_dev22.png';
import { mainNavigation } from '../../navigation';
import img1 from '@pub/images/2150010125.jpg';
import img2 from '@pub/images/2150169863.jpg';
import img3 from '@pub/images/64360.jpg';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['yazilim-cozumleri'].sub['ozellestirilmis-yazilim-gelistirme']);
const OzellestirilmisYazilimHizmetleri = () => {
  const route = ['hizmetler', 'yazilim-cozumleri', 'ozellestirilmis-yazilim-gelistirme'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>İşletmenizin Geleceğini Şekillendiren Özel Yazılım Çözümleri</h6>
            <h4>İşletmenize Özel Yazılım Çözümleri </h4>
          </ParagraphHeading>
          <p>İşletmenize özel yazılım çözümleri, şirketinizin ihtiyaçlarına ve hedeflerine uygun olarak tasarlanmış yazılımlardır. Bu tür yazılımlar, iş süreçlerinizi daha verimli hale getirmek, müşteri deneyimini geliştirmek ve rekabet avantajı sağlamak için özel olarak geliştirilebilir. İşletmenizin benzersiz gereksinimlerini karşılamak üzere, mevcut yazılımlarınızı entegre etmekten yeni bir yazılım sistemi oluşturmaya kadar geniş bir yelpazede hizmet sunarız.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Yüksek Erişilebilir Uygulamalar ile Dijital Dönüşüm</h6>
            <h4>Web Uygulamalar</h4>
          </ParagraphHeading>
          <p>Web uygulamaları, internet tarayıcıları üzerinden erişilebilen ve kullanılan yazılım çözümleridir. Bu tür uygulamalar, kullanıcıların herhangi bir cihazdan, herhangi bir zamanda ve herhangi bir yerden erişebilmesini sağlar. E-ticaret siteleri, müşteri yönetim sistemleri ve iş akış yönetim araçları gibi çeşitli web uygulamalarını tasarlar ve geliştiririz. Hızlı, güvenilir ve kullanıcı dostu web uygulamalarıyla iş süreçlerinizi dijitalleştiririz.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>İşinizi düşünen yenilikçi uygulamalar</h6>
            <h4>Mobil Uygulamalar</h4>
          </ParagraphHeading>
          <p>Mobil uygulamalar, akıllı telefonlar ve tabletler gibi mobil cihazlarda çalışmak üzere tasarlanmış yazılımlardır. iOS ve Android platformları için özelleştirilmiş mobil uygulamalar geliştirerek, müşterilerinize ve çalışanlarınıza her zaman, her yerden erişim olanağı sunarız. Kullanıcı dostu arayüzler ve yüksek performanslı uygulamalar ile işletmenizin mobil dünyada güçlü bir varlık göstermesini sağlarız.</p>
        </SectionParagraph>
        <SectionParagraph image={img3} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Verimliliği Artıran Uygulamalar</h6>
            <h4>Masaüstü Uygulamalar</h4>
          </ParagraphHeading>
          <p>Masaüstü uygulamaları, bilgisayarlarda çalışan yazılımlardır ve genellikle yüksek performans gerektiren iş süreçleri için idealdir. Özel olarak tasarlanmış masaüstü uygulamaları, büyük veri analizi, grafik tasarım, mühendislik yazılımları ve diğer profesyonel ihtiyaçlar için kullanılabilir. Güvenli, hızlı ve kullanıcı dostu masaüstü uygulamalarıyla işletmenizin verimliliğini artırırız. Bu hizmetler, işletmenizin yazılım ihtiyaçlarını kapsamlı bir şekilde karşılayarak, dijital dönüşüm sürecinizi destekler ve iş süreçlerinizi optimize eder.</p>
        </SectionParagraph>
      </section>
    </>
  );
};

export default OzellestirilmisYazilimHizmetleri;
