import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
import featured from '@pub/images/entegrasyon.png';
import img1 from '@pub/images/2150010125.jpg';
import img2 from '@pub/images/2150041854.jpg';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['yazilim-cozumleri'].sub['entegrasyon-cozumleri']);
const Entegrasyon = () => {
  const route = ['hizmetler', 'yazilim-cozumleri', 'entegrasyon-cozumleri'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>İşletmenizde Kusursuz Uyum ve Verimlilik</h6>
            <h4>Mevcut Sistemlerin Entegrasyonu</h4>
          </ParagraphHeading>
          <p>Mevcut sistemlerin entegrasyonu hizmetleri, işletmenizde halihazırda kullanılan yazılım ve donanım sistemlerinin uyumlu bir şekilde çalışmasını sağlamak için tasarlanmıştır. Bu hizmet, farklı yazılım uygulamaları ve veri tabanları arasında veri akışını optimize eder ve iş süreçlerinizi daha verimli hale getirir. Mevcut sistemlerin entegrasyonu, işletmenizin operasyonel verimliliğini artırır, veri doğruluğunu sağlar ve kullanıcı deneyimini iyileştirir.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Yazılım Çözümleriniz İçin Güçlü Bağlantılar</h6>
            <h4>API Geliştirme ve Entegrasyonu</h4>
          </ParagraphHeading>
          <p>API (Application Programming Interface) geliştirme ve entegrasyonu hizmetleri, yazılım uygulamalarınızın diğer yazılım sistemleri ile iletişim kurmasını ve veri alışverişinde bulunmasını sağlar. Özel API'ler geliştirerek, yazılım çözümlerinizin işlevselliğini genişletebilir ve diğer sistemlerle entegrasyonunu kolaylaştırabilirsiniz. API entegrasyonu, farklı uygulamalar arasında sorunsuz bir veri akışı sağlayarak, iş süreçlerinizin otomasyonunu ve verimliliğini artırır.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Verilerinizi Tek Bir Noktada Toplayın</h6>
            <h4>Veri Entegrasyonu ve Senkronizasyonu</h4>
          </ParagraphHeading>
          <p>Veri entegrasyonu ve senkronizasyonu hizmetleri, işletmenizin farklı veri kaynaklarından gelen bilgileri tek bir platformda birleştirir ve senkronize eder. Bu hizmet, veri tabanları, bulut hizmetleri ve diğer veri depoları arasındaki veri akışını yönetir ve veri tutarlılığını sağlar. Veri entegrasyonu, işletmenizin tüm verilerini merkezi bir noktada toplar ve analiz edilebilir hale getirir. Senkronizasyon işlemleri ise, tüm sistemlerin güncel ve tutarlı verilere sahip olmasını sağlar, böylece karar alma süreçlerinizi destekler.Bu hizmetler, işletmenizin teknolojik altyapısını güçlendirerek, veri yönetimini kolaylaştırır ve iş süreçlerinizi daha verimli hale getirir. Entegrasyon çözümleri, farklı sistemlerin birlikte çalışmasını sağlayarak, işletmenizin dijital dönüşüm sürecini hızlandırır ve rekabet gücünü artırır.</p>
        </SectionParagraph>
      </section>
    </>
  );
};

export default Entegrasyon;
