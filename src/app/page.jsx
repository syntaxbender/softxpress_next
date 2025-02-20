import Image from 'next/image';
import style from './page.module.css';
import HomeBanner from './components/homeBanner/homeBanner';
import React from 'react';
import { SectionParagraph, ParagraphHeading } from '@/app/components/sectionComponents/sectionComponents';
import parallaxImage from '@pub/images/image9190.png';
import { mainNavigation } from './navigation';
import img1 from '@pub/images/323.jpg';
import img2 from '@pub/images/12055.jpg';
import img3 from '@pub/images/74892.jpg';
import img4 from '@pub/images/2149311914.jpg';
import CustomLink from '@/app/components/customLink/customLink.jsx';
import ParallaxContent from './components/parallaxContent/parallaxContent';
import CallMe from '@/app/components/contact/callMe';
import ButtonSet from './components/buttonSet/buttonSet';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.anasayfa);
const Home = () => {
  return (
    <>
      <section className={style.homeBannerSection}>
        <HomeBanner />
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>İş Ortaklarımız ile beraber büyüyoruz</h6>
            <h4>İşimiz Değer Üretmek</h4>
          </ParagraphHeading>
          <p>Softxpress, 2020 yılından bu yana veri analizi, süreç yönetimi, raporlama ve yazılım alanlarında hizmet veren bir teknoloji şirketidir. Veriye dayalı çözümler sunarak müşterilerimizin iş süreçlerini daha verimli hale getirmekteyiz. Deneyimli ve yenilikçi ekibimizle, sektördeki en güncel teknolojileri kullanarak iş ortaklarımızın yanında yer alıyoruz. Türkiye başta olmak üzere birçok ülkede, müşterilerimize özel çözümler geliştirerek onların işlerini bir adım ileri taşımalarına katkıda bulunuyoruz. Softxpress olarak, sürekli gelişimi hedefleyen bir iş ortağı olmayı misyon edindik.</p>
        </SectionParagraph>
      </section>
      <section className={style.parallaxSection}>
        <ParallaxContent bgImage="/images/image9190.png">
          <div className={`container ${style.parallaxContainer}`}>
            <div className="row">
              <div className="col-lg-5">
                <h4>Hizmetlerimiz hakkında detaylı bilgi almak ister misiniz?</h4>
              </div>
              <div className="col-lg-7">
                <div className={style.parallaxButtonsContainer}>
                  <CustomLink href="/iletisim">
                    <ButtonSet>İletişim</ButtonSet>
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        </ParallaxContent>
      </section>
      <section>
        <SectionParagraph id="hakkimizda" image={img2} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Geleceğe umutla bakıyoruz</h6>
            <h4>Vizyonumuz</h4>
          </ParagraphHeading>
          <p>Firmamız, yazılım teknolojilerinde öncü bir ekip tarafından yönetilen ve sürekli gelişen dijital dünyada müşterilere katma değer sağlayan bir iş zekası ve raporlama çözümleri şirketidir. Vizyonumuz, müşterilerimize veri analitiği, veri yönetimi ve süreç yönetimi konularında en etkili ve inovatif çözümleri sunarak iş süreçlerini dönüştürmelerine liderlik etmektir.</p>
        </SectionParagraph>
        <SectionParagraph image={img3} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Bugünden yarınlara odaklanıyoruz</h6>
            <h4>Misyonumuz</h4>
          </ParagraphHeading>
          <p>Softxpress olarak, veri analitiği, iş zekası, yazılım geliştirme, ERP çözümleri ve proje yönetimi alanlarında uzmanlaşmış bir ekiple müşterilerimize yenilikçi ve özelleştirilmiş hizmetler sunuyoruz. Amacımız, müşterilerimizin iş süreçlerini daha verimli ve etkin hale getirerek onların rekabet gücünü artırmaktır. Yüksek kalite standartları ve müşteri memnuniyeti odaklı çalışma prensiplerimizle, iş zekası danışmanlığı, veri modelleme, veri tabanı yönetimi, yazılım çözümleri, ERP sistemleri ve stratejik proje yönetimi gibi alanlarda güvenilir çözümler sağlıyoruz.</p>
        </SectionParagraph>

        <SectionParagraph image={img4} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Bugünden yarınlara odaklanıyoruz</h6>
            <h4>Misyonumuz</h4>
          </ParagraphHeading>
          <p>Teknolojik gelişmeleri yakından takip ederek, müşterilerimize en güncel ve etkili teknolojik çözümleri sunuyoruz. Her müşterimizin ihtiyaçlarına özel yaklaşımlar geliştiriyor, onların iş hedeflerine ulaşmalarına destek oluyoruz. Sürekli gelişim ve yenilikçilik anlayışımızla, sektörümüzde öncü bir konumda olmayı ve müşterilerimizin dijital dönüşüm süreçlerinde yanlarında yer almayı hedefliyoruz. Güvenilirlik, şeffaflık ve sürdürülebilirlik ilkeleri çerçevesinde, iş ortaklarımız ve müşterilerimizle uzun vadeli iş birlikleri kurarak, birlikte büyümeyi ve başarıya ulaşmayı önemsiyoruz. Softxpress olarak, teknolojiyi iş süreçlerine entegre ederek, müşterilerimizin işlerini daha akıllı, hızlı ve karlı hale getirmek için var gücümüzle çalışıyoruz.</p>
        </SectionParagraph>
      </section>
      <section className={style.callMe}>
        <CallMe></CallMe>
      </section>
    </>
  )
}

export default Home